/**
 * Create by Nhat Do
 * 11/2017**/

 import React, { Component } from "react";
 import { Platform, ActivityIndicator } from "react-native";
 import { NavigationActions } from 'react-navigation';
 
 import { Provider } from "react-redux";
 import getStore from "./src/redux/store";
 import AppWithNavigationState from "./src/config/Routes";
 import * as API from "./src/config/API";
 //import NavigatorService from './src/services/navigation'
 import axios from "axios";
 //v5 redux persist//import { PersistGate } from "redux-persist/es/integration/react";
 
 export let navigatorRef;
 // base API URL
 axios.defaults.baseURL = API.BASE_URL;
 console.log(API.BASE_URL)
 // Configure store redux persist v5
 //const { persistor, store } = getStore();
 const store = getStore() // v4 redux persist
 // const instructions = Platform.select({
 //   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
 //   android:
 //     "Double tap R on your keyboard to reload,\n" +
 //     "Shake or press menu button for dev menu"
 // });
 // v5 redux persist
 //  class App extends React.Component {
 //    componentWillMount() {
 //      console.log(API.BASE_URL);
 //    }
 //    render() {
 //      return (
 //        <Provider store={store}>
 //          <PersistGate
 //            loading={<ActivityIndicator
 //             animating = {true}
 //             color = '#22baa0'
 //             size = "large"
 //             style = {{flex:1,justifyContent: 'center',
 //             alignItems: 'center',
 //             height: 80}}/>}
 //            onBeforeLift={null}
 //            persistor={persistor}
 //          >
 //            <AppWithNavigationState />
 //          </PersistGate>
 //        </Provider>
 //      );
 //    }
 //  }
 class App extends React.Component {
   componentWillMount() {
    
     navigatorRef = this.navigator;
   }
   render() {
     return (
       <Provider store={store}>
 
         <AppWithNavigationState
         />
 
       </Provider>
     );
   }
 }
 
 export default App;
 
 