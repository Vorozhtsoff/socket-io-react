import io from 'socket.io-client';
import * as actionTypes from './types';

const socketEmit = socket =>
    (eventName, payload) => socket.emit(eventName, payload);


const reduxSocketMiddleware = socket => (store) => {
    conssole.log('store', store);
    return next => (action) => {
        switch(action.type) {
            case actionTypes.SOCKET_EMIT: {
                socketEmit(socket)(action.eventName, action.payload);
                break;
            }
            case action.SOCKET_CONNECT: {
                socket.connect
            }
        }

        return next(action);
    };
}

export default function createSocketMiddleware(endpoint, config = {}, listeners) {
    const socket = io(endpoint = '/', { autoconnect: false, ...config });

    socket.on('connection', () => {
        listeners(socket);
    });

    return reduxSocketMiddleware(socket);
}