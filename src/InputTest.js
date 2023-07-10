/*
    @date : 10JUL23
    @content : '벨로퍼트와 함께하는 모던 리액트'
    @order : 1
*/
import React, { useState } from "react";

function InputTest(){
    const [user, setUser] = useState({
        name : '',
        nick : ''
    });

    const { name, nick } = user;

    const handleInput = (e) =>{
        const { name, value } = e.target;
        setUser({
            ...user,
            [name] : value,
        })
    }

    const resetBtn = () =>{
        setUser({
            name : '',
            nick : '',
        })
    }

    return (
        <div>
            <input name="name" onChange={handleInput} value={name} placeholder="이름"/> 
            <input name="nick" onChange={handleInput} value={nick} placeholder="닉네임"/> 
            <button onClick={resetBtn}>초기화</button>
            <p>{name}({nick})</p>
        </div>
    ); 
}

export default InputTest;