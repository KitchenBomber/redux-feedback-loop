import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import { connect } from 'react-redux';


class App extends Component {

  componentDidMount() {
    console.log('in componentDidMount', this.props)
  }
  clickHandler = () => {
    console.log('in clickHandler');
    this.props.dispatch({ type: 'click' });
  }//this is the test button, making sure dispatch was working

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Home />
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <button onClick={this.clickHandler}>Click Me</button>
        </header>
        <br/>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(App);
