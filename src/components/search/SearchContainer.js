import {Tooltip,OverlayTrigger, Row, Col} from 'react-bootstrap';
import '../../styles/navbar.css'
import React from 'react'
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/NavbarContainer'
import { connect } from 'react-redux';
import MinimizedSidebar from "../navbar/MinimizedSidebar"
import Maximizedsidebar from "../navbar/Maximizedsidebar"
import Thumbnail from "../video/Thumbnail"
import VideoSearch from  "./VideoSearch"
import '../../styles/home.css'

class SearchContainer extends React.Component{
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
                            <VideoSearch/>
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
      toggleNavbar: state.navReducer.toggleNavbar
    };
  };

  export default connect(mapStateToProps)(SearchContainer);