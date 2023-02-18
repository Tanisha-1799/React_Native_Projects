import React, {Component, PureComponent} from 'react';

class PureComp extends PureComponent{

    constructor(){
        super();
        this.state={
            data:10
        }
    }

    render(){
        return(
            <div>
                <h1>Pure Component {this.state.data}</h1>
                <button onClick={()=>{this.setState({data:20})}}>Update State</button>
            </div>
        )
    }
};

export default PureComp;