import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from './session';
import albumReducer from './albums'
import trackReducer from './tracks'
import artistReducer from './artists'


const rootReducer = combineReducers({
  session: sessionReducer,
  albums: albumReducer,
  tracks: trackReducer,
  artists: artistReducer
});



let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger, thunk));
}




const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
