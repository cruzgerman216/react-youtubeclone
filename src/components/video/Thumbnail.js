import {Row, Col} from 'react-bootstrap';
const Thumbnail = props => {
    return(
        <div>
            <div>
                <img  width="100%"  src={props.info.thumbnail}/>
            </div>
            <Row>
                <Col sm={2}>
                    <img width="20px" src={props.info.user.image}/>
                </Col>
                <Col sm={9}>
                    <Row>
                        <b>{props.info.title}</b>
                    </Row>
                    <Row>
                        <b>{props.info.user.username}</b>
                    </Row>
                    <Row>
                        <b>{props.info.views} * {props.info.created_at}</b>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Thumbnail;