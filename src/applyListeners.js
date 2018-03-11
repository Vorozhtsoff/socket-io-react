import { isObject, isFunc } from './helpers';
import { warn } from './logger';


const applyListeners = listeners => (socket, store) => () => {
    if (!isObject(listeners)) {
        return warn('listeners must be a object, when key is listener name and value is function');
    }

    return Object.entries(listeners).forEach(([listenerName, fn]) => {
        if (!isFunc(fn)) {
            return warn(`${listenerName} value is not a faction`);
        }

        return socket.on(listenerName, fn(store));
    });
};

export default applyListeners;
