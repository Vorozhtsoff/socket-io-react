import { applyListeners } from '../src';

export default applyListeners({
    sendResponse: (data, store) => console.log('responsed data', data, store)
});
