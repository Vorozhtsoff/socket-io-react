import { socketConnect } from '../src';
import configureStore from './configure-store';

const store = configureStore();

console.log(store.dispatch(socketConnect()));
console.log(store.getState());