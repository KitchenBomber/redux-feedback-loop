import React, { Component } from 'react'

export class Review extends Component {

    goSubmit = () => {
        console.log("Leaving Review");
        this.props.dispatch({ type: "submit" })
        this.props.history.push('/submit');
    }

    render() {
        return (
            <div>
                <h3>Review Your Feedback</h3>
                <h3>Feeling: {this.props.reduxState.feeling}</h3>
                <h3>Understanding: {this.props.reduxState.understanding}</h3>
                <h3>Support: {this.props.reduxState.support}</h3>
                <h3>Comments: {this.props.reduxState.comments}</h3>
                <button onClick={this.goSubmit}>Submit Responses</button>
            </div>
        )
    }
}

export default Review
