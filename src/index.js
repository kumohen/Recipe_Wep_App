import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import thunk from 'redux-thunk';
import App from './App';

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer,applyMiddleware(thunk));
store.subscribe(()=> console.log('state',store.getState()));

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}/>
        
    </Switch>    
</BrowserRouter>
</Provider>
, document.getElementById('root'));

