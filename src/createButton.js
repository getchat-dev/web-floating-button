import { uuid, addClassName, unescapeHTML, compartmentalizeCssValue, buildQueryString, asyncEmbedIframe, isPlainObject, scalarToBoolean, parseClassNames } from '@/utils'

import GetchatButton from '@/GetchatButton';

import Chat from '@/Chat';

import styles from '@/outer.module.css';

import onMessage from '@/onMessage'

/**
 * Options for creating a chat button.
 * 
 * @typedef {Object} CreateButtonOptions
 * @property {string} [uri] - The URI for the chat service.
 * @property {string} [className] - The class name to apply to the button.
 * @property {boolean | 'messages' | 'chats'} [showUnread] - Whether to show unread messages or chats count.
 * @property {boolean} [autoload=false] - Whether to autoload the chat. Default is false.
 * @property {boolean} [autoopen=false] - Whether to open the chat widget automatically. Default is false.
 * @property {number} [autoopenDelay=5000] - Delay in milliseconds before auto open. Default is 5000ms.
 * @property {boolean} [closeOnEscape=true] - Whether to close the chat on escape press.
 * @property {string} [bgcolor] - Background color of the button.
 * @property {string} [bdradius] - Border radius of the button.
 * @property {string} [bdwidth] - Border width of the button.
 * @property {string} [bdcolor] - Border color of the button.
 * @property {string} [badgecolor] - Border color of the button.
 * @property {string} [badgebg] - Border color of the button.
 * @property {string} [color] - Text color of the button.
 * @property {HTMLElement|function(): HTMLElement} [insertButtonTo] - The HTML element to insert the button into.
 * @property {Partial<CSSStyleDeclaration>} [buttonStyle] - Custom styles to apply to the button.
 * @property {string} [chatClassName] - Class name to apply to the chat window.
 * @property {HTMLElement|null} [chatParent] - The parent HTML element of the chat window.
 * @property {Partial<CSSStyleDeclaration>} [chatStyle] - Custom styles to apply to the chat window.
 * @property {HTMLElement|null} [chatNode] - The HTML element representing the chat node.
 */
export default async function ({
    uri,
    className,
    showUnread = false,
    autoload = false,
    autoopen = false,
    autoopenDelay = 5,
    closeOnEscape,
    color,
    insertButtonTo,
    buttonStyle,
    chatClassName,
    chatParent,
    chatStyle,
    chatNode,
    ...options
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

    if (GetchatButton.supportedAttributes?.length) {
        for (let attr of GetchatButton.supportedAttributes) {
            if (options[attr]) {
                button.setAttribute('data-'+attr, options[attr]);
            }
        }
    }

    insertButtonTo.appendChild(button);

    const chat = new Chat({
        url: unescapeHTML(uri),
        button,
        autoload,
        autoopen,
        autoopenDelay,
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

            const chatNode = chat.getChatNode();
            if (chatNode) {
                let { display, visibility, position, top, right, bottom, left } = getComputedStyle(chatNode);

                const newStyle = {
                    display, visibility
                }

                Object.assign(chatNode.style, { display: 'block', visibility: 'hidden' });

                requestAnimationFrame(() => {
                    // if our chat is inside the element with a positional fix.
                    // we need to calculate the height intelligently
                    if (position === 'fixed') {

                        bottom = compartmentalizeCssValue(bottom, 'auto');
                        top = compartmentalizeCssValue(top, 'auto');

                        if (bottom !== 'auto' && bottom?.value) {
                            if (top === 'auto') {
                                newStyle.top = bottom.value + bottom.unit;
                                newStyle.height = 'auto';
                            }
                        }
                        else if(top !== 'auto' && top.value) {
                            if (bottom === 'auto') {
                                newStyle.bottom = top.value + top.unit;
                                newStyle.height = 'auto';
                            }
                        }
                    }
                    else {
                        newStyle.height = `${Math.min(wh - 20, 500)}px`;
                    }

                    Object.assign(chatNode.style, newStyle);
                });
            }
        }
    });

    button.setChatInstance(chat);

    chat.addEventListener('getchat.close', function (data) {
        chat.close();
    });

    return chat;
}