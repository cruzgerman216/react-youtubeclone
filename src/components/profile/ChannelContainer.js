import React from 'react'
import NavbarContainer from '../navbar/NavbarContainer'
import MinimizedSidebar from "../navbar/MinimizedSidebar"
import Maximizedsidebar from "../navbar/Maximizedsidebar"
import { connect } from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {changeUser} from "../../redux/actions/authActions"
import API from "../../utils/API"
import '../../styles/navbar.css'
import UserInfo from "../Subscriptions/UserInfo"
import ChannelNav from "./ChannelNav"
class ChannelContainer extends React.Component {

    componentDidMount(){
        API.getUser(this.props.match.params.id).then(user=>{
            this.setState({user:user})
        })
        API.getVideos(this.props.match.params.id).then(data=>{
            API.addViews(data[0].id)
            this.setState({videos:data})
        })
    }

    state = {
        user:{},
        videos: []
    }

    render(){
        return(
            <div className="home">
                <NavbarContainer/>
                <div className="content">
                    <Col sm={1} id="sidebar">
                        {this.props.toggleNavbar ? <MinimizedSidebar/> : <Maximizedsidebar /> }
                    </Col>
                    <Col sm={11} style={this.props.toggleNavbar ? {marginLeft:"120px",marginTop:"20px" }: {flex: "0%"}}>
                        <Row>
                            <img style={{width:"100%", height:"100vh"}}src={Object.keys(this.state.user).length!=0 ? this.state.user.banner : ""}/>
                            <div className="profilenav">
                                <UserInfo user={this.state.user}/>
                                <ChannelNav user={this.state.user} videos={this.state.videos}/>
                            </div>              
                        </Row>
                    </Col>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      toggleNavbar: state.navReducer.toggleNavbar,
      currentUser: state.authReducer.currentUser,
      loggedIn: state.authReducer.loggedIn
    };
  };
   
  const mapDispatchToProps = dispatch => {
    return {
        changeUser: (currentUser) => dispatch(changeUser(currentUser))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(ChannelContainer);