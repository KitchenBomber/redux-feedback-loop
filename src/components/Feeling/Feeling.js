import React, { Component } from 'react'

export class Feeling extends Component {

componentDidMount(){
    this.setState({
        feeling: "-"
    })
}

    handleChange = (event, property)=>{
    console.log('in handleChange');
    this.setState({
        feeling: event.target.value
    })
}

    goUnderstanding = (event, property) => {
        console.log("Leaving Feelings", this.state);
        if(this.state.feeling === "-"){
            alert("you must select a response")
    }else{
       this.props.dispatch({type: "feeling", payload: this.state.feeling})
            this.props.history.push('/understanding');
    } 
    //     if(this.state.feeling === null){
    //     alert("you must select a response")
    // }
       
        
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
