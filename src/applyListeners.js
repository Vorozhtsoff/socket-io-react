const applyListeners = listeners => (socket, store) => () => {
    Object.entries(listeners).forEach(([listenerName, fn]) => socket.on(listenerName, fn(store)));
};

export default applyListeners;
