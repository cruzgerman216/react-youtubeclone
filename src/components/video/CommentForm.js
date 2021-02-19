import React from 'react';
import { Navbar, Nav, Form, FormControl, Button,Tooltip,OverlayTrigger} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

class CommentForm extends React.Component {
    renderImage = () =>{
        if(this.props.loggedIn){
            return(
                <div>
                    <img style={{width:"100%"}}src={this.props.currentUser.image}/>
                    
                </div>
            )
        }else{
            return(
                <div>
                    <img style={{width:"100%"}}src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg" />
                </div>
            )
        }
    }

    state = {
        statement: ""
    }

   handleOnSubmit = e =>{
       e.preventDefault();
       this.props.addComment(this.state)
   }

   handleOnChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
   }

    render(){
        return (
            <Row style={{margin: "3% 0%"}}>
                <Col sm={1}>
                    {this.renderImage()}
                </Col>
                <Col sm={11}>
                    <form  onSubmit={this.handleOnSubmit}>
                        <Row><input style={{width:"100%"}}type="text" name="statement" onChange={this.handleOnChange} value={this.state.comment}/></Row>
                        <div style={{borderTop:"1px solid #bbb"}}></div>
                        <div>
                            {/* <button  >Cancel</button> */}
                            <button type="submit">Comment</button>
                        </div>       
                    </form>                 
                </Col>
            </Row>
        )
    }
}


const mapStateToProps = state => {
    return {
      currentUser: state.authReducer.currentUser,
      loggedIn: state.authReducer.loggedIn
    };
};
   
export default connect(mapStateToProps, null)(CommentForm)