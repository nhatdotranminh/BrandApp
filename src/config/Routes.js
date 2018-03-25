
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';

// import Icon từ lib react-native-vector/ dùng bộ MaterialIcons
import Icon from "react-native-vector-icons/MaterialIcons";
 import drawerStack from './Drawer'
// import profileScr from "../screens/Users/profile";
import forgotPasswordScr from "../screens/User/ForgotPassword";
import loginScr from "../screens/User/LoginContainer";
import registerScr from "../screens/User/Register"
import setpasswordScr from "../screens/User/SetPassword"
import verifyphoneScr from "../screens/User/VerifyPhone"
// import logoutScr from "../screens/Users/logoutContainer"
import axios from 'axios'
//
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';
// React navigation ver >1.0.0 addListener config ,
//
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

// ==============================================================================
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ==============================================================================
export const AppNavigator = StackNavigator(
  {
    Login: {
      screen: loginScr,
      navigationOptions: {
        header: false
      }
    },
    ForgotPassword:{
      screen: forgotPasswordScr,
      navigationOptions:{
        header:false
      }
    },
    Register:{
      screen: registerScr,
      navigationOptions:{
        header:false
      }
    },
    SetPassword:{
      screen:setpasswordScr,
      navigationOptions:{
        header:false
      }
    },
    VerifyPhone:{
      screen:verifyphoneScr,
      navigationOptions:{
        header:false
      }
    },
    Drawer: {
      screen: drawerStack,
       navigationOptions:{
       header:false
     }
    },

  }

);
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

class AppWithNavigationState extends React.Component {
  componentDidMount() {
    const { dispatch, nav } = this.props;
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    axios.interceptors.response.use(null, function (err) {
      //JWT Blacklisted
      if (err.response.status === 400) {
        //If not in logout, redirect to Logout ^^!
        if (err.response.request._url.indexOf('logout') === -1) {
          const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Logout' }),

            ]
          })
          dispatch(resetAction)
          return Promise.reject(err)
          return Promise.reject(err);
        }
      }
      //Authorized required
      if (err.response.status === 401) {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Login' }),

          ]
        })
        dispatch(resetAction)
        return Promise.reject(err);
      }
    });
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackButtonPressAndroid = () => {
    if (this.isSelectionModeEnabled()) {
      this.disableSelectionMode();
      return true;
    } else {
      return false;
    }
  };
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener
      })} />
    );
  }
}
const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);