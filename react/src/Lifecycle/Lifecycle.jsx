import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props) {
      super(props)

      console.log('constructor');
      
      this.state = {
         mount:true
      }
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

   

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
  render() {
    console.log('render');
    console.log(this.state.mount);
    
    
    return (
      <div>
        <h1>Lifecycle</h1>
        <button onClick={()=>this.setState({mount: !this.state.mount})}>CLICK</button>
        {this.state.mount ? <Mount/> : null}
      </div>
    )
  }
}



export  class Mount extends Component {

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

  render() {
    return (
      <div>Mount</div>
    )
  }
}

