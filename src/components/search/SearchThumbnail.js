import {Tooltip,OverlayTrigger, Row, Col} from 'react-bootstrap';
import '../../styles/navbar.css'
import React from 'react'
import { NavLink } from 'react-router-dom';
const SearchThumbnail = props =>{
        return(
            <NavLink style={props.style} to="/video/1" exact>
                <Row>
                    <Col sm={4}>
                        <img style={{width:"100%"}} src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg"/>
                    </Col>
                    <Col sm={8}>
                        <h1>Coding a Youtube Clone</h1>
                        <div>15 views * 1 day ago</div>
                        <div>
                            <img style={{width:"5%"}} src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg"/>
                            Creator Name
                        </div>
                        <div>Description</div>
                    </Col>
                </Row>
            </NavLink>
        );
}

export default SearchThumbnail;