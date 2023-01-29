//making a class component to understand states and props clearly
import React from "react";
class About extends React.Component{
    //defining constructor because without constructor you can't define state
    constructor(){
        super();
        this.state={
            name:"Tom Sawyer",
            email:"tomsaw@123.com",
            count:0
        }
    } 
    updateState(){
        this.setState({
            name:"Oliver Twist",
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
               
                <h2>Welcome {this.state.name} !!</h2>
                <h2>counter Value {this.state.count} !!</h2>
                <button onClick={()=>{this.updateState()}}>Update Name</button>
               
            </div>
        )
    }
}

export default About;