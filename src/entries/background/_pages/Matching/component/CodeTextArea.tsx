import React, { useRef } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';

type Props = {
    value?: any
    onChange?: (value: any) => void
}

const F = 70
const SHIFT = 16
const ALT = 18

export default function ({
    value,
    onChange
}: Props) {
    const asStack = useRef([])
    const el = useRef<HTMLTextAreaElement>()

    function onKeyUp(e: any) {
        if (e.keyCode === SHIFT || e.keyCode === ALT) {
            asStack.current.shift()
        }
    }

    function onKeyDown(e: any) {
        if (e.keyCode === SHIFT || e.keyCode === ALT) {
            asStack.current.push(1)
        }

        if (e.keyCode === F && asStack.current.length === 2) {
            onFormat()
            e.preventDefault()
        }
    }

    function onFormat() {
        if (!el.current) {
            return
        }
        try {
            const value = el.current.value
            const obj = JSON.parse(value)
            onChange(JSON.stringify(obj, null, 2))
        } catch (e) {
            //do nothing
            console.log(e)
        }
    }

    function onValueChange(e: any) {
        console.log(e?.target, e?.target?.value)
        onChange(e.target.value)
    }

    return <TextareaAutosize
        ref={el}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={() => asStack.current = []}
        value={value}
        onChange={onValueChange}
        style={{ width: '100%', height: '450px' }}
    />
}
