import React, { Component } from 'react'

export class Comments extends Component {
    
    componentDidMount() {
        this.setState({
            comments: ""
        })
    }//will at least send empty string

    handleChange = (event, property) => {
        console.log('in handleChange');
        this.setState({
            comments: event.target.value
        })
    }//sets component state

    goReview = () => {
        console.log("Leaving Comments", this.state);
        this.props.dispatch({ type: "comments", payload: this.state.comments });
        this.props.history.push('/review');
    }//sends the comment up to index.js

    render() {
        return (
            <div>
                <h3>Any comments you want to leave?</h3>
                <input id="comments" 
                onChange={this.handleChange} 
                type="text" placeholder="Tell us your hopes and dreams" size="50"></input>
                <button onClick={this.goReview}>Review Answers</button>
                
            </div>
        )
    }
}

export default Comments
