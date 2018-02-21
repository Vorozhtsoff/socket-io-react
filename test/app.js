import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import configureStore from './configure-store';
import { socketConnect } from '../src';


const store = configureStore({});

const mapActionToDispatch = {
    socketConnect
};

@connect(null, mapActionToDispatch)
class Children extends React.Component {
    componentDidMount() {
        this.props.socketConnect();
    }

    render() {
        return null;
    }
}


export default class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <Children />
            </Provider>
        );
    }
}