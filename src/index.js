import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Axios from 'axios';

const firstReducerInitialState = {
    feeling: "",
    understanding: "",
    support: "",
    comments: "",
};

const firstReducer = (state = firstReducerInitialState, action) => {
    console.log('in firstReducer', state, action);
    if(action.type === "feeling"){
        return { ...state, feeling: action.payload };
    }else if(action.type === "understanding"){
        return {...state, understanding: action.payload}
    }else if(action.type === "supported"){
        return {...state, support: action.payload}
    }else if(action.type === "comments"){
        return {...state, comments: action.payload}
    }else if(action.type === "submit"){
        Axios.post('/survey', state).then( ( response )=>{
            console.log('back from POST', response.data );
        }).catch ( ( err )=>{
            console.log(err);
            alert('failed to submit')
        })
    }else if(action.type === "reset"){
        return {
            state, feeling: "",
            understanding: "",
            support: "",
            comments: "",
        }
    }
    return state
}

const storeInstance = createStore(firstReducer);

ReactDOM.render(
<Provider store={storeInstance}><App /></Provider>,
 document.getElementById('root'));
registerServiceWorker();

