// import slide menu screen
import React, { Component } from "react";
import { DrawerNavigator} from "react-navigation";
import Menu from "../screens/Drawer/SlideMenu";
import MainStack from './MainStack'

const drawerStack = DrawerNavigator(
  {
    MainStack: {
      screen: MainStack,
     
    }
  },
  {
    initialRouteName: "MainStack",
    drawerPosition: "Left",
    contentComponent: props => <Menu {...props} />
  }
);

export default drawerStack;
