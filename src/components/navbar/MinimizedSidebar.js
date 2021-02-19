import {Tooltip,OverlayTrigger, Row, Col} from 'react-bootstrap';
import '../../styles/navbar.css'
import {Link} from "react-router-dom"

const MinimizedSidebar = () =>{
    return(
        <div >
            <Row className="sidebarrow"> 
                <Col sm={12} style={{margin: "15% 0"}}>
                    <Row >
                        <Link to="/" style={{margin:"auto", color: "black"}}>
                            <svg
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
                        </Link>
                    </Row>
                    <Row><p style={{margin:"auto"}}>Home</p></Row>
                </Col>
            </Row>
            <Row className="sidebarrow">
                <Col sm={12} style={{margin: "15% 0"}}>
                    <Row >
                    <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2V4H20V12H22C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM18 12H16V8H12V6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12Z" fill="currentColor" /></svg>

                    </Row>
                    <Row><p style={{margin:"auto"}}>Trending</p></Row>
                </Col>
            </Row>
            <Row className="sidebarrow">
                <Col sm={12} style={{margin: "15% 0"}}>
                    <Row >
                    <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7V11H11V7H7Z" fill="currentColor" /><path d="M13 7H17V11H13V7Z" fill="currentColor" /><path d="M13 13V17H17V13H13Z" fill="currentColor" /><path d="M7 13H11V17H7V13Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3 3H21V21H3V3ZM5 5V19H19V5H5Z" fill="currentColor" /></svg>
                    </Row>
                    <Row><p style={{margin:"auto"}}>Subscriptions</p></Row>
                </Col>
            </Row>
            <Row className="sidebarrow">
                <Col sm={12} style={{margin: "15% 0"}}>
                    <Row >
                     <svg style={{margin:"auto"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4V16H22V2H8V4H20Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2 8V22H16V8H2ZM14 10H4V20H14V10Z" fill="currentColor" /><path d="M17 7H5V5H19V19H17V7Z" fill="currentColor" /></svg>
                    </Row>
                    <Row><p style={{margin:"auto"}}>Library</p></Row>
                </Col>
            </Row>
        </div>
    );
}

export default MinimizedSidebar;