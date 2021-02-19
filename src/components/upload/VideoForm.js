
import React from 'react'
import {withRouter} from 'react-router-dom'
class VideoForm extends React.Component {

    state = {
        url: "",
        thumbnail:"",
        title: "",
        description: "",
    }

    onChange = (e) => {
        e.persist();
        this.setState(() => {
            return {
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
                thumbnail:this.state.thumbnail,
                url: this.state.url,
                title: this.state.title,
                description: this.state.description,
                user_id: this.props.user_id
            }

        fetch(`http://localhost:3000/videos`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(video => {
            console.log(video);
            this.props.history.push('/')
        })
    }

    render(){
        return (
            <div className="form">
                <h1>New Upload</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Video url</label>
                    <input type="text" name="url" onChange={this.onChange}/>
                    <br/>
                    <label>Thumbnail url</label>
                    <input type="text" name="thumbnail" onChange={this.onChange}/>
                    <br/>
                    <label>Title</label>
                    <input type="text" name="title" onChange={this.onChange}/>
                    <br/>
                    <label>Description</label>
                    <input type="text" name="description" onChange={this.onChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(VideoForm)