import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FightsPage from './components/FightsPage';
import SubcribePage from './components/SubscribePage';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store, {history} from './store';
import {Provider} from 'react-redux';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={FightsPage}></IndexRoute>
                <Route path="/subscribe" component={SubcribePage}></Route>
                <Route path="/login" component={Login}></Route>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
