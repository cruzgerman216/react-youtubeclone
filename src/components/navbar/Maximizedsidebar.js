import {Tooltip,OverlayTrigger, Row, Col} from 'react-bootstrap';
import '../../styles/navbar.css'
import React from 'react'
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux"
import Subscription from "../Subscriptions/Subscription"
import { Link } from 'react-router-dom';

class Maximizedsidebar extends React.Component {
    renderSessions = () =>{
        if(this.props.loggedIn){
            return(
                 this.props.currentUser.subscriptions.map(subscription=><Row key={subscription.id}><Subscription  info={subscription} /></Row>)
            )
        }else{
            return(
                <div>Sign in</div>
            )
        }
    }

    render(){
        return(
            <div>
                <div className={!this.props.showtoggle ? "showsidebar" : "hidesidebar"}>
                        <Row>
                            <Col sm={3}>
                                <svg onClick={()=>this.props.toggle()}width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor" /><path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor" /><path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor" /></svg>
                            </Col>
                            <Col sm={8}>
                                <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">YouTube Home</Tooltip>} >
                                        <NavLink to="/" exact>
                                            <img width="30px"src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik01MDEuMjk5LDEzMi43NjZjLTUuODg4LC0yMi4wMyAtMjMuMjM0LC0zOS4zNzcgLTQ1LjI2NCwtNDUuMjY0Yy0zOS45MzIsLTEwLjcwMSAtMjAwLjAzNywtMTAuNzAxIC0yMDAuMDM3LC0xMC43MDFjMCwwIC0xNjAuMTA1LDAgLTIwMC4wMzgsMTAuNzAxYy0yMi4wMjUsNS44ODcgLTM5LjM3NiwyMy4yMzQgLTQ1LjI2NCw0NS4yNjRjLTEwLjY5NiwzOS45MjggLTEwLjY5NiwxMjMuMjM2IC0xMC42OTYsMTIzLjIzNmMwLDAgMCw4My4zMDggMTAuNjk2LDEyMy4yMzJjNS44ODgsMjIuMDMgMjMuMjM5LDM5LjM4MSA0NS4yNjQsNDUuMjY4YzM5LjkzMywxMC42OTcgMjAwLjAzOCwxMC42OTcgMjAwLjAzOCwxMC42OTdjMCwwIDE2MC4xMDUsMCAyMDAuMDM3LC0xMC42OTdjMjIuMDMsLTUuODg3IDM5LjM3NiwtMjMuMjM4IDQ1LjI2NCwtNDUuMjY4YzEwLjcwMSwtMzkuOTI0IDEwLjcwMSwtMTIzLjIzMiAxMC43MDEsLTEyMy4yMzJjMCwwIDAsLTgzLjMwOCAtMTAuNzAxLC0xMjMuMjM2WiIgc3R5bGU9ImZpbGw6I2VkMWYyNDtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNMjA0Ljc5NiwzMzIuODAzbDEzMy4wMTgsLTc2LjgwMWwtMTMzLjAxOCwtNzYuODAxbDAsMTUzLjYwMloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9nPjwvc3ZnPg=="/>
                                            YouTube
                                        </NavLink>
                                </OverlayTrigger>
                            </Col>
                        </Row>
                        <Row className="sidebarrow">
                        <Col sm={3} style={{margin: "8% 0"}} >
                            <Row >
                                <svg
                                style={{margin:"auto"}}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M21 8.77217L14.0208 1.79299C12.8492 0.621414 10.9497 0.621413 9.77817 1.79299L3 8.57116V23.0858H10V17.0858C10 15.9812 10.8954 15.0858 12 15.0858C13.1046 15.0858 14 15.9812 14 17.0858V23.0858H21V8.77217ZM11.1924 3.2072L5 9.39959V21.0858H8V17.0858C8 14.8767 9.79086 13.0858 12 13.0858C14.2091 13.0858 16 14.8767 16 17.0858V21.0858H19V9.6006L12.6066 3.2072C12.2161 2.81668 11.5829 2.81668 11.1924 3.2072Z"
                                    fill="currentColor"
                                />
                                </svg> 
                            </Row>
                        </Col>
                        <Col sm={8}style={{margin: "8% 0"}}  >
                            <Row>
                                <Link to="/">Home</Link>
                            </Row>
                        </Col>
                    </Row>
    
                    <Row  className="sidebarrow">
                        <Col sm={3} style={{margin: "8% 0"}} >
                            <Row>
                                <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2V4H20V12H22C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM18 12H16V8H12V6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12Z" fill="currentColor" /></svg>
                            </Row>
    
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}}  >
                            <Row >
                                Trending
                            </Row>
                        </Col>
                    </Row>
    
