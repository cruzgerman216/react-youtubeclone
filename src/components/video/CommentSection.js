import {Row, Col} from 'react-bootstrap';
import CommentForm from "./CommentForm";
import Comment from "./Comment"
import React from "react"
import API from '../../utils/API'
import { connect } from 'react-redux';

class CommentSection extends React.Component {
    componentWillMount(){
        API.getComments(this.props.videoid).then(data=>{
            this.setState({
                ...this.state,
                comments: data
            })
        })
    }
    
    state = {
        comments: []
    }

    addComment = (comment) =>{
        console.log(comment.statement)
        this.setState({
            ...this.state,
            comments: [
                ...this.state.comments,
                comment
            ]
        })

        API.addComment(this.props.currentUser.id,this.props.videoid,comment.statement).then(data=>{
            console.log(data)
        })
    }

    render(){
        return(
            <div>
                <div>
                    <span style={{marginRight:"2%"}}> Comments </span>
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 13H14V17H8V13Z" fill="currentColor" fillOpacity="0.5" /><path d="M6 6H4V18H6V6Z" fill="currentColor" /><path d="M20 7H8V11H20V7Z" fill="currentColor" /></svg>
                        Sort By
                    </span>
                </div>
                <div>
                    <CommentForm addComment={this.addComment}/>
                    {this.state.comments.map(comment=><Comment key={comment.id} info={comment}/>)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      currentUser: state.authReducer.currentUser,
      loggedIn: state.authReducer.loggedIn
    };
};

export default connect(mapStateToProps, null)(CommentSection)