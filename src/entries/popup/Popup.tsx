import React from 'react'
import Button from '@mui/material/Button';

export default function () {

    return <div>
        <Button variant="text" onClick={gotoBackground}>进入配置页面</Button>
    </div>
}

function gotoBackground() {
    window.open(chrome.extension.getURL('background.html'));
}