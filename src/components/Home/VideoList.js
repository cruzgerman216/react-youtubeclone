import React from 'react'
import Thumbnail from "../video/Thumbnail"
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Heart from "./Heart"

const VideoList = props => {
    return(
        <>
            {props.videos.map(video=>
            <Col sm={3} key={video.id}>
                <Link to ={`/videos/${video.id}`}>
                    <Thumbnail info={video}/>
                </Link>
            </Col>)}
        </>
    )
}

export default VideoList;