import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

const store  = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
