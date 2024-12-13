import onMessage from '@/onMessage';
import { isSafari, isTouchDevice } from '@/utils';

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

    onMessage('getchat.loaded', function () {
        if(typeof onload === 'function') {
            onload(frame);
        }

        return -1;
    }, frame);

    rootElement.appendChild(frame);

    if(! (isTouchDevice() || isSafari())) {
        // for some browser chrome, maybe firefox it wiil prevent back gesture
        // unfortunately, it will not work on safari defenetly, because safari capture back gesture on OS level
        const defaultOverscrollBehaviorX = window.getComputedStyle(document.body)?.overscrollBehaviorX ?? 'auto';
        frame.addEventListener('mouseenter', function () {
            document.body.style.overscrollBehaviorX = 'contain';
        });
        frame.addEventListener('mouseleave', function () {
            document.body.style.overscrollBehaviorX = defaultOverscrollBehaviorX;
        });
    }

    return frame;
}