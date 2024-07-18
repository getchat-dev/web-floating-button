let _events = {};

window.addEventListener('message', function (e) {
    var data = {};

    if(e.data) {
        if(typeof(e.data) === 'string') {
            try {
                data = JSON.parse(e.data);
            }
            catch(error) {
                return;
            }
        }
        else {
            data = e.data;
        }
    }

    if (data.type) {
        if (Array.isArray(_events?.[data.type]) && _events[data.type].length) {
            _events[data.type] = _events[data.type].filter(handler => {
                try {
                    return (handler(e, data) !== -1);
                } catch (handlerError) {
                    console.error("Error in onMessage handler:", handlerError);
                    return true;
                }
            });
        }
    }
});

const addHandler = function (key, handler) {
    if(typeof(key) === 'string' && typeof(handler) === 'function') {
        if(!_events.hasOwnProperty(key)) {
            _events[key] = [];
        }

        _events[key].push(handler);
    }
}

export default function(...args) {
    let events = {};

    // we have a smart function that can be passed to as a single object
    // onMessage({'EventName': () => {}, 'EventName2': [() => {}, () => {}]});
    if (args.length === 1) {
        if(typeof(args[0]) === 'object' && Object.prototype.toString.call(args[0]) === '[object Object]') {
            events = args[0];
        }
    }
    // as well as the event name and function sequence
    // onMessage('EventName', () => {}, () => {});
    else if(args.length > 1) {
        if(typeof(args[0]) === 'string') {
            events[args[0]] = [];

            let callbacks = Array.prototype.slice.call(args, 1);

            const sourceFrame =
                (callbacks[callbacks.length - 1] instanceof HTMLIFrameElement)
                    ? callbacks.pop()
                    : null

            if(callbacks.length) {
                for(let i = 0, end = callbacks.length; i < end; i++) {
                    if (typeof (callbacks[i]) === 'function') {
                        if (sourceFrame) {
                            const fn = callbacks[i];
                            callbacks[i] = function (event, data) {
                                if (sourceFrame.contentWindow === event.source.window) {
                                    return fn(event, data);
                                }
                            }
                        }
                        events[args[0]].push(callbacks[i]);
                    }
                }
            }
        }
    }

    if(Object.keys(events).length) {
        for(let key in events) {
            if(typeof(events[key]) === 'function') {
                addHandler(key, events[key]);
            }
            else if(typeof(events[key]) === 'object' && Object.prototype.toString.call(events[key]) === '[object Array]') {
                for(let i in events[key]) {
                    addHandler(key, events[key][i]);
                }
            }
        }
    }
}