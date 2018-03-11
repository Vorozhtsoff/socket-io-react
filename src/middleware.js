import io from 'socket.io-client';
import { isNill } from './helpers';
import { SOCKET_EMIT } from './types';


function socketEmit(socket, { eventName, payload }) {
    if (isNill(eventName) || isNill(payload)) {
        return null;
    }

    return socket.emit(eventName, payload);
}


const reduxSocketMiddleware = (socket, listeners) => (store) => {
    socket.on('connect', listeners(socket, store));

    return next => (action) => {
        if (action.type === SOCKET_EMIT) {
            socketEmit(socket, action);
        }

        return next(action);
    };
};

export default function createSocketMiddleware(endpoint = '/', config = {}, listeners) {
    const socket = io(endpoint, config);

    return reduxSocketMiddleware(socket, listeners);
}
