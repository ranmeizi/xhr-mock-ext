let container: HTMLDivElement = null

function init() {
    // 创建容器
    container = document.createElement('div')
    container.className = 'chrome-notification'
    document.body.appendChild(container)
}

type openProps = {
    title: string,
    content: string,
    timeout?: number
}

export function open({
    title,
    content,
    timeout = 3000
}: openProps) {
    // 创建节点
    const panel = document.createElement('div')
    panel.className = 'chrome-notification-panel'

    // 创建title
    const titleEl = document.createElement('div')
    titleEl.className = 'chrome-notification-panel-title'

    // 创建title文字
    const titleText = document.createElement('span')
    titleText.innerText = title

    // 创建关闭按钮
    const titleCloseBtn = document.createElement('i')
    titleCloseBtn.className = 'chrome-notification-panel-title-close'
    titleCloseBtn.innerText = 'x'
    function closeN() {
        titleCloseBtn.removeEventListener('click', closeN)
        const width = panel.clientWidth

        let target = 0

        requestAnimationFrame(function closeAnim() {
            target += width / 17
            panel.style.transform = `translateX(${target}px)`
            if (target < width + 16) {
                requestAnimationFrame(closeAnim)
            } else {
                panel.remove()
            }
        })
    }
    titleCloseBtn.addEventListener('click', closeN)

    // 创建content
    const contentEl = document.createElement('div')
    contentEl.className = 'chrome-notification-panel-content'
    contentEl.innerHTML = content

    titleEl.appendChild(titleText)
    titleEl.appendChild(titleCloseBtn)

    panel.appendChild(titleEl)
    panel.appendChild(contentEl)

    container.appendChild(panel)


    const width = panel.clientWidth
    panel.style.transform = `translateX(${width + 16}px)`
    let target = width + 16

    requestAnimationFrame(function openAnim() {
        target -= width / 17
        panel.style.transform = `translateX(${target}px)`
        if (target > 0) {
            requestAnimationFrame(openAnim)
        }
    })

    setTimeout(closeN, timeout);
}

init()