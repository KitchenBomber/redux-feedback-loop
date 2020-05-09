import React, { Component } from 'react'

export class Feeling extends Component {

    goUnderstanding = () => {
        console.log("Leaving Feelings");
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <div>
                How are you Feeling today?
                <div>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.goUnderstanding}>Next Question</button>
                </div>
            </div>
        )
    }
}

export default Feeling
