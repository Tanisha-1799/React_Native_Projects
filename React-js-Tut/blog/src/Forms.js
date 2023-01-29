import React from "react";

export default class Forms extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>
                <h1>Form Handling</h1>
                <input type="text" name="user" onChange={()=>{}} />
                <br /><br />
                <input type="text" name="password" onChange={()=>{}} />
                <br /><br />
                <button>Submit</button>
            </div>
        )
    }
}