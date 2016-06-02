import React from 'react';
import ReactDOM from 'react-dom';

import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import StyleCreatorApp from './containers/style_creator_app';
import reducers from './reducers';

const reducer = combineReducers({
  routing: routerReducer,
  ...reducers
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(browserHistory))
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/stylecreator/:department" component={StyleCreatorApp} />
    </Router>
  </Provider>,
  document.getElementById('react-root')
);
