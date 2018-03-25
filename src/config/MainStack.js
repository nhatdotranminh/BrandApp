
//|||||||||||||||||||||||||
// import flow Dang ki dang nhap
//|||||||||||||||||||||||||
//=========================
import Header from '../components/Header'

// import MainTab
import Home from "../screens/Home/Home";
import DealList from "../screens/Deal/DealListing";
import DealDetail from "../screens/Deal/DealDetail";

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator,} from 'react-navigation';
// import Icon từ lib react-native-vector/ dùng bộ MaterialIcons
import Icon from "react-native-vector-icons/MaterialIcons";
import {handleResetNavigation} from './NavigationHelp'
import CouponList from '../screens/Coupon/CouponList';
import CouponDetail from '../screens/Coupon/CouponDetail';



const mainNav = StackNavigator({
    Home: {
        screen: Home,
        
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Header onPress={() => navigation.navigate("DrawerOpen")} iconName={"menu"} />,
        })
    },
    DealList:{
        screen:DealList,
       
        navigationOptions:({navigation}) => ({
            headerLeft:<Header onPress={handleResetNavigation(navigation,'Home')} iconName={"navigate-before"} />,
            title:"Ưu đãi",
        })
    },
    DealDetail:{
        screen:DealDetail,
        navigationOptions:({navigation}) => ({
            headerLeft:<Header onPress={()=> navigation.goBack()} iconName={"navigate-before"} />,
            title:"Thông tin ưu đãi",
        })
    },
    CouponList:{
        screen:CouponList,
        navigationOptions:({navigation}) => ({
            headerLeft:<Header onPress={()=> navigation.goBack()} iconName={"navigate-before"} />,
            title:"Coupon",
        })
    },
    CouponDetail:{
        screen:CouponDetail,
        navigationOptions:({navigation}) => ({
            headerLeft:<Header onPress={()=> navigation.goBack()} iconName={"navigate-before"} />,
            title:"Chi tiết coupon",
        })
    }


   
}, {
    // transitor
        mode: 'card',
        navigationOptions: params => ({
            gesturesEnabled: true,
            gesturesDirection: 'inverted',
        }),
        transitionConfig: () => ({
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;
                const width = layout.initWidth;

                return {
                    opacity: position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0, 1, 0],
                    }),
                    transform: [{
                        translateX: position.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [-width, 0, width],
                        }),
                    }]
                };
            },
            headerTitleInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                return {
                    opacity: position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0, 1, 0],
                    }),
                    transform: [{
                        translateX: position.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [-50, 0, 50],
                        }),
                    }]
                };
            },
        }),
    }

)
export default mainNav;