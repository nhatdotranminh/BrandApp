import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {AsyncStorage} from 'react-native'
import { persistStore} from 'redux-persist';
//v5 redux persist //import storage from 'redux-persist/es/storage';
//v5 reduxpersist//import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
// react navigation ver >1.0.0
import {createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import getRootReducer from "./reducers";

//v5 redux persist
// config persits store
// const config = {
//     key: 'root',
//     version: 1,
//     debug: true,
//     storage,
//    // whitelist:['session'],
//    // stateReconciler: hardSet,
//    // backlist: ['nav']

// }
// redux logger 
const loggerMiddleware = createLogger()
// const middlewareNavigation = createReactNavigationReduxMiddleware(
//     "root",
//     state => state.nav,
//   );
// middleware
const middleware = [thunk, loggerMiddleware]
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// // combie reducers && persits store 
// const configureStore = composeEnhancers(
//     applyMiddleware(...middleware),
// )(createStore)
//v5 redux persist//const combieReducer = persistReducer(config, reducers)

// create store
//  const getStore = () => {
//     let store = configureStore(combieReducer)
       
    
//     let persistor = persistStore(store)
       
//     // persistor.purge();
          
//   // dispatch "store ready" action
//     return { persistor, store };
// }
// export default getStore
export default function getStore() {
    const store = createStore(
        getRootReducer(),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()|| compose,
        applyMiddleware(...middleware)
    );
    // begin periodically persisting the store 
    persistStore(store, {
        storage: AsyncStorage,
        whitelist: ['session']
    });
    return store;
}