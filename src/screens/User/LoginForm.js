import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableHighlight,
  Alert,
  ActivityIndicator
} from "react-native";
import { NavigationActions } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, ButtonIcon, Input } from "../../components/Form";
//import I18n from "../../languages";
// ========
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import * as sessionActions from "../../actions/userSession";

deviceScreen = Dimensions.get("window");

const TEXT_FONT_SIZE = 14;

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onChangeHandle(type, value) {
    this.props.inputChange({ [type]: value });
  }
  _doLoginFb() {
    // this.props.loginFaceBook()
    alert("open login facebook page")
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.inputContainer}>
          <View style={{ flex: 1 }}>
            <Input
              label={"EMAIL CỦA BẠN"}
              placeholder={"Email"}
              value={this.props.email}
              onChangeText={value => this._onChangeHandle("email", value)}
            // keyboardType={"number-pad"}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 2 }}>
              <Input
                label={"MẬT KHẨU"}
                inputStyle={{
                  width: deviceScreen.width - 150
                }}
                placeholder={"**********"}
                value={this.props.password}
                onChangeText={value => this._onChangeHandle("password", value)}
                entry={true}
                maxLength={20}
              />
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <TouchableOpacity onPress={() => navigate("ForgotPassword")}>
                <Text style={styles.forgotPwText}>
                  {"Quên mật khẩu?"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>

        <View style={styles.buttonContainer}>
          {this.props.isFetching ? (
            <ActivityIndicator
              animating={true}
              color="#22baa0"
              size="small"
              style={styles.activityIndicator}
            />
          ) : (
              <Button title={"Đăng nhập"} onPress={this.props.doLogin} />
            )
          }
        </View>

        <View style={styles.footer}>
          <View style={styles.footerGroup1}>
            <Text style={[styles.textStyle, styles.footertext]}>
              {"BẠN CHƯA CÓ TÀI KHOẢN ?"}
            </Text>
            <TouchableOpacity onPress={()=> navigate("Register")}>
              <Text
                style={[
                  styles.textStyle,
                  styles.footertext,
                  { opacity: 1, marginLeft: 5 }
                ]}
              >
                {"ĐĂNG KÝ NGAY"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerGroup2}>
            <View style={styles.lineStyle} />
            <Text style={[styles.footertext, { fontSize: 10, opacity: 0.6 }]}>
              OR
            </Text>
            <View style={styles.lineStyle} />
          </View>
          <View style={styles.footerGroup3}>
            <View style={{ width: deviceScreen.width / 2 + 60 }}>
              <ButtonIcon
                onPress={this._doLoginFb.bind(this)}
                iconName="facebook"
                title="Đăng nhập bằng facebook"
                color={"white"}
                borderColor={"#3b5998"}
                borderWidth={0.8}
                backgroundColor={"#3b5998"}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  // ===============container
  logoContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },

  inputContainer: {
    flex: 2.5,
    // backgroundColor: "green",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
  },
  footer: {
    flex: 1.5,
    //  backgroundColor:'red'
  },
  buttonContainer: {
    marginLeft: 15,
    marginTop: 20,
    marginRight: 15,
    flex: 1
    // backgroundColor:'black'
  },

  //=========== input Style
  //============
  //||||||||||||
  forgotPwText: {
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 10,
    color: "black",
    opacity: 0.6
  },
  // ===========================
  logo: {
    width: deviceScreen.width / 3 - 20,
    height: deviceScreen.width / 3 - 20
  },
  //============= Footer
  //|||||||||||||||
  footerGroup1: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  footerGroup2: {
    flex: 0.5,
    //  backgroundColor: "gray",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  footerGroup3: {
    flex: 1,
    //  backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  },
  footertext: {
    fontSize: 12,
    opacity: 0.7
  },
  lineStyle: {
    ...Platform.select({
      android: {
        height: 20,
        borderBottomWidth: 0.2,
        width: 100,
        opacity:0.4
      },
      ios: {
        height: 20,
        borderBottomWidth: 0.3,
        width: 100,
        opacity:0.4
      }
    })

  },
  activityIndicator: {
    justifyContent: "center",
    alignItems: "center",
    height: 80
  }
});

