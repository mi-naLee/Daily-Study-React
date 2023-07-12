import React from "react";

function ArrAdd({nick, drink, onChange, onCreate}){
    return (
        <div>
            <input name="nick" onChange={onChange} value={nick} />
            <input name="drink" onChange={onChange} value={drink} />
            <button onClick={onCreate}>추가</button> 
        </div>
    );
}

export default ArrAdd;