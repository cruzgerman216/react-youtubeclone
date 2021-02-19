import React from 'react'
import { Row, Col} from 'react-bootstrap';
import '../../styles/navbar.css'
import UserThumbnail from './UserThumbnail'

class ProfileVideos extends React.Component {
    render(){
        return(
            <div>
                <Row>
                    {this.props.videos.map(video => <Col sm={3} key={video.id}><UserThumbnail info={video}/></Col>)} 
                </Row>
            </div>
        )
    }
}


export default ProfileVideos;