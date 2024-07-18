import createButton from '@/createButton';

(function (w) {

    if (w[__JS_GLOBAL_SCOPE__]?.isLoaded) {
        return;
    }

    w[__JS_GLOBAL_SCOPE__] = {
        version: process.env.VERSION,
        createButton
    };

    const loadFnName = (__JS_GLOBAL_SCOPE__).toLowerCase() + 'onloaded';
    if (typeof (w[loadFnName]) === 'function') {
        w[loadFnName]( w[__JS_GLOBAL_SCOPE__] );
    }

    w[__JS_GLOBAL_SCOPE__].isLoaded = true

    // if the browser supports freezing objects, freeze them
    if(Object.freeze) {
        Object.freeze(w[__JS_GLOBAL_SCOPE__])
    }
})(window);