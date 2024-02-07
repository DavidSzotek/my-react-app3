/*
useState(initial state) function returs array of a variable and it's setter

*/

import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(16);
  const [isEmployed, setIsEmployed] = useState(false);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const changeEmployment = () => {
    setIsEmployed(!isEmployed);
  };

  const updateName = () => {
    setName("Spongebob");
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment age</button>
      <p>Is employed: {isEmployed ? "True" : "False"}</p>
      <button onClick={changeEmployment}>Change employment</button>
    </div>
  );
}
export default MyComponent;
