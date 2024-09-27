import React, { Component } from 'react'
import { Mount } from './Lifecycle';

export default class Life extends Component {
    constructor() {
        super();
        console.log("constructor");
        this.state = {
            mount: true
        }

    }

    componentDidMount() {
        console.log("componentDidMount");
        // document.getElementById("h1").style.color = "blue";
        // console.log(document.getElementById("h1"));
        // document.getElementById("h1").style.color = "blue";
        console.log("====================================");
        
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
        console.log("====================================");
    }

    handleChange = () => {
        this.setState({
            mount: !this.state.mount
        })
        console.log("handleChange");
        
    }


    render() {
        console.log("render");
        // console.log( document.getElementById("h1"));
        // document.getElementById("h1").style.color = "blue";



        return (
            <div>
                <h1 id='h1'>Life</h1>
                <button onClick={this.handleChange}>submit</button>
                {
                    this.state.mount ? <M1 /> : <M2 />
                }
            </div>
        )
    }
}





class M1 extends Component {
    constructor() {
        super();
    }
    componentWillUnmount() {
        console.log("M1 is unmounted");
    }
    render() {
        return (
            <div>
                <h1>M1</h1>
            </div>
        )
    }
}

class M2 extends Component {
    constructor() {
        super();
    }
    componentWillUnmount() {
        console.log("M2 is unmounted");
    }
    render() {
        return (
            <div>
                <h1>M2</h1>
            </div>
        )
    }
}



