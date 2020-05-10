import React, { Component } from 'react'

export class Understanding extends Component {

    componentDidMount() {
        this.setState({
            understanding: "-"
        })
    }//prevents non-answers

    handleChange = (event, property) => {
        console.log('in handleChange');
        this.setState({
            understanding: event.target.value
        })
    }//updates the current state

    goSupported = (event, property) => {
        console.log("Leaving Understanding", this.state);
        if (this.state.understanding === "-") {
            alert("you must select a response")
        } else {
        this.props.dispatch({ type: "understanding", payload: this.state.understanding });
        this.props.history.push('/supported');
    }
    }//checks for non-answers then locks in the component state as the redux state

    render() {
        return (
            <div>
                <h3>How Well are you understanding the content?</h3>
                <div>
                    <select id="understanding" onChange={this.handleChange}>
                        <option>-</option>
                        <option onChange={this.handleChange} value="1">1: Not At All</option>
                        <option onChange={this.handleChange} value="2">2: A Bit</option>
                        <option onChange={this.handleChange} value="3">3: Okay</option>
                        <option onChange={this.handleChange} value="4">4: A Lot</option>
                        <option onChange={this.handleChange} value="5">5: Completely</option>
                    </select>
                    <button onClick={this.goSupported}>Next Question</button>
                </div>
            </div>
        )
    }
}

export default Understanding
