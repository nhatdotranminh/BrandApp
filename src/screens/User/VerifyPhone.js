import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput
} from "react-native";
const TEXT_FONT_SIZE = 14;
const deviceScreen = Dimensions.get("window");
import { Button, Input } from "../../components/Form";
//import I18n from "../../languages";

export default class verifyPhone extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={{flex:1, alignItems:'center',flexDirection:'row'}}>
      <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
      <Text style={{fontSize:24, marginLeft:15}}>X</Text>
      </TouchableOpacity>
        <Text style={{fontSize:14, marginLeft:70}}>{"Nhập mã xác nhận"}</Text>
     
  </View>
        <View style={{ flex: 1 , alignItems:'center',}}>
          <View style={styles.inputGroup}>
            <View style={{ flex: 0.5 }}>
              <Text style={[styles.textStyle, styles.inputLabel]}>
               {"Nhập mã xác nhận mà hệ thống đã gửi tới số"} +84973837105
              </Text>
            </View>
            <View style={{ flex: 0.5}}>
              <TextInput
                placeholder={"******"}
                style={styles.inputStyle}
                value={this.state.password}
                onChangeText={value => this.setState({ password: value })}
                disableFullscreenUI={true}
                numberOfLines={1}
                autoFocus={true}
                secureTextEntry={false}
                underlineColorAndroid={"transparent"}
                keyboardType={"numeric"}
                maxLength={6}
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 4, alignItems: "center", marginTop: 20 }}>
          <View style={{ width: deviceScreen.width / 2 + 40 }}>
            <Button onPress={() => this.props.navigation.navigate("SetPassword")} title={"XÁC NHẬN"}/>
            <View style={{marginTop:10, justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.textStyle}>{"Không nhận được mã?"} - </Text>
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
  
  ////
  inputGroup: {
    marginLeft:15,
    marginRight:15,
    flex: 1,
    borderBottomWidth: 0.2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: deviceScreen.width - 35
  },
  inputLabel: {
    opacity: 0.5,
    fontSize: TEXT_FONT_SIZE,
    letterSpacing: 0.4,
    marginTop: 15,
    textAlign: "center"
  },
  inputStyle: {
    height:40,
    paddingBottom: 10,
    width:100
  },
  ///
  textStyle: {
      fontSize:14
  }
});
