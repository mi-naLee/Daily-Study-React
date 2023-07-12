import React, { useRef, useState } from "react";
import ArrAdd from "../Week1/ArrAdd";
import ArrAddList from "../Week1/ArrAddList";

function ArrAddRun(){
    const [memberList, setMemberList] = useState([]);
    const [inputs, setInputs] = useState({
        nick: '',
        drink: ''
    })
    const { nick, drink } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const nextId = useRef(1);
    const onCreate = () =>{
        const member = {
            id: nextId.current,
            nick,
            drink
        }
        console.log(member);
        // setMemberList([...memberList, member]);
        setMemberList(memberList.concat(member));
        console.log(memberList)

        setInputs({
            nick: '',
            drink: ''
        })
        nextId.current += 1;
    }

    return (
        <>
            <h1>음료</h1>
            <ArrAdd nick={nick} drink={drink} onChange={onChange} onCreate={onCreate} />
            <ArrAddList memberList={memberList} />
        </>
    );
}

// Arr_Add == CreateUser (input)
export default ArrAddRun;