import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const firstReducerInitialState = 0;

const firstReducer = (state = firstReducerInitialState, action) => {
    console.log('in firstReducer', state, action);
    return {};
}

const storeInstance = createStore(firstReducer);

ReactDOM.render(
<Provider store={storeInstance}><App /></Provider>,
 document.getElementById('root'));
registerServiceWorker();