                    <Row  className="sidebarrow">
                        <Col sm={3} style={{margin: "8% 0"}} >
                            <Row>
                                <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7V11H11V7H7Z" fill="currentColor" /><path d="M13 7H17V11H13V7Z" fill="currentColor" /><path d="M13 13V17H17V13H13Z" fill="currentColor" /><path d="M7 13H11V17H7V13Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3 3H21V21H3V3ZM5 5V19H19V5H5Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                                Subscriptions
                            </Row>
                        </Col>
                    </Row>
    
                    <div style={{borderTop:"1px solid #bbb"}}></div>
    
                    <Row className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                                <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4V16H22V2H8V4H20Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2 8V22H16V8H2ZM14 10H4V20H14V10Z" fill="currentColor" /><path d="M17 7H5V5H19V19H17V7Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                            Library
                            </Row>
                        </Col>
                    </Row>
    
                    <Row  className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                            <svg style={{margin:"auto"}}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6214 2.55029L21.4498 5.37872L20.0356 6.79293L17.2071 3.96451L18.6214 2.55029Z" fill="currentColor" /><path d="M12.8225 8.60055H10.8225V12.6005H12.8225V8.60055Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.18633 18.8137C8.70105 22.3285 14.3995 22.3285 17.9143 18.8137C21.429 15.299 21.429 9.60055 17.9143 6.08583C14.3995 2.57111 8.70105 2.57111 5.18633 6.08583C1.67161 9.60054 1.67161 15.299 5.18633 18.8137ZM6.60054 17.3995C9.33422 20.1332 13.7664 20.1332 16.5 17.3995C19.2337 14.6659 19.2337 10.2337 16.5 7.50004C13.7664 4.76637 9.33422 4.76637 6.60054 7.50004C3.86688 10.2337 3.86688 14.6659 6.60054 17.3995Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                            History
                            </Row>
                        </Col>
                    </Row>
                    <Row  className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                            <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 13H14C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13H8C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13Z" fill="currentColor" /><path d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44771 8.44772 9 9 9C9.55228 9 10 9.44771 10 10Z" fill="currentColor" /><path d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44771 15.5523 9 15 9C14.4477 9 14 9.44771 14 10C14 10.5523 14.4477 11 15 11Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                            Liked Videos
                            </Row>
                        </Col>
                    </Row>
                    <Row  className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                            <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8284 12.0259L16.2426 13.4402L12 17.6828L7.75733 13.4402L9.17155 12.0259L11 13.8544V6.31724H13V13.8544L14.8284 12.0259Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                            Show more
                            </Row>
                        </Col>
                    </Row>
                    <div style={{borderTop:"1px solid #bbb"}}></div>
                        <Row>
                            <Col sm={3} style={{padding:"5% 0"}}>
                                <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7V11H11V7H7Z" fill="currentColor" /><path d="M13 7H17V11H13V7Z" fill="currentColor" /><path d="M13 13V17H17V13H13Z" fill="currentColor" /><path d="M7 13H11V17H7V13Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3 3H21V21H3V3ZM5 5V19H19V5H5Z" fill="currentColor" /></svg>
                            </Col>
                            <Col sm={8} style={{padding:"5% 0"}}>
                                Subscriptions
                            </Col>
                        </Row>
                         {this.renderSessions()}
                         <Row  className="sidebarrow">
                            <Col sm={3}style={{margin: "8% 0"}}  >
                                <Row>
                                    <img style={{margin:"auto"}}  width="30px"src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik01MDEuMjk5LDEzMi43NjZjLTUuODg4LC0yMi4wMyAtMjMuMjM0LC0zOS4zNzcgLTQ1LjI2NCwtNDUuMjY0Yy0zOS45MzIsLTEwLjcwMSAtMjAwLjAzNywtMTAuNzAxIC0yMDAuMDM3LC0xMC43MDFjMCwwIC0xNjAuMTA1LDAgLTIwMC4wMzgsMTAuNzAxYy0yMi4wMjUsNS44ODcgLTM5LjM3NiwyMy4yMzQgLTQ1LjI2NCw0NS4yNjRjLTEwLjY5NiwzOS45MjggLTEwLjY5NiwxMjMuMjM2IC0xMC42OTYsMTIzLjIzNmMwLDAgMCw4My4zMDggMTAuNjk2LDEyMy4yMzJjNS44ODgsMjIuMDMgMjMuMjM5LDM5LjM4MSA0NS4yNjQsNDUuMjY4YzM5LjkzMywxMC42OTcgMjAwLjAzOCwxMC42OTcgMjAwLjAzOCwxMC42OTdjMCwwIDE2MC4xMDUsMCAyMDAuMDM3LC0xMC42OTdjMjIuMDMsLTUuODg3IDM5LjM3NiwtMjMuMjM4IDQ1LjI2NCwtNDUuMjY4YzEwLjcwMSwtMzkuOTI0IDEwLjcwMSwtMTIzLjIzMiAxMC43MDEsLTEyMy4yMzJjMCwwIDAsLTgzLjMwOCAtMTAuNzAxLC0xMjMuMjM2WiIgc3R5bGU9ImZpbGw6I2VkMWYyNDtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNMjA0Ljc5NiwzMzIuODAzbDEzMy4wMTgsLTc2LjgwMWwtMTMzLjAxOCwtNzYuODAxbDAsMTUzLjYwMloiIHN0eWxlPSJmaWxsOiNmZmY7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9nPjwvc3ZnPg=="/>
                                </Row>
                            </Col>
                            <Col sm={8} style={{margin: "8% 0"}} >
                                <Row >
                                    YouTube Premium
                                </Row>
                            </Col>
                        </Row>
                        <Row className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                                <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H10V4H4V10H6V6Z" fill="currentColor" /><path d="M10 18H6V14H4V20H10V18Z" fill="currentColor" /><path d="M14 6H18V10H20V4H14V6Z" fill="currentColor" /><path d="M14 18H18V14H20V20H14V18Z" fill="currentColor" /><path d="M12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                                Movies & Shows
                            </Row>
                        </Col>
                    </Row>
                    <Row className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                            <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4695 11.2929C15.0789 10.9024 14.4458 10.9024 14.0553 11.2929C13.6647 11.6834 13.6647 12.3166 14.0553 12.7071C14.4458 13.0976 15.0789 13.0976 15.4695 12.7071C15.86 12.3166 15.86 11.6834 15.4695 11.2929Z" fill="currentColor" /><path d="M16.1766 9.17156C16.5671 8.78103 17.2003 8.78103 17.5908 9.17156C17.9813 9.56208 17.9813 10.1952 17.5908 10.5858C17.2003 10.9763 16.5671 10.9763 16.1766 10.5858C15.7861 10.1952 15.7861 9.56208 16.1766 9.17156Z" fill="currentColor" /><path d="M19.7121 11.2929C19.3216 10.9024 18.6885 10.9024 18.2979 11.2929C17.9074 11.6834 17.9074 12.3166 18.2979 12.7071C18.6885 13.0976 19.3216 13.0976 19.7121 12.7071C20.1027 12.3166 20.1027 11.6834 19.7121 11.2929Z" fill="currentColor" /><path d="M16.1766 13.4142C16.5671 13.0237 17.2003 13.0237 17.5908 13.4142C17.9813 13.8048 17.9813 14.4379 17.5908 14.8284C17.2003 15.219 16.5671 15.219 16.1766 14.8284C15.7861 14.4379 15.7861 13.8048 16.1766 13.4142Z" fill="currentColor" /><path d="M6 13H4V11H6V9H8V11H10V13H8V15H6V13Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M7 5C3.13401 5 0 8.13401 0 12C0 15.866 3.13401 19 7 19H17C20.866 19 24 15.866 24 12C24 8.13401 20.866 5 17 5H7ZM17 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                                Gaming
                            </Row>
                        </Col>
                    </Row>
                    <Row  className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                                <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                                Live
                            </Row>
                        </Col>
                    </Row>

