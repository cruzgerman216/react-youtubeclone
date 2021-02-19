import React from 'react'
import { Link } from 'react-router-dom';
import {Tooltip,OverlayTrigger, Row, Col, Nav} from 'react-bootstrap';
import '../../styles/navbar.css'

class ProfileAbout extends React.Component {
    render(){
        return(
            <div>
                <Row>
                    <Col sm={8}>
                        <div>Description</div>
                        <div>
                            {this.props.user.description}
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div>Stats</div>
                        <div>Joined {this.props.user.created_at}</div>
                        <div>5000 views</div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default ProfileAbout;