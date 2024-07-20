import onMessage from '@/onMessage';

export default function (rootElement, src, style, onload, onclose) {
    if(!(rootElement instanceof Element)) {
        rootElement = document.body;
    }

    const frame = document.createElement('iframe');
    frame.src = src;
    frame.setAttribute('frameborder', '0');
    frame.setAttribute('seamless', 'seamless');

    frame.style.width = '100%';
    frame.style.height = '100%';

    // fix for safari on mac
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    let restorePrevState = function () { };

    //if(isSafari) {
        let elStyle = window.getComputedStyle(rootElement);

        // we need to understand if the element is hidden through the nan display
        if(elStyle.display === 'none') {

            const prevVisibility = elStyle.visibility;
            restorePrevState = function() {
                rootElement.style.display = 'none';
                rootElement.style.visibility = prevVisibility;
            }

            frame.onerror = restorePrevState

            // hide through visibilitie to draw everything correctly.
            rootElement.style.visibility = 'hidden';
            rootElement.style.display = 'block';
        }
    //}

    onMessage('getchat.loaded', function () {
        restorePrevState();
        if(typeof onload === 'function') {
            onload(frame);
        }

        return -1;
    }, frame);

    rootElement.appendChild(frame);

    return frame;
}