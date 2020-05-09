import React, { Component } from 'react'

export class Submit extends Component {

    goFeeling = () => {
        console.log("Leaving Submit");
        this.props.history.push('/feeling');
    }

    render() {
        return (
            <div>
                <h3>Thank You!</h3>
                <button onClick={this.goFeeling}>Leave New Feedback</button>
            </div>
        )
    }
}

export default Submit
