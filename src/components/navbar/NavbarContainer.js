import React from 'react';
import {Row, Col} from 'react-bootstrap';
import SearchForm from './SearchForm'
import NavIcons from './NavIcons'
import NavBrand from './NavBrand'
import {connect} from 'react-redux'
import {toggleSidebar} from '../../redux/actions/navbar';
import {logout} from '../../redux/actions/authActions'

 class NavbarContainer extends React.Component {
    render(){
        return (
            <div style={{position:"fixed", zIndex:"10",width:"100%",backgroundColor:"white", top:"0", padding: "12px 30px"}}>
                    <Row>
                        <Col sm={3}>
                            <NavBrand toggleSidebar={this.props.toggleSidebar}/>
                        </Col>
                        <Col sm={6}>
                            <SearchForm/>
                        </Col>
                        <Col sm={3} style={{textAlign: "right"}}>
                            <NavIcons logout={this.props.logout} loggedIn={this.props.loggedIn} currentUser={this.props.currentUser}/>
                        </Col>
                    </Row>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      toggleNavbar: state.navReducer.toggleNavbar,
      loggedIn: state.authReducer.loggedIn,
      currentUser: state.authReducer.currentUser
    };
  };
   
  const mapDispatchToProps = dispatch => {
    return {
        toggleSidebar: () => dispatch(toggleSidebar()),
        logout: () => logout(dispatch)
    };
  };
   
export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);