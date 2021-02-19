import React from 'react'
import { Row, Col} from 'react-bootstrap';
import '../../styles/navbar.css'
import UserThumbnail from './UserThumbnail'
import API from "../../utils/API"

class ProfileHome extends React.Component {
    render(){
        return(
            <div>
                <Row style={{width:"100%"}}>
                    <Col sm={3}>
                        <div>
                           <iframe width="100%"  src={this.props.videos.length != 0 ? this.props.videos[0].url : ""}></iframe> 
                        </div>
                    </Col>
                    <Col sm={9}>
                        <div>{this.props.videos.length != 0 ? this.props.videos[0].title : ""}</div>
                        <div>{this.props.videos.length != 0 ? this.props.videos[0].views : ""} views * {this.props.videos.length != 0 ? this.props.videos[0].created_at : ""}</div>
                        <div>{this.props.videos.length != 0 ? this.props.videos[0].description : ""}</div>
                    </Col>
                </Row>

                <div>
                    Uploads Play all
                </div>

                <Row>
                    {this.props.videos.map(video => <Col sm={3} key={video.id}><UserThumbnail info={video}/></Col>)} 
                </Row>
            </div>
        )
    }
}


export default ProfileHome;