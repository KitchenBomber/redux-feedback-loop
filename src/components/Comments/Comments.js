import React, { Component } from 'react'

export class Comments extends Component {

    goReview = () => {
        console.log("Leaving Comments");
        this.props.history.push('/review');
    }

    render() {
        return (
            <div>
                <h3>Any comments you want to leave?</h3>
                <input id="comments" type="text" placeholder="comments"></input>
                <button onClick={this.goReview}>Review Answers</button>
                
            </div>
        )
    }
}

export default Comments
