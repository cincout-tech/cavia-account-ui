import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import baseReducer from '../reducers';

import DevTools from '../containers/DevTools';

const loggerMiddleware = createLogger();

const devEnhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ),
    DevTools.instrument()
);

const proEnhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default function configureStore(preloadedState) {
    var mode = process.env.NODE_ENV;
    console.log(mode);
    var enhancer = mode == "development" ? devEnhancer : proEnhancer;
  return createStore(
      baseReducer,
      preloadedState,
      proEnhancer
  );
}
