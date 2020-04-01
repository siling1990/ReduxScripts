import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../Reducers/index';
import {logger} from 'redux-logger';

let middlewares = [
    reduxThunk
];
if (__DEV__) {
    middlewares.push(logger);
}

export default function configureStore(initialState) {
    let store = applyMiddleware(
        ...middlewares
    )(createStore)(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}