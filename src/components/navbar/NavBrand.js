import React from 'react';
import { NavLink } from 'react-router-dom';
import {Tooltip,OverlayTrigger, Row, Col} from 'react-bootstrap';

const NavBrand = props =>{
        return (
            <Row>
                <Col sm={3} style={{margin:"auto"}}>
                    <svg style={{margin: "15%"}} onClick={props.toggleSidebar}width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor" /><path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor" /><path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor" /></svg>
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
        )
}

export default NavBrand;