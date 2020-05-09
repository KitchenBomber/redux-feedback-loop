import React, { Component } from 'react'

export class Review extends Component {

    goSubmit = () => {
        console.log("Leaving Review");
        this.props.history.push('/submit');
    }

    render() {
        return (
            <div>
                <h3>Review Your Feedback</h3>
                <h3>Feelings:</h3>
                <h3>Understanding:</h3>
                <h3>Support:</h3>
                <h3>Comments:</h3>
                <button onClick={this.goSubmit}>Submit Responses</button>
            </div>
        )
    }
}

export default Review
