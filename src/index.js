import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FightsPage from './components/FightsPage';
import SubcribePage from './components/SubscribePage';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={FightsPage}></IndexRoute>
            <Route path="/subscribe" component={SubcribePage}></Route>
        </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
