import React from 'react'
import { Button, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const ModalLogin = props =>{
    return(
        <div>
            <Modal show={props.show} onHide={props.handleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>You are not sign in. </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleModal}>
                        Close
                    </Button>
                    <Link to="/signup">Sign up</Link> 
                    <Link to="/login">Sign in</Link> 
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalLogin;