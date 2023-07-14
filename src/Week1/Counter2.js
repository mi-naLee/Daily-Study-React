import React, { useReducer} from "react";

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// Counter.js에 useReducer 적용
function Counter2(){
    const [number, dispatch] = useReducer(reducer, 0); // dispatch를 이용하면 reducer 함수를 실행, 초기값 0

    const onIncrease = () =>{
        //setNumber(prevNumber => prevNumber + 1);
        dispatch({type : 'INCREMENT'}); // type의 명명 규칙 : 대문자_
    }

    const onDecrease = () =>{
        //setNumber(prevNumber => prevNumber - 1);
        dispatch({type: 'DECREMENT'});
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter2;