import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import createLogger from 'redux-logger';
import persistState from 'redux-localstorage';
import reducer from './reducer';

const middlewares = [];


if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    stateTransformer: state => JSON.parse(JSON.stringify(state)),
  });
  middlewares.push(logger);
}

// Store to localStorage
const createPersistentStore = compose(
  persistState()
)(createStore);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createPersistentStore);

export default function configureStore(initialState) {
  const rootReducer = combineReducers({
    notesApp: reducer,
  });
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
