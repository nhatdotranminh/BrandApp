import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Dimensions, KeyboardAvoidingView, TouchableOpacity, Alert } from "react-native";

import LoginForm from './LoginForm';
import LoginSelectCompany from './LoginSelectCompany'

//========================================
const deviceScreen = Dimensions.get("window");


//==========================================
export default class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../asset/Logo/logo.png")}
          />
        </View>
        <View
          style={{ flex: 2 }}>

          {this.props.companylist.length == 0 ? (
            <LoginForm {...this.props} />
          ) : (
              <LoginSelectCompany {...this.props} />
            )}
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logoContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  
  },

  logo: {
    width: deviceScreen.width / 3 - 20,
    height: deviceScreen.width / 3 - 20
  },
});

