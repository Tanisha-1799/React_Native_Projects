import React, { Component } from 'react'

export default class Users extends Component {
  render() {
    if(true){
        throw new Error("Custom Error")
    }
    return (
      <div>
        <h1>Users Page</h1>
      </div>
    )
  }
}
