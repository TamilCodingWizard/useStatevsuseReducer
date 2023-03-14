import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");

  const textChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <label>Enter Name:</label>
      <input type="text" onChange={textChange} value={name}></input>
      <br />
      <label>{name}</label>
    </>
  );
};

export default Home;
