import React from 'react'
import NavbarContainer from '../navbar/NavbarContainer'
import { Row, Col} from 'react-bootstrap';
import CommentSection from "./CommentSection";
import SideThumbnail from "./SideThumbnail";
import Maximizedsidebar from "../navbar/Maximizedsidebar"
import { connect } from 'react-redux';
import {toggleSidebar} from '../../redux/actions/navbar';
import API from '../../utils/API'
import VideoInformation from './VideoInformation'
import '../../styles/video.css'
class VideoContainer extends React.Component {
    componentDidMount(){
        API.getVideo(this.props.match.params.videoId).then(data=>{
            this.setState({video:{...data,views: data.views+1},user:data.user})
            this.setState({subcount: data.user.subs.length})
        });

        API.addViews(this.state.video.id)

        API.recommendVideos().then(videos => {
            this.setState({
                thumbnails: videos
            })
        })
    }

    componentWillReceiveProps(newProps){
        if(this.state.video.id != newProps.match.params.videoId){
            this.setState(
                {
                    video:{},
                    user:{},
                    subcount: 0,
                    thumbnails: []
                }
            )

            API.getVideo(newProps.match.params.videoId).then(data=>{
                this.setState({video:{...data,views: data.views+1},user:data.user})
                this.setState({subcount: data.user.subs.length})
            });
                API.addViews(this.state.video.id)

    
            API.recommendVideos().then(videos => {
                this.setState({
                    ...this.state,
                    thumbnails: videos
                })
            })
        }
    }

    state = {
        video:{},
        user:{},
        subcount: 0,
        thumbnails: []
    }

    clickOverlay = ()=>{
        this.props.toggleSidebar();
    }

    render(){
        return(
            <div>
                <div onClick={()=>{this.clickOverlay()}} className={!this.props.toggleNavbar ? "overlay" : ""}></div>
                <NavbarContainer/>
                <Maximizedsidebar toggle={this.props.toggleSidebar} showtoggle={this.props.toggleNavbar}/>
                <Row id="videocontent">
                    <Col sm={8} key={this.props.match.params.videoId}>
                        {Object.keys(this.state.video).length == 0 ? "Loading" : (<VideoInformation video={this.state.video} user={this.state.user}/>)}
                        <CommentSection videoid={this.props.match.params.videoId} />
                    </Col>
                    <Col sm={4} >
                        {this.state.thumbnails.length == 0 ? "loading" : this.state.thumbnails.map(thumbnail => <SideThumbnail key={thumbnail.id} info={thumbnail} user={thumbnail.user}/>)}
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      toggleNavbar: state.navReducer.toggleNavbar
    };
  };
   

  const mapDispatchToProps = dispatch => {
    return {
        toggleSidebar: () => dispatch(toggleSidebar())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);