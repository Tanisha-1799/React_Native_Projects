//making a class component
import React from 'react';

export default class Home extends React.Component{
    testFun(){
        alert("Hii you clicked me !");
    }
    render(){
       
        return(
            <div>
                <h1>{this.props.text}</h1>
                <h1>{this.props.data.name}</h1>
                <button onClick={()=>{this.testFun()}}>Click Me !</button>
            </div>
        )
    }
}