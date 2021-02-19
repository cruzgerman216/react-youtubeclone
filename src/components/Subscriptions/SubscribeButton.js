import React, {Component} from 'react'
import {connect} from "react-redux"
import API from '../../utils/API'
import ModalLogin from '../video/ModalLogin'
import {changeUser} from "../../redux/actions/authActions"
import {Button} from 'react-bootstrap';

class SubscribeButton extends Component {
    componentDidMount(){
        API.checkSubscription(this.props.user.id).then(data => this.setState({subscribed: data.subscribed}))
    }

    state = {
        subscribed: false,
        show: false,
    }

    renderSubscribeButton = ()=>{

        if(this.props.currentUser.id == this.props.user.id){
            return(
                <button>CUSTOMIZE CHANNEL</button>
            )
        }else{
            if(this.state.subscribed){
                return(
                    <button onClick={this.handleUnsubscribe}>Unsubscribe</button>
                )
            }else{
                return(
                    <button onClick={this.handleModal}>
                        Subscribe
                    </button>
                    )
            }
        }

    }

    handleUnsubscribe = () =>{
        API.unsubscribe(this.props.user.id,this.props.currentUser.id).then(data=>{
            this.props.changeUser(data);
            this.setState({subscribed:false})

        })
    }

    handleModal = () => {
        if(this.props.loggedIn){
            API.subscribe(this.props.user.id,this.props.currentUser.id).then(data=>{
                this.props.changeUser(data);
                this.setState({subscribed:true});
            })
        }else{
            this.setState({...this.state, show: !this.state.show})
        }
    }

    render(){
        return(
            <div>
                {this.renderSubscribeButton()}
                <ModalLogin show={this.state.show} handleModal={this.handleModal}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      loggedIn: state.authReducer.loggedIn,
      currentUser: state.authReducer.currentUser
    };
};
   
const mapDispatchToProps = dispatch => {
    return {
        changeUser: (currentUser) => dispatch(changeUser(currentUser)),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(SubscribeButton);