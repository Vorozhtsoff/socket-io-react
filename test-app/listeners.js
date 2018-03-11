import { applyListeners } from '../src';

const recieveResponse = payload => ({ type: 'RECIEVE_RESPONSE', payload });

export default applyListeners({
    sendResponse: (data, store) => console.log('responsed data', data) || store.dispatch(recieveResponse(data))
});
