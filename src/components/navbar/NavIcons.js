import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import {Tooltip,OverlayTrigger,Dropdown, Row, Col} from 'react-bootstrap';
import "../../App.css"

const NavIcons = props =>{
        return(
             <div>
                {props.loggedIn ? (
                <div>
                    <Dropdown style={{display:"inline-block"}}>
                        <Dropdown.Toggle id="dropdown-toggle" style={{backgroundColor: "white", color: "black", display: "inline-block", borderColor:"white", padding:"0px"}} >
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Create</Tooltip>}>
                                <svg  style={{margin:"0px 10px 0px 10px", width:"25px"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 14.9861C11 15.5384 11.4477 15.9861 12 15.9861C12.5523 15.9861 13 15.5384 13 14.9861V7.82831L16.2428 11.0711L17.657 9.65685L12.0001 4L6.34326 9.65685L7.75748 11.0711L11 7.82854V14.9861Z" fill="currentColor" />
                                    <path d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z" fill="currentColor" />
                                </svg>
                            </OverlayTrigger>
                         </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Row style={{padding:".25rem 1.5rem"}}>

                            <Link to ="/upload">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg"  >
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 4.5V6.5H12V7.5H3C1.34315 7.5 0 8.84315 0 10.5V16.5C0 18.1569 1.34315 19.5 3 19.5H15C16.5731 19.5 17.8634 18.2892 17.9898 16.7487L24 17.5V9.5L17.9898 10.2513C17.8634 8.71078 16.5731 7.5 15 7.5H14V5.5C14 4.94772 13.5523 4.5 13 4.5H4ZM18 12.2656V14.7344L22 15.2344V11.7656L18 12.2656ZM16 10.5C16 9.94772 15.5523 9.5 15 9.5H3C2.44772 9.5 2 9.94772 2 10.5V16.5C2 17.0523 2.44772 17.5 3 17.5H15C15.5523 17.5 16 17.0523 16 16.5V10.5Z" fill="currentColor"/>
                            </svg>
                                Upload Video</Link>
                                </Row>
                            <Dropdown.Item >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="currentColor" /></svg>
                                Go Live</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
    
                    <Dropdown style={{display:"inline-block"}}>
                        <Dropdown.Toggle id="dropdown-toggle" style={{backgroundColor: "white", color: "black", display: "inline-block", borderColor:"white", padding:"0px"}} >
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Youtube apps</Tooltip>}>
                                <svg style={{margin:"0px 10px 0px 10px", width:"25px"}}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H11V11H3V3Z" fill="currentColor" /><path d="M3 13H11V21H3V13Z" fill="currentColor" />
                                    <path d="M13 3H21V11H13V3Z" fill="currentColor" /><path d="M13 13H21V21H13V13Z" fill="currentColor" />
                                </svg>
                            </OverlayTrigger>
                         </Dropdown.Toggle>
    
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                YouTube TV
                            </Dropdown.Item>
                            <Dropdown.Item >
                                YouTube Music
                            </Dropdown.Item>
                            <Dropdown.Item >
                                YouTube Kids
                            </Dropdown.Item>
                            <Dropdown.Item >
                                Creator Academy
                            </Dropdown.Item>
                            <Dropdown.Item >
                                YouTube for Artists
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
    
                    <Dropdown style={{display:"inline-block"}}>
                        <Dropdown.Toggle id="dropdown-toggle" style={{backgroundColor: "white", color: "black", display: "inline-block", borderColor:"white", padding:"0px"}} >
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Notifications</Tooltip>}>
                                <svg style={{margin:"0px 10px 0px 10px", width:"25px"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V20C22 21.1046 21.1046 22 20 22H8.1477C8.09893 22.0036 8.04968 22.0054 8 22.0054H4C2.89543 22.0054 2 21.1099 2 20.0054V5ZM5 4H19C19.5523 4 20 4.44771 20 5V14H16C14.8954 14 14 14.8954 14 16V17H10V16.0054C10 14.9008 9.10457 14.0054 8 14.0054H4V5C4 4.44772 4.44771 4 5 4Z" fill="currentColor" />
                                </svg>
                            </OverlayTrigger>
                         </Dropdown.Toggle>
                        <Dropdown.Menu style={{width:"35rem"}}>
                        <Dropdown.Item>
                                <Row>
                                    <Col sm={10}>
                                         Notifications
                                    </Col>
                                    <Col sm={1}  style={{wordWrap:"break-word"}}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12C9.44769 12 9 12.4477 9 13C9 13.5523 9.44769 14 10 14H14C14.5522 14 15 13.5523 15 13C15 12.4477 14.5522 12 14 12H10Z" fill="currentColor" />
                                    <path fillRule="evenodd" clipule="evenodd" d="M4 2C2.34314 2 1 3.34314 1 5V19C1 20.6569 2.34314 22 4 22H20C21.6569 22 23 20.6569 23 19V5C23 3.34314 21.6569 2 20 2H4ZM20 4H4C3.44769 4 3 4.44769 3 5V8H21V5C21 4.44769 20.5522 4 20 4ZM3 19V10H21V19C21 19.5523 20.5522 20 20 20H4C3.44769 20 3 19.5523 3 19Z" fill="currentColor" /></svg>
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                        <Dropdown.Divider />
                            <Dropdown.Item>
                                <Row>
                                    <Col sm={1}>
                                         <img style={{margin:"0px 10px 0px 10px", borderRadius: "60%", width: "40px"}} src="https://i.stack.imgur.com/l60Hf.png"/>
                                    </Col>
                                    <Col sm={8}  style={{wordWrap:"break-word"}}>
                                        <p style={{whiteSpace: "initial"}}> Claude Garcia commented: "Watching your grammar mistake was like watching a reality tv show. “The exclamation mark!!!” 😂😂😂 Thank you for your vid it’s so helpful!!!"</p>
                                    </Col>
                                    <Col sm={3}>
                                        image
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Row>
                                    <Col sm={1}>
                                         <img style={{margin:"0px 10px 0px 10px", borderRadius: "60%", width: "40px"}} src="https://i.stack.imgur.com/l60Hf.png"/>
                                    </Col>
                                    <Col sm={8}  style={{wordWrap:"break-word"}}>
                                        <p style={{whiteSpace: "initial"}}> Claude Garcia commented: "Watching your grammar mistake was like watching a reality tv show. “The exclamation mark!!!” 😂😂😂 Thank you for your vid it’s so helpful!!!"</p>
                                    </Col>
                                    <Col sm={3}>
                                        image
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Row>
                                    <Col sm={1}>
                                         <img style={{margin:"0px 10px 0px 10px", borderRadius: "60%", width: "40px"}} src="https://i.stack.imgur.com/l60Hf.png"/>
                                    </Col>
                                    <Col sm={8}  style={{wordWrap:"break-word"}}>
                                        <p style={{whiteSpace: "initial"}}> Claude Garcia commented: "Watching your grammar mistake was like watching a reality tv show. “The exclamation mark!!!” 😂😂😂 Thank you for your vid it’s so helpful!!!"</p>
                                    </Col>
                                    <Col sm={3}>
                                        image
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Row>
                                    <Col sm={1}>
                                         <img style={{margin:"0px 10px 0px 10px", borderRadius: "60%", width: "40px"}} src="https://i.stack.imgur.com/l60Hf.png"/>
                                    </Col>
                                    <Col sm={8}  style={{wordWrap:"break-word"}}>
                                        <p style={{whiteSpace: "initial"}}> Claude Garcia commented: "Watching your grammar mistake was like watching a reality tv show. “The exclamation mark!!!” 😂😂😂 Thank you for your vid it’s so helpful!!!"</p>
                                    </Col>
                                    <Col sm={3}>
                                        image
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown style={{display:"inline-block", zIndex: "5"}}>
                        <Dropdown.Toggle id="dropdown-toggle" style={{backgroundColor: "white", color: "black", display: "inline-block", borderColor:"white", padding:"0px"}} >
                            <img style={{margin:"0px 10px 0px 10px", borderRadius: "60%", width: "40px"}} src={props.currentUser.image}/>
                         </Dropdown.Toggle>
                        <Dropdown.Menu style={{width:"20rem"}}>
                            <Dropdown.Item>
                                <Row>
                                    <Col sm={3}>
                                       <img style={{margin:"0px 10px 0px 10px", borderRadius: "60%", width: "40px"}} src={props.currentUser.image}/>
                                    </Col>
                                    <Col sm={9}>
                                        <div>{props.currentUser.username}</div>
                                        <div>Manage your Google Account</div>
                                    </Col>
                                </Row>
                            </Dropdown.Item>
                         <Dropdown.Divider />
                                        <Row style={{padding:".25rem 1.5rem"}}>
                                            <Col sm={3}>
                                            Icon
                                            </Col>
                                            <Col sm={9}>
                                        <Link to={`/users/${props.currentUser.id}`}>Your Channel </Link>
                                            </Col>
                                        </Row>
                            <Dropdown.Item >
                                <Row>
                                     <Col sm={3}>
                                        Icon
                                      </Col>
                                      <Col sm={9}>
                                          Purchases and membershipss
                                       </Col>
                                  </Row>
                            </Dropdown.Item>
                            <Dropdown.Item >
                               <Row>
                                   <Col sm={3}>
                                       Icon
                                   </Col>
                                   <Col sm={9}>
                                       Youtube Studio
                                   </Col>
                               </Row>
                            </Dropdown.Item>
                            <Dropdown.Item >
                               <Row>
                                   <Col sm={3}>
                                       Icon
                                   </Col>
                                   <Col sm={9}>
                                       Switch Account
                                   </Col>
                               </Row>
                            </Dropdown.Item>
                               <Row style={{padding:".25rem 1.5rem"}}>
                                   <Col sm={3}>
                                       Icon
                                   </Col>
                                   <Col sm={9}>
                                        <Link to="/" onClick={()=>props.logout()}>Sign out</Link>
                                   </Col>
                               </Row>
                            <Dropdown.Divider />
                            <Dropdown.Item >
                               <Row>
                                   <Col sm={3}>
                                       Icon
                                   </Col>
                                   <Col sm={9}>
                                       Appearance: Light
                                   </Col>
                               </Row>
                            </Dropdown.Item>
                            <Dropdown.Item >
                               <Row>
                                   <Col sm={3}>
                                       Icon
                                   </Col>
                                   <Col sm={9}>
                                       Language: English
                                   </Col>
                               </Row>
                            </Dropdown.Item>
                            <Dropdown.Item >
                               <Row>
                                   <Col sm={3}>
                                       Icon
                                   </Col>
                                   <Col sm={9}>
                                       Location: United States
                                   </Col>
                               </Row>
                            </Dropdown.Item>
                            <Dropdown.Item >
                               <Row>
                                   <Col sm={3}>
                                       Icon
                                   </Col>
                                   <Col sm={9}>
                                       Settings
                                   </Col>
                               </Row>
                            </Dropdown.Item>
                            <Dropdown.Item >
                               <Row>
                                   <Col sm={3}>
                                       Icon
                                   </Col>
                                   <Col sm={9}>
                                       Your data in Youtube
                                   </Col>
                               </Row>
                            </Dropdown.Item>
                            <Dropdown.Item >
                               <Row>
                                   <Col sm={3}>
                                       Icon
                                   </Col>
                                   <Col sm={9}>
                                       Help
                                   </Col>
                               </Row>
                            </Dropdown.Item>
                            <Dropdown.Item >
                               <Row>
                                   <Col sm={3}>
                                       Icon
                                   </Col>
                                   <Col sm={9}>
                                       Send feedback
                                   </Col>
                               </Row>
                            </Dropdown.Item>
                            <Dropdown.Item >
                               <Row>
                                   <Col sm={3}>
                                       Icon
                                   </Col>
                                   <Col sm={9}>
                                       Keyboard Shortcuts
                                   </Col>
                               </Row>
                            </Dropdown.Item>
                         <Dropdown.Divider />
                            <Dropdown.Item >
                                       Restricted Mode: Off
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
             ) : (<div><Link to="/login">Sign In</Link></div>)}
            </div>
        )
}

export default NavIcons;