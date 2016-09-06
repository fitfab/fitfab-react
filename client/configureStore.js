import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import ProductsReducer from './products/reducer.js';

console.log(ProductsReducer)
// create a store that has redux-thunk middleware enabled
const createStoreWidthMiddleware = applyMiddleware(
    thunk,
    createLogger()
)(createStore);

// Create store with the combinedReducer
// Note: recently add the routeReducer from
// redux-simple-router
const combinedReducers = combineReducers({
    Product: ProductsReducer
});

export default function configureStore() {
    const store = createStoreWidthMiddleware(combinedReducers);
    console.log(store);
    return store;
}
