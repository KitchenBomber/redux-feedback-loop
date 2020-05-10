import React, { Component } from 'react'

export class Home extends Component {

    goFeeling = () => {
        console.log("Leaving Submit");
        this.props.history.push('/feeling');
    }

    render() {
        return (
            <div>
                <h4><i>Don't forget it!</i></h4>
                <button onClick={this.goFeeling}>Leave New Feedback</button>
            </div>
        )
    }
}

export default Home
