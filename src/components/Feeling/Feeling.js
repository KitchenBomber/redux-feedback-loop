import React, { Component } from 'react'

export class Feeling extends Component {

    handleChange = (event, property)=>{
    console.log('in handleChange');
    this.setState({
        feeling: event.target.value
    })
}

    goUnderstanding = (event, property) => {
        console.log("Leaving Feelings", this.state);
       this.props.dispatch({type: "feeling", payload: this.state.feeling});
        this.props.history.push('/understanding');
    }

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
