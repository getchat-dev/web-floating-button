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

    onMessage('getchat.loaded', function () {
        if(typeof onload === 'function') {
            onload(frame);
        }

        return -1;
    }, frame);

    rootElement.appendChild(frame);

    return frame;
}