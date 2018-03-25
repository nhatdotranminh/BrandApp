import { NavigationActions } from 'react-navigation';
import {AppNavigator}  from '../../config/Routes';
const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());
const navReducer = (state = initialState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};
export default navReducer