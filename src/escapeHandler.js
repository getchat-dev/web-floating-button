let stack = [];

const keyHandler = function(e) {
    if (e.key === 'Escape') {
        const handler = stack.pop();

        if(stack.length === 0) {
            document.removeEventListener('keydown', keyHandler);
        }

        if(typeof(handler) === 'function') {
            handler();
        }
    }
};

export default {
    bind: function(handler) {
        if(typeof(handler) === 'function') {
            stack.push(handler)
        }

        if(stack.length === 1) {
            document.addEventListener('keydown', keyHandler);
        }
    },
    unbind: function(handler) {
        if(typeof(handler) === 'function') {
            stack = stack.filter(func => func !== handler);
        }

        if(stack.length === 0) {
            document.removeEventListener('keydown', keyHandler);
        }
    }
}