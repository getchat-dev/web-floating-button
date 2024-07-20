import { uuid, addClassName, unescapeHTML, buildQueryString, asyncEmbedIframe, isPlainObject, scalarToBoolean, parseClassNames } from '@/utils'

import '@/GetchatButton';

import Chat from '@/Chat';

import styles from '@/outer.module.css';

import onMessage from '@/onMessage'

export default async function ({
    className,
    showUnread = false,
    autoload = false,
    autostart = false,
    autostartDelay = 5,
    bgcolor,
    bdradius,
    closeOnEscape,
    color,
    insertButtonTo,
    buttonStyle,
    chatClassName,
    chatParent,
    chatStyle,
    chatNode,
    node,
    uri,
}) {
    const id = (__JS_GLOBAL_SCOPE__).toLowerCase() + uuid();

    if (typeof insertButtonTo === 'function') {
        insertButtonTo = insertButtonTo();
    };

    if (insertButtonTo instanceof Element) {
        if (!document.body.contains(insertButtonTo)) {
            throw new Error('insertButtonTo is Element but not yet in DOM, please insert it first');
        }
    }
    else {
        insertButtonTo = document.body;
    }

    const button = document.createElement('getchat-button');
    button.id = id;

    if (!className) {
        className = styles['button'];
    }
    className = parseClassNames(className);
    if (className) {
        addClassName(button, className);
    }

    if (isPlainObject(buttonStyle)) {
        Object.assign(button.style, buttonStyle);
    }

    if (bgcolor) {
        button.setAttribute('bgcolor', bgcolor);
    }
    if (color) {
        button.setAttribute('color', color);
    }
    if (bdradius) {
        button.setAttribute('bdradius', bdradius);
    }

    insertButtonTo.appendChild(button);

    const chat = new Chat({
        url: unescapeHTML(uri),
        button,
        autoload,
        autostart,
        autostartDelay,
        closeOnEscape,

        onBeforeEmbedChat: function createChatNode() {
            let doesElementOnPage = true;
            if (!(chatNode instanceof Element)) {
                chatNode = document.createElement('div');
                doesElementOnPage = false;
            }

            chatNode.className = styles['chat']

            if (isPlainObject(chatStyle)) {
                chatStyle = Object.assign({}, chatStyle, { display: 'none' });
            }
            else {
                chatStyle = { display: 'none' }
            }

            Object.assign(chatNode.style, chatStyle);

            if (chatClassName) {
                addClassName(chatNode, parseClassNames(chatClassName));
            }

            if (!doesElementOnPage || !document.body.contains(chatNode)) {
                if (!(chatParent instanceof Element)) {
                    chatParent = document.body;
                }

                chatParent.appendChild(chatNode);
            }

            return chatNode;
        },

        onChatLoaded: function () {
            // exactly here, on loading and before opening.
            // set a flag in the session that the chat was opened for us
            window.localStorage.setItem(`getchat_opened`, '1');

            const wh = window.innerHeight;
            let h = '200px';

            const chatNode = chat.getChatNode();
            if (chatNode) {
                const { display, visibility, position } = getComputedStyle(chatNode);

                Object.assign(chatNode.style, { display: 'block', visibility: 'hidden' });

                // if our chat is inside the element with a positional fix.
                // we need to calculate the height intelligently
                if (position === 'fixed') {
                    h = Math.min(wh - (wh - chatNode.offsetTop) - 20, 500);
                }
                else {
                    h = Math.min(wh - 20, 500);
                }

                chatNode.style.height = `${h}px`;

                Object.assign(chatNode.style, { display, visibility });
            }
        }
    });

    chat.addEventListener('GetChat.Close', function (data) {
        chat.close();
    });

    return chat;
}