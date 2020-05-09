import React, { Component } from 'react'

export class Comments extends Component {

    goReview = () => {
        console.log("Leaving Comments");
        this.props.history.push('/review');
    }

    render() {
        return (
            <div>
                <h3>Any comments you want to leave?</h3>
                <form>
                    <label for="comments">Tell us what you think:</label>
                    <input type="text" name="comments"></input>
                    <button onClick={this.goReview}>Review Answers</button>
                </form>
            </div>
        )
    }
}

export default Comments
