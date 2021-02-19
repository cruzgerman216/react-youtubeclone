import React from 'react'
import NavbarContainer from '../navbar/NavbarContainer'
import { connect } from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import MinimizedSidebar from "../navbar/MinimizedSidebar"
import Maximizedsidebar from "../navbar/Maximizedsidebar"
import VideoForm from "./VideoForm"
import '../../styles/home.css'

class UploadContainer extends React.Component {
    render(){
        return(
            <div className="home">
            <NavbarContainer/>
            <div className="content">
                <Row>
                    <Col sm={1} id="sidebar">
                        {this.props.toggleNavbar ? <MinimizedSidebar/> : <Maximizedsidebar /> }
                    </Col>
                    <Col sm={11} style={{marginLeft:this.props.toggleNavbar ? "120px" : "250px", marginTop:"20px"}} >
                        <Row>
                        <VideoForm user_id={this.props.currentUser.id}/>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      toggleNavbar: state.navReducer.toggleNavbar,
      currentUser: state.authReducer.currentUser
    };
  };
   

   
  export default connect(mapStateToProps,null)(UploadContainer);