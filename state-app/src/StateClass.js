import React, { Component } from 'react'

export default class StateClass extends Component {
    constructor(){
        super();
        this.state={
            brand : 'Honda',
            model : 'CC70',
            color : 'red'
        }
    }
    colorChange = () => {
        this.setState({color: 'Black'});
    }
  render() {
    return (
      <div>
          <h2>StateClassComponet</h2>
          <p>
              Brand : {this.state.brand}<br/>
              Model : {this.state.model}<br/>
              Color : {this.state.color}
          </p>
          <button onClick={this.colorChange}>Change Color</button>
      </div>
    )
  }
}
