import React from "react";

export default class Forms extends React.Component{
    constructor(){
        super();
        this.state={
            user:'',
            password:'',
            userError:'',
            passwordError:'',
            list:[
                {name:"Antonio",phone:"111",email:"antonio@123.com"},
                {name:"Bassanio",phone:"123",email:"bassanio@123.com"},
                {name:"Shylock",phone:"112",email:"shylock@123.com"}
            ]

        }
    }
    valid(){
        if(this.state.user.includes('@')&&this.state.password.length<5){
            this.setState({userError:"Invalid Name"})
            this.setState({passwordError:"Password length should be more than 5"})
        }
        else if(this.state.user.includes('@')){
            this.setState({userError:"Invalid Name"})
            }
        else if(this.state.password.length<5){
            
            this.setState({passwordError:"Password length should be more than 5"})
        }else{
            return true;
        }
    }
    submit() {
       //validation of form
       this.setState({userError:"",passwordError:""})
       if(this.valid()){
        alert("Form submitted successfully !!");
       }
        
    }
    render(){
        return(
            <div>
                <h1>Form Handling</h1>
                <input type="text" name="user" 
                onChange={(e)=>{this.setState({user:e.target.value})}} />
                <br />
                <p>{this.state.userError}</p>
                <br />
                <input type="text" name="password" 
                onChange={(e)=>{this.setState({password:e.target.value})}} />
                <br />
                <p>{this.state.passwordError}</p>
                <br />
                <button onClick={()=>{this.submit()}}>Submit</button>
                <h1>Listing with Map</h1>
                {
                    this.state.list.map((item)=>
                        <div>
                            <h1>Name:{item.name} phone:{item.phone} email:{item.email}</h1>
                            <br />
                        </div>
                    )
                }
                
            </div>
        )
    }
}