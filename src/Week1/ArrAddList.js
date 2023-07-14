import React from "react";

// User
const AddList = React.memo(function AddList({member, onRemove, onToggle}){
    console.log("user---------")
    return (
        <div>
            <b style={{cursor: 'pointer', color: member.active ? 'red' : 'black'}}
                onClick={() => onToggle(member.id)}
            >{member.id}</b>
            <p>{member.nick} : {member.drink}</p>
            <button onClick={() => onRemove(member.id)}>삭제</button>
        </div>
    );
});

// UserList
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

export default React.memo(ArrAddList);