import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import ProductsReducer from './products/reducer.js';

// create a store that has redux-thunk middleware enabled
const createStoreWidthMiddleware = applyMiddleware(
    thunk,
    createLogger()
)(createStore);

// Create store with the combinedReducer
const combinedReducers = combineReducers({
    Products: ProductsReducer
});

export default function configureStore() {
    const store = createStoreWidthMiddleware(combinedReducers);
    return store;
}
