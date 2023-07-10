/*
    @date : 10JUL23
    @content : '벨로퍼트와 함께하는 모던 리액트'
    @order : 1
*/
import React, { useState } from "react";

function InputTest(){
    const [text, setText] = useState('');

    const handleInput = (e) =>{
        setText(e.target.value);
    }

    const resetBtn = () =>{
        setText('')
    }

    return (
        <div>
            <input onChange={handleInput} value={text}/> 
            <button onClick={resetBtn}>초기화</button>
            <p>{text}</p>
        </div>
    ); 
}

export default InputTest;