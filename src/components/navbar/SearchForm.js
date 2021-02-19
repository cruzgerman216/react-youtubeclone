import React from 'react';
import {Redirect} from 'react-router-dom';
import { Form, FormControl, Button,Tooltip,OverlayTrigger} from 'react-bootstrap';

export default class SearchForm extends React.Component {

    state= {
        query:"",
        search:false
    }
    
    handleOnSubmit = (event) =>{
        event.preventDefault();
        if(this.state.query != ""){
            this.setState({
                ...this.state,
                search:true
            })
        }

    }

    handleOnChange = (event) => {
        event.preventDefault();
        const {name,value} = event.target;
        this.setState({[name]: value})
    }

    render(){
        if(this.state.search){
            return(
                <Redirect to={`/search/${this.state.query}`}/>
            );
        }
        return (
            <div>
                <Form inline onSubmit={this.handleOnSubmit}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:"80%"}} name="query" id="search" onChange={this.handleOnChange}/>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip id="button-tooltip">Search</Tooltip>}>
                                <Button type="submit" variant="outline-info" style={{width:"9%"}}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor" /></svg>
                                </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={<Tooltip id="button-tooltip">Seach with your voice</Tooltip>}>
                                <svg style={{width:"9%"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V4ZM13 4V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z" fill="currentColor" /><path d="M18 12C18 14.973 15.8377 17.441 13 17.917V21H17V23H7V21H11V17.917C8.16229 17.441 6 14.973 6 12V9H8V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V9H18V12Z" fill="currentColor" /></svg>
                        </OverlayTrigger>
                </Form>

            </div>
        )
    }
}