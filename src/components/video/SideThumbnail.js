import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SideThumbnail = props =>{

        return(
            <Link to={`/videos/${props.info.id}`} style={{display:"block"}}>
                        <Row style={{margin: "0% 0% 5% 0%"}}>
                <Col sm={5}>
                    <img width="100%" src={props.info.thumbnail}/>
                </Col>
                <Col sm={7}>
                    <Row>
                        {props.info.title}
                    </Row>
                    <Row>
                        {props.user.username}
                    </Row>
                    <Row>917k views * {props.info.created_at}</Row>
                </Col>
            </Row>
            
            </Link>
        );
}

export default SideThumbnail;