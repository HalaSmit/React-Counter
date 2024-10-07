import React, { useState } from 'react'

export default function Counter() {

    const [state, setState] = useState(0)

    function inc() {
        setState(state + 1)
    }
    function dec() {
        if (state > 0) {
            setState(state - 1)
        }
    }

    const btns = {
        padding: '2px 20px',
        fontSize: '20px'
    };

    return (
        <div>
            <h2>
                Counter is {state}
            </h2>
            <button style={btns} onClick={inc}>+</button>&nbsp;
            <button style={btns} onClick={dec}>-</button>
        </div>
    )
}