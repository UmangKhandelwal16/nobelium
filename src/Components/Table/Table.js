import React, { useState } from 'react';
import './Tabledata';

export default function TableData() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [hobby, setHobby] = useState('');

  const handelNameChange = (e) => {
    setName(e.target.value);

    // console.log(name)
  };

  function handleAge(e) {
    setAge(e.target.value);
  }

  const handleHobby = (e) => {
    setHobby(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    setData([
      ...data,
      {
        name,
        age,
        hobby,
        email,
      },
    ]);

    setAge('');
    setEmail('');
    setHobby('');
    setName('');

    console.log(data);
  };

  const handelItemdelete = (email) => {
    const newData = data.filter((ele) => ele.email !== email);

    setData(newData);
  };

  return (
    <div className = "TableData">
      <div className="form-container">
        <div className="inputData">
          <form action="">
            <input
              value={name}
              onChange={handelNameChange}
              type="text"
              placeholder="Enter your Name"
            />
            <input
              value={age}
              onChange={handleAge}
              type="number"
              placeholder="Enter your Age"
            />
            <input
              value={hobby}
              onChange={handleHobby}
              type="text"
              placeholder="Enter your hobbies"
            />
            <input
              value={email}
              onChange={handleEmail}
              type="text"
              placeholder="Enter Your EMail"
            />

            <button onClick={handelSubmit}>ADD to list</button>
          </form>
        </div>
        <div className="liveData">
          <h4>{name}</h4>
          <h4>{email}</h4>
          <h4>{age}</h4>
          <h4>{hobby}</h4>
        </div>
      </div>

      <div className="table-container">
        {data.map((user) => {
          return (
            <div style={{ display: 'flex' }}>
              <p>{user.name}-</p>

              <p>{user.age}-</p>

              <p>{user.hobby}-</p>

              <p>{user.email}-</p>

              <span onClick={() => handelItemdelete(user.email)}>❌</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
