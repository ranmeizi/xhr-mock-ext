import React from 'react'
import Typography from '@mui/material/Typography';

export default function () {
    return <div>
        <Typography variant="h6" gutterBottom component="div">
            测试页面
        </Typography>
        <textarea name="" id="" cols={30} rows={10}></textarea>
        <button onClick={() => {
            window.request({
                type: 'COLLECTION_ADD',
                data: {
                    name: '测试股',
                    parentId: '',
                    type: 0
                }
            }).then(res => {
                console.log('res', res)
            })
        }}>add collection</button>
    </div>
}

(window as any).aaa = function (parentId: string = '', name: string) {
    window.request({
        type: 'COLLECTION_ADD',
        data: {
            name: name,
            parentId
        }
    }).then(res => {
        console.log('res', res);
        (window as any).res = res
    })
};
(window as any).ddd = function (id: string = '', type: string) {
    window.request({
        type: 'COLLECTION_EDIT',
        data: {
            id,
            type
        }
    }).then(res => {
        console.log('res', res);
        (window as any).res = res
    })
};


(window as any).bbb = function (id: string) {
    window.request({
        type: 'COLLECTION_BYID',
        data: {
            id
        }
    }).then(res => {
        console.log('res', res);
        (window as any).res = res
    })
};
(window as any).ccc = function (id: string) {
    window.request({
        type: 'COLLECTION_GET',
        data: null
    }).then(res => {
        console.log('res', res);
        (window as any).res = res
    })
}