import React from "react";

function User({user}){
    return (
        <>
            <b>{user.name}</b> : {user.phone}
            <br />
        </>
    );
}

function Arrays() {
    const users = [
        {   id : 1,
            name : 'aaa',
            phone : '010-1111-2222'
        },
        {   id : 2,
            name : 'bbb',
            phone : '010-2222-3333' 
        }
    ]

    return (
        <div>
            {users.map(user =>(
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}

export default Arrays;