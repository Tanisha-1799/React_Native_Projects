import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import About from './About';
import React,{useState,useEffect} from 'react';
import Forms from './Forms';
import WelcomePage from './WelcomePage';
import ContactPage from './ContactPage';
import HelpPage from './HelpPage';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Users from './Users';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      users:null
    }
  }

  //Calling Api
  componentDidMount(){
    fetch("https://reqres.in/api/users").then((res)=>{
      res.json().then((result)=>{
        console.warn(result)
        this.setState({users:result.data})
      })
    })
  }

  //making use of a basic hook
  //useState
  //const [count,setCount]=useState(0);
  //Making use of useEffect hook
  //useEffect(()=>{
    //console.warn(count);
    //if you want that the function should update only once
    //then leave the array empty in the second parameter
  //},[count==5]);
  render(){
  return (
    <div>  
      {/**<Router>
      {/**<WelcomePage />
    <ContactPage />
    <HelpPage />   
    <Link to="/">Welcome </Link>
    <Link to="/contact"> Contact </Link>
    <Link to="/help"> Help</Link>
    <Routes>
    <Route path="/" element={<WelcomePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/help" element={<HelpPage />} />
    </Routes>
    
    </Router>   
    <h1>Fetching Api Data</h1>
    {
      this.state.users ?
      this.state.users.map((item,i)=>
      <div>
        <p>{i}---
        {item.first_name} 
        {item.last_name}
        ----
        {item.email}
        </p>
      </div>
      )
      :
      null
    }*/}
    <h1>Error Boundary in React</h1>
    <Users />
     
    </div>
  );
  }
}

export default App;
