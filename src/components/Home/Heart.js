import React, {Component} from 'react'
import {Button} from 'react-bootstrap';

class Heart extends Component {

    state = {
        toggle: false
    }

    onHandleClick = () =>{
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render(){
        return(
            <div>
                <Button onClick={this.onHandleClick}>Click me!</Button>
                <span style={this.state.toggle ? {display: "block"} : {display: "none"}}> heart </span>
            </div>
        )
    }
}

export default Heart;