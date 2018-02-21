import { SOCKET_EMIT, SOCKET_CONNECT } from './types';

export const socketEmit = (eventName, payload) => ({ type: SOCKET_EMIT, eventName, payload });
export const socketConnect = () => ({ type: SOCKET_CONNECT });
