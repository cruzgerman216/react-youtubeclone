import React from "react"
import {
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import ProfileHome from "./ProfileHome"
import ProfileVideos from "./ProfileVideos"
import ProfilePlaylists from "./ProfilePlaylists"
import ProfileCommunity from "./ProfileCommunity"
import ProfileChannels from "./ProfileChannels"
import ProfileAbout from "./ProfileAbout"
import ProfileSearch from "./ProfileSearch"

const ChannelNav = props =>{
    return(
        <div>
            <Nav justify variant="tabs" >
                <Nav.Item>
                    <Link to={`/users/${props.user.id}`}>HOME</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={`/users/${props.user.id}/videos`}>Videos</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={`/users/${props.user.id}/playlists`}>PLAYLISTS</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={`/users/${props.user.id}/community`}>COMMUNITY</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={`/users/${props.user.id}/channels`}>CHANNELS</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={`/users/${props.user.id}/about`}>ABOUT</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={`/users/${props.user.id}/search`}>SEARCH</Link>
                </Nav.Item>
            </Nav>

            <Switch>
                <Route path="/users/:id/videos">
                    <ProfileVideos videos={props.videos} />
                </Route>
                <Route path="/users/:id/playlists">
                    <ProfilePlaylists />
                </Route>
                <Route path="/users/:id/community">
                    <ProfileCommunity />
                </Route>
                <Route path="/users/:id/channels">
                    <ProfileChannels />
                </Route>
                <Route path="/users/:id/about">
                    <ProfileAbout user={props.user} />
                </Route>
                <Route path="/users/:id/search">
                    <ProfileSearch />
                </Route>
                <Route path="/users/:id">
                    <ProfileHome videos={props.videos}/>
                </Route>
            </Switch>
        </div>
    )
}

export default ChannelNav;