# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

Checklist:
## Steps to setup React & REDUX by Lamport
[X] Set up React and REDUX folders    
        [NA] npx create-react-app FOLDERNAME
        [NA] cd into FOLDERNAME in Terminal
        [X] npm install redux react-redux
[X] Create Component & Apps folder, Move App.js & App.css into Apps folder
        [NA] Ensure path to Apps.js is still valid in index.js
        [NA] npm start, ensure page is loading
        [NA] Optional - Modify vh of App.css to 12vh from 100vh
[ ] Import REDUX into React Project
        [ ] In index.js, add the following: 
                [X] import { createStore } from 'redux';
                [X] import { Provider } from 'react-redux'; 
                [ ] Create firstReducer function:
                        ```const firstReducer = () =>{
                        console.log('in firstReducer');
                        return {};}```
                [ ] Create storeInstance function:
                        ```const storeInstance = createStore (firstReducer);```
                [ ] Instruct <App /> to utilize Provider:
                        ```<Provider store={ storeInstance }><App /></Provider>```
        [ ] In App.js, add the following:
                [ ] Modify function App to become a class App as shown:
                        ```class App extends React.Component{```
                [ ] Import the connect feature from react-redux:
                        ```import { connect } from 'react-redux';```
                [ ] Modify the export:
                        ```export default connect()(App);```
                [ ] Check this.props in componentDidMount:
                        ```componentDidMount(){
                        console.log('in componentDidMount', this.props)}```
[ ] To check if dispatch works, create a means to use this.props.dispatch, example:
        [ ] BUTTON:     <button onClick={this.clickHandler}>Click Me</button>
        [ ] FUNCTION:   clickHandler = () => {
                        console.log('in clickHandler');
                        this.props.dispatch({type: 'click'});}
[ ] Set up putReduxStateOnProps at the bottom of App.js
        [ ] Create new function putReduxStateOnProps:
                const putReduxStateOnProps = ( reduxState ) => ( { reduxState} );
        [ ] Modify the export 
                export default connect( putReduxStateOnProps )(App);
[ ] Within index.js, make the following changes:
        [ ] Set up initial state using:
                const firstReducerInitialState = 0;
        [ ] Add a state and action into firstReducer, example:
                const firstReducer = (state = firstReducerInitialState, action) => {}