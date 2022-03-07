// import Hello from "./Hello";
import Wrapper from "./Wrapper";
// import Counter from "./Counter"
// import Input from "./Input"
import UserList from "./UserList";
import React, {useRef, useState} from "react";
import CreateUser from "./CreateUser"

function App() {
  const [users, setUsers] = useState([
    {
        id: 1,
        name: "velopert",
        email: "abc@naver.com",
        active: false,
    },
    {
        id: 2,
        name: "bitna",
        email: "abcdss@naver.com",
        active: false,
    },
    {
        id: 3,
        name: "xoxoxoxo",
        email: "xoxo@naver.com",
        active: false,
    },
]);
  const [inputs, setInputs] = useState({
    name: "",
    email: ""
  });

  const {name, email} = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  // useRef는 리렌더링되지 않음.
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      name,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    nextId.current += 1;
    setInputs({
      name: "",
      email: ""
    })
  }

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }
  const onToggle = (id) => {
    setUsers(users.map(
      (user) => user.id === id ? {...user, active: !user.active } : user
      )
    );
  }



  return (
    <Wrapper>
      {/* <Hello name="react" color="red" isSpecial={true} />
      <Hello color="blue" /> */}
      {/* <Counter /> */}
      {/* <Input /> */}
      <CreateUser 
        name={name} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList 
        users={users} 
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </Wrapper>
  );
}

export default App;
