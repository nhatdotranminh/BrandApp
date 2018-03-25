import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import {LogoText} from "../../components/Text"
import { Button, Input } from "../../components/Form";
//import I18n from '../../languages'
const TEXT_FONT_SIZE = 14;
export default class forgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      phonenumber: ""
    };
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={{flex:1, justifyContent:'center'}}>
            <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
            <Text style={{fontSize:24, marginLeft:15}}>X</Text>
            </TouchableOpacity>
           
        </View>
        <View style={styles.labelContainer}>
          <LogoText width={200} content={"QUÊN MẬT KHẨU ?"} />
        </View>
        <View style={styles.inputContainer}>
          <Input
            label={"SỐ ĐIỆN THOẠI CỦA BẠN"}
            placeholder={"Phone Number"}
            value={this.state.phonenumber}
            onChangeText={value => this.setState({ phonenumber: value })}
            maxLength={11}
            keyboardType={"number-pad"}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={()=> navigate("VerifyPhone") } title={"TIẾP TỤC"} />
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
  labelContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },

  inputContainer: { flex: 1.5, margin: 10, marginLeft: 15, marginRight: 15 },
  buttonContainer: {
    flex: 4,
    paddingTop: 20,
    marginRight: 20,
    marginLeft: 20
  },
  /// label style
  textStyle: {
    fontSize: TEXT_FONT_SIZE,
    color: "black"
  },
  
});
