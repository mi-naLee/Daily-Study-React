import React, { useCallback, useMemo, useRef, useState } from "react";
import ArrAdd from "../Week1/ArrAdd";
import ArrAddList from "../Week1/ArrAddList";

function ArrAddRun(){
    const [memberList, setMemberList] = useState([]);
    const [inputs, setInputs] = useState({
        nick: '',
        drink: '',
    })
    const { nick, drink } = inputs;

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setInputs(inputs => ({ // 함수형 업데이트 사용 --> useCallback deps에 inputs가 들어가지 않아도 된다.
            ...inputs,
            [name]: value
        }));
    },[]);

    const nextId = useRef(1);
    const onCreate = useCallback(() =>{
        const member = {
            id: nextId.current,
            nick,
            drink,
            active: false
        }
        // setMemberList([...memberList, member]);
        setMemberList(memberList => memberList.concat(member)); // 함수형 업데이트

        setInputs({
            nick: '',
            drink: '',
        })
        nextId.current += 1;
    },[nick ,drink])

    const onRemove = useCallback(id => {
        setMemberList(memberList => memberList.filter(member => member.id !== id)); // 함수형 업데이트
    },[])

    const onToggle = useCallback(id => {
        setMemberList(memberList => memberList.map(member => member.id === id ? {...member, active: !member.active } : member))
    },[])

    const CountActiveUsers = memberList => {
        return memberList.filter(member => member.active).length;
    }

    const count = useMemo(()=> CountActiveUsers(memberList),[memberList]);
    return (
        <>
            <h1>음료</h1>
            <ArrAdd nick={nick} drink={drink} onChange={onChange} onCreate={onCreate} />
            <ArrAddList memberList={memberList} onRemove={onRemove} onToggle={onToggle}/>
            <p>선택된 사람들 : {count}</p>
        </>
    );
}

// Arr_Add == CreateUser (input)
export default ArrAddRun;