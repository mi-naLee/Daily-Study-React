import React from "react";

function AddList({member}){
    return (
        <div>
            <b>{member.id}</b>
            <p>{member.nick} : {member.drink}</p>
        </div>
    );
}

function ArrAddList({memberList}){
    return (
        // .map(val => ()) : 괄호 형태 주의하기
        <div>
            {memberList.map(member =>(
                <AddList member={member} key={member.id}/>
            ))}
        </div>
    );
}

export default ArrAddList;