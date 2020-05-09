import React, { Component } from 'react'

export class Understanding extends Component {

    goSupported = () => {
        console.log("Leaving Understanding");
        this.props.history.push('/supported');
    }

    render() {
        return (
            <div>
                <h3>How Well are you understanding the content?</h3>
                <div>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button onClick={this.goSupported}>Next Question</button>
                </div>
            </div>
        )
    }
}

export default Understanding
