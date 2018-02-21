/* eslint-disable global-require */
import { createStore, compose, applyMiddleware } from 'redux';
import { createSocketMiddleware } from '../src';

import reducers from './reducers';

export default function configureStore(initState = {}) {

    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? // eslint-disable-line no-underscore-dangle
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;  // eslint-disable-line no-underscore-dangle

    const store = createStore(
        reducers,
        initState,
        composeEnhancers(),
        applyMiddleware(
            createSocketMiddleware('//localhost:3000/', null, (...args) => console.log(args))
        )

    );

    return store;
}
