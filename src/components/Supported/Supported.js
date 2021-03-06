import React, { Component } from 'react'

export class Supported extends Component {

    componentDidMount() {
        this.setState({
            support: "-"
        })
    }//failsafe

    handleChange = (event, property) => {
        console.log('in handleChange');
        this.setState({
            support: event.target.value
        })
    }//sets component state

    goComments = (event, property) => {
        console.log("Leaving Supported", this.state);
        if (this.state.support === "-") {
            alert("you must select a response")
        } else {
        this.props.dispatch({ type: "supported", payload: this.state.support });
        this.props.history.push('/comments');
    }
    }//sends component state to index.js for update

    render() {
        return (
            <div>
                <h3>How well are you being supported?</h3>
                <select id="supported" onChange={this.handleChange}>
                    <option>-</option>
                    <option onChange={this.handleChange} value="1">1: Not At All</option>
                    <option onChange={this.handleChange} value="2">2: A Bit</option>
                    <option onChange={this.handleChange} value="3">3: Okay</option>
                    <option onChange={this.handleChange} value="4">4: A Lot</option>
                    <option onChange={this.handleChange} value="5">5: Completely</option>
                </select>
                <button onClick={this.goComments}>Next Question</button>
            </div>
        )
    }
}

export default Supported
