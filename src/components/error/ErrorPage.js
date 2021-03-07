import React from 'react'
import {connect} from 'react-redux'

class ErrorPage extends React.Component{

    connect(){
        this.props.connect();
    }

    render(){
        return(
            <div>
                <div onClick={()=>{
                    this.connect()
                }}>click me to reconnect</div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        connect: () => dispatch({type:"CONNECTION", connection:true})
    };
  };
   
 export default connect(null,mapDispatchToProps)(ErrorPage);