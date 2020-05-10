import React, { Component } from 'react'

export class Feeling extends Component {

    componentDidMount() {
        this.setState({
            feeling: "-"
        })
    }//this setState is to prevent someone from proceeding without making a selection

    handleChange = (event, property) => {
        console.log('in handleChange');
        this.setState({
            feeling: event.target.value
        })
    }//this updates state every time the selector is moved

    goUnderstanding = (event, property) => {
        console.log("Leaving Feelings", this.state);
        if (this.state.feeling === "-") {
            alert("you must select a response")
        } else {
            this.props.dispatch({ type: "feeling", payload: this.state.feeling })
            this.props.history.push('/understanding');
        }
    }//this sends the payload and instruction to update only feeling

    render() {
        return (
            <div>
                How are you Feeling today?
                <div>

                    <select id="feeling" onChange={this.handleChange}>
                        <option>-</option>
                        <option onChange={this.handleChange} value="1">1: Poopy</option>
                        <option onChange={this.handleChange} value="2">2: Crummy</option>
                        <option onChange={this.handleChange} value="3">3: Okay</option>
                        <option onChange={this.handleChange} value="4">4: Good</option>
                        <option onChange={this.handleChange} value="5">5: Great</option>
                    </select>
                    <button onClick={this.goUnderstanding}>Next Question</button>
                </div>
            </div>
        )
    }
}

export default Feeling
