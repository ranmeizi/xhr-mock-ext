import { tabRequest } from '../background/request'

// injectscript初始化消息
window.addEventListener('message', async function (e) {
    const { data } = e

    if (data.event === 'inject_get_matching') {
        console.log('contentjs')

        const res = await tabRequest('MATCHING_GET', { enabled: true })

        window.postMessage({
            event: 'inject_get_matching_res',
            data: res
        })
    }
})


var temp = document.createElement('script');
temp.setAttribute('type', 'text/javascript');
temp.src = chrome.extension.getURL('./inject_scripts/xhr.js');
temp.onload = function (this: HTMLScriptElement) {
    this.parentNode.removeChild(this);
};
document.head.appendChild(temp);

