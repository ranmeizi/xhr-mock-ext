var temp = document.createElement('script');
temp.setAttribute('type', 'text/javascript');
temp.src = chrome.extension.getURL('./inject_scripts/xhr.js');
temp.onload = function (this: HTMLScriptElement) {
    this.parentNode.removeChild(this);
};
document.head.appendChild(temp);

setTimeout(() => {
    chrome.runtime.sendMessage({
        type: 'aaa',
        data: 'bbb'
    })
}, 1000);

