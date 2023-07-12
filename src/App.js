/*
    @date : 
    @content : '벨로퍼트와 함께하는 모던 리액트'
    @order : 
*/
import React, { useRef, useState } from "react";
import UserList from "./Week1/UserList";
import CreateUser from "./Week1/CreateUser";

function App() {
  // ------- user object
  const [users,setUsers] = useState([
    { id: 1,
      username: 'aaa',
      email: 'abc@gmail.com'},
    { id: 2,
      username: 'bbb',
      email: 'banana@fruits.com'},
    { id: 3,
      username: 'ccc',
      email: '123@numbers.com'}
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = (e) =>{
    const { name, value } = e.target;
    setInputs({
        ...inputs,
        [name]: value
    });
  }

  const nextId = useRef(4); // init value 4 (after users)
  const onCreate = () =>{
    const user = {
        id: nextId.current,
        username,
        email
    }
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
        username: '',
        email: ''
    })
    nextId.current += 1;
  }

  return (
    <>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
        <UserList users={users} />
    </>
  );
}

export default App;
