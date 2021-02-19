import React from 'react'
import {Row, Col} from 'react-bootstrap';
import SubscribeButton from "../Subscriptions/SubscribeButton"
const UserInfo = props =>{
   return(
        <Row style={{margin:"3% 8%"}}>
            <Col sm={4}>
                <Row>
                    <Col sm={4}>
                        <img style={{float:"right", width:"100%"}}  src={props.user.image}/>
                    </Col>
                    <Col sm={8}>
                        <div>{props.user.username}</div>
                        <div>{props.user.subCount}</div>
                    </Col>
                </Row>
            </Col>
            <Col sm={8}>
                <div style={{float:"right"}}>
                    <SubscribeButton user={props.user} key={props.user.id}/>
                </div>
            </Col>
        </Row>
   )
}

export default UserInfo;