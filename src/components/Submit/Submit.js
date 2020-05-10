import React, { Component } from 'react'

export class Submit extends Component {

    goFeeling = () => {
        console.log("Leaving Submit");
        this.props.dispatch({ type: "reset" })
        this.props.history.push('/feeling');
    }

    render() {
        return (
            <div>
                <h3>Thank You!</h3>
                <h3>Your feedback was received.</h3>
                <button onClick={this.goFeeling}>Leave New Feedback</button>
            </div>
        )
    }
}

export default Submit
