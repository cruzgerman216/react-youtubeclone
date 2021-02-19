import {Tooltip,OverlayTrigger, Row, Col} from 'react-bootstrap';
import '../../styles/navbar.css'
import React from 'react'
import { NavLink } from 'react-router-dom';
const UserThumbnail = props =>{
        return(
            <NavLink to={`/videos/${props.info.id}`} exact>
                <img style={{width:"100%"}} src={props.info.thumbnail}/>
                <div>{props.info.title}</div>
                <div>{props.info.created_at}</div>
            </NavLink>
        );
}

export default UserThumbnail;