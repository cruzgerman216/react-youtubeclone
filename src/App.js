import React from 'react';
import HomeContainer from './components/Home/HomeContainer';
import ChannelContainer from './components/profile/ChannelContainer';
import VideoContainer from './components/video/VideoContainer';
import SearchContainer from "./components/search/SearchContainer";
import Signup from "./components/Home/Signup";
import Login from "./components/Home/Login";
import UploadContainer from "./components/upload/UploadContainer";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { checkLoggedIn } from "./redux/actions/authActions";
import { connect } from "react-redux";
class App extends React.Component {
  componentDidMount(){
    this.props.checkLoggedIn();
  }
  
  render(){
    return (
      <Router>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route path="/users/:id" component={ChannelContainer}/>
        <Route path="/upload" component={UploadContainer}/>
        <Route   path="/videos/:videoId" component={VideoContainer}/>
        <Route path="/search/:query" component={SearchContainer}/>
      </Router>
    );
  }
}

export default connect(null, {checkLoggedIn})(App);