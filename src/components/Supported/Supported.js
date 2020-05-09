import React, { Component } from 'react'

export class Supported extends Component {

    goComments = () => {
        console.log("Leaving Supported");
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div>
                <h3>How well are you being supported?</h3>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.goComments}>Next Question</button>
            </div>
        )
    }
}

export default Supported
