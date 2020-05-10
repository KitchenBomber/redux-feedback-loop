import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';
import { connect } from 'react-redux';
import { HashRouter, Route, } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    console.log('in componentDidMount', this.props)

  }
  clickHandler = () => {
    console.log('in clickHandler', this.props.reduxState);
  }
  //this handler is for the check reduxState button used in testing

  render() {
    return (
      <div className="App">
        <HashRouter>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <Route exact path="/" component={Home} />

            {/* This button was for testing only <button onClick={this.clickHandler}>Check Redux</button> */}


          </header>
          <br />
          {/* These are the routes connecting my functional components */}
          <Route path="/feeling"
            render={(props) => <Feeling {...props} dispatch={this.props.dispatch} />}
          />
          <Route path="/understanding"
            render={(props) => <Understanding {...props} dispatch={this.props.dispatch} />}
          />
          <Route path="/supported"
            render={(props) => <Supported {...props} dispatch={this.props.dispatch} />}
          />
          <Route path="/comments"
            render={(props) => <Comments {...props} dispatch={this.props.dispatch} />}
          />
          <Route path="/review" render={(props) => <Review {...props} dispatch={this.props.dispatch} reduxState={this.props.reduxState} />}
          />
          <Route path="/submit" render={(props) => <Submit {...props} dispatch={this.props.dispatch} />}
          />
        </HashRouter>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });

export default connect(putReduxStateOnProps)(App);
