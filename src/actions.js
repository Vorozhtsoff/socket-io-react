import { SOCKET_EMIT } from './types';

export const emit = (eventName, payload) => ({ type: SOCKET_EMIT, eventName, payload });
