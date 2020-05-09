import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';
import { connect } from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom';

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
      <HashRouter>
        <header className="App-header">
            <Route path="/" component={Home} />
            
          
            
        </header>
        <br/>
          <Route path="/feeling" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/supported" component={Supported} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/submit" component={Submit} />
          <button onClick={this.clickHandler}><Link to="/feeling">Start Survey</Link></button>
        </HashRouter>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(App);
