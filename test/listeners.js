import { applyListeners } from '../src';

export default applyListeners({
    sendResponse: () => data => console.log('responsed data', data)
});
