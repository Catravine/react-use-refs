import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  function keyPressHandle(e) {
    console.log(e.keyCode)
    if (e.keyCode === 13 || e.keyCode === 40) { // move down
      if (e.target.id === "nameInput") {
        ageRef.current.focus();
      }
      if (e.target.id === "ageInput") {
        marriedRef.current.focus();
      }
      if (e.target.id === "marriedInput") {
        submitRef.current.focus();
      }
    } else if (e.keyCode === 38) { // move up
      if (e.target.id === "submitButton") {
        marriedRef.current.focus();
      }
      if (e.target.id === "marriedInput") {
        ageRef.current.focus();
      }
      if (e.target.id === "ageInput") {
        nameRef.current.focus();
      }

    }
  }

  function onClickHandle() {
    alert('submitted')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>useRefs Hook</h3>
        <div className="form-field">
          <span>Name: </span>
          <input id="nameInput" ref={nameRef} type="text" onKeyDown={keyPressHandle}></input>
        </div>
        <div className="form-field">
          <span>Age: </span>
          <input id="ageInput" ref={ageRef} type="text" onKeyDown={keyPressHandle}></input>
        </div>
        <div className="form-field">
          <span>Married? </span>
          <input id="marriedInput" ref={marriedRef} type="checkbox" onKeyDown={keyPressHandle}></input>
        </div>
        <button onClick={onClickHandle} id="submitButton" ref={submitRef}  onKeyDown={keyPressHandle}>Submit</button>
      </header>
    </div>
  );
}

export default App;
