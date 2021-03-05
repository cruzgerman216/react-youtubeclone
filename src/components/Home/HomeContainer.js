import React from 'react'
import NavbarContainer from '../navbar/NavbarContainer'
import { connect } from 'react-redux';
import { Row, Col} from 'react-bootstrap';
import MinimizedSidebar from "../navbar/MinimizedSidebar"
import Maximizedsidebar from "../navbar/Maximizedsidebar"
import VideoList from "./VideoList"
import API from "../../utils/API"
import '../../styles/home.css'
import "../../styles/utilities.css"
class Home extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll',this.loadMore)
        API.recommendVideos().then(videos=>{
            this.setState({
                videos: videos
            })
        }).catch(error=>{
            // redirect to error page
        })
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll',this.loadMore);
    }

    state = {
        videos: [],
        loadingstate: true
      }

    loadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
            API.recommendVideos().then(videos=>{
                this.setState({
                    videos: [...this.state.videos,...videos]
                })
            });
        }
    }

    render(){
        return(
            <div className="home">
                <NavbarContainer/>
                <div className="content">
                    <Row>
                        <Col sm={1} id="sidebar">
                            {this.props.toggleNavbar ? <MinimizedSidebar/> : <Maximizedsidebar /> }
                        </Col>
                        <Col sm={11} style={this.props.toggleNavbar ? {marginLeft:"120px",marginTop:"20px" }: {marginLeft: "250px"}} >
                            <Row>
                                {this.state.videos.length == 0 ? <div class="loader"></div> : <VideoList videos={this.state.videos}/>}
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
   
export default connect(mapStateToProps,null)(Home);