/*
    @date : 
    @content : '벨로퍼트와 함께하는 모던 리액트'
    @order : 
*/
import React, { useCallback, useMemo, useReducer, useRef } from "react";
import UserList from "./Week1/UserList";
import CreateUser from "./Week1/CreateUser";

function CountActiveUsers(users){
    return users.filter(user => user.active).length;
}

const initialState = { // 초기 상태 set
    // ----- input 창 
    //const [inputs, setInputs] = useState({
        //username: '',
        //email: ''
    //});
    inputs: {
        username: '',
        email: ''
    },
    // ----- user 데이터
    //const [users,setUsers] = useState([
        //{ id: 1,
        //  username: 'aaa',
        //  email: 'abc@gmail.com',
        //  active: true},
        //{ id: 2,
        //  username: 'bbb',
        //  email: 'banana@fruits.com',
        //  active: false},
        //{ id: 3,
        //  username: 'ccc',
        //  email: '123@numbers.com',
        //  active: false}
    //]);
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
        case 'CHANGE_INPUT':
            return{
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name] : action.value
                }
            };
        case 'CREATE_USER':
            return{
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
                // == users: [...state.users, action.user]
            };
        case 'TOGGLE_USER':
            // setUsers(users.map(user => user.id === id ? {...user, active: !user.active }: user ));
            return{
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? {...user, active: !user.active } : user)
            };
        case 'REMOVE_USER':
            // setUsers(users.filter(user => user.id !== id));
            return{
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        default:
            return state;
    }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); // dispatch를 실행하면 reducer 함수 실행, 초기값 initialState.
  const nextId = useRef(4);
 
  const { users } = state; // state의 초기값 initialState의 users 배열
  const { username, email } = state.inputs; // state의 초기값 initialState의 inputs('')

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    //setInputs({
        //...inputs,
        //[name]: value
    //});
    dispatch({
        type: 'CHANGE_INPUT',
        name,
        value
    });
  },[]);

  const onCreate = useCallback(() =>{
    //const user = {
        //id: nextId.current,
        //username,
        //email
    //}
    // setUsers([...users, user]); 또는 setUsers(users.concat(user));
    //setInputs({
        //username: '',
        //email: ''
    //})
    //nextId.current += 1;
    dispatch({
        type: 'CREATE_USER',
        user: {
            id: nextId.current,
            username,
            email
        }
    });
    nextId.current += 1;
  },[username, email]);

  const onToggle = useCallback(id => {
    dispatch({
        type: 'TOGGLE_USER',
        id
    });
  },[]);

  const onRemove = useCallback(id => {
    dispatch({
        type: 'REMOVE_USER',
        id
    });
  },[]);

  const count = useMemo(()=>CountActiveUsers(users),[users]);
  return (
    <>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
        <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
        <p>활성화 사용자 수 : {count}</p>
    </>
  );
}

export default App;
