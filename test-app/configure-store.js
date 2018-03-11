/* eslint-disable */
import io from 'socket.io-client';
import { createStore, compose, applyMiddleware } from 'redux';
import { createSocketMiddleware } from '../src';

import listeners from './listeners';


export default function configureStore(initState = {}) {
    const EXT_NAME = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';

    const composeEnhancers = global[EXT_NAME] ? global[EXT_NAME]({}) : compose;

    const store = createStore(
        () => ({}),
        initState,
        composeEnhancers(applyMiddleware(createSocketMiddleware(io('//localhost:3000/'), listeners)))
    );

    return store;
}