                    <Row  className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                                <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.3294 19L0.731323 17.9641L5.06145 15.4641L7.1029 19H1.3294Z" fill="currentColor" /><path d="M15.1858 19H9.4123L5.7935 12.7321L10.1236 10.2321L15.1858 19Z" fill="currentColor" /><path d="M23.2687 19H17.4952L10.8557 7.5L15.1858 5L23.2687 19Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                                Fashion & Beauty
                            </Row>
                        </Col>
                    </Row>
    
                    <Row className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                                <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2426 6.34319C16.6331 5.95266 17.2663 5.95266 17.6568 6.34319C18.0474 6.73371 18.0474 7.36688 17.6568 7.7574L7.75734 17.6569C7.36681 18.0474 6.73365 18.0474 6.34313 17.6569C5.9526 17.2664 5.9526 16.6332 6.34313 16.2427L16.2426 6.34319Z" fill="currentColor" /><path d="M9.87866 9.87872C9.09761 10.6598 7.83128 10.6598 7.05023 9.87872C6.26918 9.09767 6.26918 7.83134 7.05023 7.05029C7.83128 6.26924 9.09761 6.26924 9.87866 7.05029C10.6597 7.83134 10.6597 9.09767 9.87866 9.87872Z" fill="currentColor" /><path d="M14.1213 16.9498C14.9023 17.7308 16.1687 17.7308 16.9497 16.9498C17.7308 16.1687 17.7308 14.9024 16.9497 14.1214C16.1687 13.3403 14.9023 13.3403 14.1213 14.1214C13.3403 14.9024 13.3403 16.1687 14.1213 16.9498Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                                Learning
                            </Row>
                        </Col>
                    </Row>
                    <div style={{borderTop:"1px solid #bbb"}}></div>
                    <Row  className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                            <svg style={{margin:"auto"}}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 9V7H7V9H5Z" fill="currentColor" /><path d="M9 9H19V7H9V9Z" fill="currentColor" /><path d="M5 15V17H7V15H5Z" fill="currentColor" /><path d="M19 17H9V15H19V17Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                                Settings
                            </Row>
                        </Col>
                    </Row>
                    <Row className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                            <svg style={{margin:"auto"}}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 9V7H7V9H5Z" fill="currentColor" /><path d="M9 9H19V7H9V9Z" fill="currentColor" /><path d="M5 15V17H7V15H5Z" fill="currentColor" /><path d="M19 17H9V15H19V17Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5H20C20.5523 5 21 5.44772 21 6V11H3V6C3 5.44772 3.44772 5 4 5ZM3 13V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V13H3Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                                Settings
                            </Row>
                        </Col>
                    </Row>
                    <Row  className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                            <svg style={{margin:"auto"}}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 21H6V11H12V13H20V5H13V3H4V21ZM12 5H6V9H13V11H18V7H12V5Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                                Flag Abuse
                            </Row>
                        </Col>
                    </Row>
                    <Row  className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                                <svg style={{margin:"auto"}}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z" fill="currentColor" /><path d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                                Help
                            </Row>
                        </Col>
                    </Row>
                    <Row className="sidebarrow">
                        <Col sm={3}style={{margin: "8% 0"}}  >
                            <Row>
                                <svg style={{margin:"auto"}}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z" fill="currentColor" /><path d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z" fill="currentColor" /><path d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z" fill="currentColor" /></svg>
                            </Row>
                        </Col>
                        <Col sm={8} style={{margin: "8% 0"}} >
                            <Row >
                                Send Feedback
                            </Row>
                        </Col>
                    </Row>
                    <div style={{borderTop:"1px solid #bbb"}}></div>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        loggedIn: state.authReducer.loggedIn,
        currentUser: state.authReducer.currentUser
    }
}

export default connect(mapStateToProps,null)(Maximizedsidebar);