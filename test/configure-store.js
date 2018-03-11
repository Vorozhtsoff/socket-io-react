import { createStore, compose, applyMiddleware } from 'redux';
import { createSocketMiddleware } from '../src';

import reducers from './reducers';
import listeners from './listeners';


export default function configureStore(initState = {}) {
    const EXT = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';

    const composeEnhancers = global[EXT] ? global[EXT]({}) : compose;

    const store = createStore(
        reducers,
        initState,
        composeEnhancers(applyMiddleware(createSocketMiddleware('//localhost:3000/', null, listeners)))
    );

    return store;
}
