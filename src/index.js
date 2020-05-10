import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const firstReducerInitialState = {
    feeling: "",
    understanding: "",
    support: "",
    comments: "",
    flagged: false,
};

const firstReducer = (state = firstReducerInitialState, action) => {
    console.log('in firstReducer', state, action);
    if(action.type === "feeling"){
        // feeling = action.payload
        return { ...state, feeling: action.payload };
    }else if(action.type === "understanding"){
        return {...state, understanding: action.payload}
    }else if(action.type === "supported"){
        return {...state, support: action.payload}
    }else if(action.type === "comments"){
        return {...state, comments: action.payload}
    }
    return state
}

const storeInstance = createStore(firstReducer);

ReactDOM.render(
<Provider store={storeInstance}><App /></Provider>,
 document.getElementById('root'));
registerServiceWorker();

