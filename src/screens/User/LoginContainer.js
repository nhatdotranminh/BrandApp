import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Dimensions ,KeyboardAvoidingView, TouchableOpacity,Alert} from "react-native";
import { Button, Input } from "../../components/Form";
import { NavigationActions } from 'react-navigation';

import { connect } from "react-redux";
import axios from "axios";

import * as sessionActions from "../../actions/userSession";
import Login from './Login'


class LoginScreen extends Component {
    doLogin() {
        let {email, password, screenname} = this.props;
        
        this.props.loginRequest({
            email: email,
            password: password,
            screenname: screenname
        });
        console.log("...Login")
        
        
    }
    
    doRegister() {
        console.log('do register');
        //Todo: open browser with url to register page
    }
    
    goToHome() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName:'Drawer'})]
        });

        this
            .props
            .navigation
            .dispatch(resetAction)
    }

    checkGoHome() {
       
        if (this.props.auth.jwt !== null && this.props.auth.jwt.length > 0) {
            //store authorization header
            axios.defaults.headers.common['Authorization'] = this.props.auth.jwt;
            this.goToHome();
        }
    }
    componentDidUpdate() {
        this.checkGoHome();
        if (this.props.errors.hasOwnProperty('server_errors') && this.props.errors.server_errors.length > 0) {
            Alert.alert(
                'Lỗi đăng nhập',
                'Tài khoản không hợp lệ',
                [
                  {text: 'Đóng', onPress: () => this.props.loginDismissError()},
                ],
                { cancelable: false }
            )
        }
    }
    componentDidMount() {
       this.checkGoHome();
    }

    render() {
        return (
            <Login
            {...this.props}
            doLogin={this.doLogin.bind(this)}
            doRegister={this.doRegister.bind(this)}
        />
        );
    }
    
}
const mapStateToProps = ({ session }) => ({
    ...session
  });
  const mapDispatchToProps = dispatch => ({
    inputChange: change => dispatch(sessionActions.loginInputChange(change)),
    loginRequest: loginData => dispatch(sessionActions.loginRequest(loginData)),
    loginDismissError: () => dispatch(sessionActions.loginDismissError()),
   
  });
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);