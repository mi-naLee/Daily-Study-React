import React from "react";

function AddList({member, onRemove, onToggle}){
    return (
        <div>
            <b style={{cursor: 'pointer', color: member.active ? 'red' : 'black'}}
                onClick={() => onToggle(member.id)}
            >{member.id}</b>
            <p>{member.nick} : {member.drink}</p>
            <button onClick={() => onRemove(member.id)}>삭제</button>
        </div>
    );
}

function ArrAddList({memberList, onRemove, onToggle}){
    return (
        // .map(val => ()) : 괄호 형태 주의하기
        <div>
            {memberList.map(member =>(
                <AddList member={member} key={member.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
}

export default ArrAddList;