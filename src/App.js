import React from 'react';
import HomeContainer from './components/Home/HomeContainer';
import ChannelContainer from './components/profile/ChannelContainer';
import VideoContainer from './components/video/VideoContainer';
import SearchContainer from "./components/search/SearchContainer";
import Signup from "./components/Home/Signup";
import Login from "./components/Home/Login";
import Error from "./components/error/Error"
import NotFound from "./components/error/NotFound"
import UploadContainer from "./components/upload/UploadContainer";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Redirect} from "react-router-dom"
import { checkLoggedIn } from "./redux/actions/authActions";
import API from "./utils/API"
import { connect } from "react-redux";
class App extends React.Component {
  componentDidMount(){
    API.checkLoginStatus()
    .then(data =>{
        this.props.checklogin(data);
    }).catch(error =>this.setState({connected:false}))
  }

  state = {
    connected: true
  }

  render(){
    if(this.state.connected){
      return(
        <div>Cannot Connect</div>
      )
    }

    return (
    
      <Router>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/users/:id" component={ChannelContainer}/>
        <Route path="/upload" component={UploadContainer}/>
        <Route path="/videos/:videoId" component={VideoContainer}/>
        <Route path="/search/:query" component={SearchContainer}/>
        <Route path="/error" component={Error}/>
        <Route component={NotFound}/>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checklogin: data => dispatch({type:'AUTH_SUCCESSFUL', payload:{loggedIn: data.logged_in, currentUser: data.user}})
  };
};
export default connect(null, mapDispatchToProps)(App);