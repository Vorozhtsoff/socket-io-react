/* eslint-disable no-console */
import { socketEmit } from '../src';
import configureStore from './configure-store';

const store = configureStore();

setInterval(() => {
    console.log('sendData');
    store.dispatch(socketEmit('sendData', { value: Math.random() * 100 }));
}, 2000);
