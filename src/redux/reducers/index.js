import {combineReducers} from 'redux';
import navReducer from './navigator';
 import indicator from './indicator';
 import userSession from './userSession';
// import shipperSession from './shippingRoutes';
// import shippingRoutesStop from './shippingRoutesStop'
// import shipperMovingLog from './shipperMovingLog'
// import fileUpload from './fileUpload'
// export default function getRootReducer(navReducer){
//     return combineReducers({
//         nav: navReducer
//     })
// }
//const initialReducer = (state = [], action) => return state
// v4 redux persist
function getRootReducer(){
  return combineReducers({
    nav:navReducer,
    indicator:indicator,
    session : userSession,
    //  shipperSession: shipperSession,
    //  shippingRoutesStop:shippingRoutesStop,
    //  shipperMovingLog: shipperMovingLog,
    //  fileUpload:fileUpload
    
  });
}

export default getRootReducer