import React from 'react'

// Create Box component
const Box = (props) => {
    return (
        <button className="square-box" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Box;