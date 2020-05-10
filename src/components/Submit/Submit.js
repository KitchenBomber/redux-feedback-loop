import React, { Component } from 'react'

export class Submit extends Component {

    goFeeling = () => {
        console.log("Leaving Submit");
        this.props.dispatch({ type: "reset" })
        this.props.history.push('/feeling');
    }// this clears the previous selections from reduxState and starts at the beginning of the survey.

    render() {
        return (
            <div>
                <h3>Thank You!</h3>
                <h3>Your feedback was received.</h3>
                <button onClick={this.goFeeling}>Leave New Feedback</button>
            </div>
        )
    }
}//this brings the user back to question #1

export default Submit
