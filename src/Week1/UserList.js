import React from "react";

const User = React.memo(function User({user, onRemove, onToggle}){
    console.log("User rendering-----")
    return(
        <div>
            <b style={{cursor: 'pointer', color: user.active ? 'red' : 'black'}}
                onClick={()=>onToggle(user.id)}
            >{user.username}</b> 
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

function UserList({users, onRemove, onToggle}){
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
}

export default React.memo(UserList);