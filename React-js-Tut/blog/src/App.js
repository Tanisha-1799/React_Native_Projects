import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import About from './About';
import React,{useState,useEffect} from 'react';
import Forms from './Forms';

function App() {
  //making use of a basic hook
  //useState
  const [count,setCount]=useState(0);
  //Making use of useEffect hook
  useEffect(()=>{
    console.warn(count);
    //if you want that the function should update only once
    //then leave the array empty in the second parameter
  },[count==5]);
  
  return (
    <div className="App">  
   
      <h1>Form in react</h1>
      <Forms />

     
     
    </div>
  );
}

export default App;
