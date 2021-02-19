// pass state information from home to maximizedsidebar to subscription component
import {Tooltip,OverlayTrigger, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Subscription = (props) =>{
    return(
        <>
        <Col sm={3} style={{padding: "5% 0"}} >
                <img style={{margin:"auto"}} width="30px" src={props.info.image}/>
        </Col>
        <Col sm={8} style={{padding: "5% 0"}} >
             <Link to={`users/${props.info.id}`}>
                        {props.info.username}
                 </Link>
        </Col>
        </>
    );
}

export default Subscription;