import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import About from './About';
import React,{useState,useEffect} from 'react';

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
        {/*<Home text={"This is the Home page"} data={{name:"Samantha"}}/>
        <Profile text={"This is the profile page"} data={{name:"peter"}}/>
        <About />
        */}  
        <h1>Learning hooks !!!</h1>
        <h2>Counter:{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>    
     
    </div>
  );
}

export default App;
