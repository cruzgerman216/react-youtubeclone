import React from 'react'
import { Row, Col} from 'react-bootstrap';
import Like from "./Like"
import {Link} from 'react-router-dom'
import SubscribeButton from '../Subscriptions/SubscribeButton'
import '../../styles/video.css'

const VideoInformation = props =>{
    return(
        <div>
            <div>
                <iframe className="video" src={props.video.url} ></iframe>
            </div>
            <div> 
                <div className="title" key={props.video.id} >
                    {props.video.title}
                </div>
                <Row className="rowheader">
                    <Col sm={6} className="column">
                        <span> views {props.video.views} </span>
                        <span>{props.video.created_at}</span>
                    </Col>
                    <Col sm={2} className="column">
                        <Like key={props.video.id} video={props.video}/>
                    </Col>
                    <Col sm={2} className="column">
                        <span>
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.75739 7.17154L7.1716 5.75732L16.2426 14.8283L16.2426 10.2427H18.2426L18.2426 18.2427H10.2426V16.2427L14.8285 16.2427L5.75739 7.17154Z" fill="currentColor" />
                            </svg>
                        </span>
                        <span>SHARE</span>
                    </Col>
                    <Col sm={2}>
                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 17C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM5 18V7H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z" fill="currentColor" /></svg></span>
                        <span>SAVE ...</span>
                    </Col>
                </Row>
                <div className="border"></div>
                <Row style={{margin:"0"}}>
                    <Col sm={1} className="column">
                        <div><Link to={`/users/${props.user.id}`}><img style={{width:"40px"}} src={props.user.image}/></Link></div>
                    </Col>
                    <Col sm={9}>
                        <div className="columnbottomspace">
                            <div><Link to={`/users/${props.user.id}`}>{props.user.username}</Link></div>
                            {/* <div>{this.state.subcount} subscribers</div> */}
                        </div>
                        <div>{props.video.description}</div>
                    </Col>
                    <Col sm={2}>
                        <SubscribeButton user={props.user} key={props.user.id}/>
                    </Col>
                </Row>
                <div className="border"></div>
            </div>
        </div>
    )
}

export default VideoInformation;