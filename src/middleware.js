const ReduxSocketMiddleware = store => next => (action) => {

    return next(action);
};

export default ReduxSocketMiddleware;