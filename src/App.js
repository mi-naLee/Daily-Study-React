/*
    @date : 
    @content : '벨로퍼트와 함께하는 모던 리액트'
    @order : 
*/
import React, { useMemo, useReducer } from "react";
import UserList from "./Week1/UserList";
import CreateUser from "./Week1/CreateUser";

function CountActiveUsers(users){
    return users.filter(user => user.active).length;
}

const initialState = { // 초기 상태 set
    users: [
        { id: 1,
          username: 'aaa',
          email: 'abc@gmail.com',
          active: true},
        { id: 2,
          username: 'bbb',
          email: 'banana@fruits.com',
          active: false},
        { id: 3,
          username: 'ccc',
          email: '123@numbers.com',
          active: false}
    ]
}

function reducer(state,action){
    switch(action.type){
        case 'CREATE_USER':
            return{
                users: state.users.concat(action.user)
            };
        case 'TOGGLE_USER':
            return{
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? {...user, active: !user.active } : user)
            };
        case 'REMOVE_USER':
            return{
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        default:
            return state;
    }
}

// Context API
export const UserDispatch = React.createContext(null); // null: default value

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); // dispatch를 실행하면 reducer 함수 실행, 초기값 initialState.
  // const nextId = useRef(4);
 
  const { users } = state; // state의 초기값 initialState의 users 배열
  // const [{ username, email }, onChange, reset ] = useInputs({username: '', email: ''});

//  const onCreate = useCallback(() =>{
//    dispatch({
//        type: 'CREATE_USER',
//        user: {
//            id: nextId.current,
//            username,
//            email
//        }
//    });
//    reset();
//    nextId.current += 1;
//  },[username, email, reset]);

  const count = useMemo(()=>CountActiveUsers(users),[users]);
  return (
    // value로 보내는 dispatch는 reducer [state, dispatch]의 dispatch
    <UserDispatch.Provider value={dispatch}> 
        <CreateUser/>
        <UserList users={users}/>
        <p>활성화 사용자 수 : {count}</p>
    </UserDispatch.Provider>
  );
}

export default App;
