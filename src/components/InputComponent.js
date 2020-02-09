import React, { useImperativeHandle, useState } from 'react';

const InputComponent = (props) => {

    const [text, setText] = useState("")
    const [showText, setShowText] = useState(true)


    const handleChangeText = (e) => {
        setText(e.target.value)

    }

    
    const toggleShowText = () => {
        setShowText(!showText)
    }
    return (
        <div className="w-100">
            <input value={text} onChange={handleChangeText} />
            <br></br>

            {showText && <p>{props.title}: {text}</p>}
            <button onClick={toggleShowText}>HIDE</button>
        </div>
    )
}

export default InputComponent;