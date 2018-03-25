import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native";
import { Button, Input } from "../../components/Form";
//import I18n from "../../languages";
import { LogoText } from "../../components/Text";

const TEXT_FONT_SIZE = 14;
export default class setPassword extends Component {
    constructor() {
        super();
        this.state = {
            newpassword: "",
            verifypassword: ""
        };
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text style={{ fontSize: 24, marginLeft: 15 }}>X</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.logoLabelContainer}>
                    <LogoText width={250} content={"CÀI ĐẶT MẬT KHẨU CHO TÀI KHOẢN"} />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        label={"MẬT KHẨU MỚI"}
                        placeholder={"***********"}
                        style={styles.inputStyle}
                        value={this.state.newpassword}
                        onChangeText={value => this.setState({ newpassword: value })}
                        secureTextEntry={true}
                        maxLength={16}
                        numberOfLines={1}
                    />
                    <View style={{ paddingTop: 5, paddingBottom: 5 }} />
                    <Input
                        label={"NHẬP LẠI MẬT KHẨU"}
                        placeholder={"***********"}
                        value={this.state.verifypassword}
                        onChangeText={value => this.setState({ verifypassword: value })}
                        secureTextEntry={true}
                        maxLength={16}
                        numberOfLines={1}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this.props.navigation.navigate("ogin")} title={"LUƯ MẬT KHẨU"} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    logoLabelContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    inputContainer: { flex: 2, marginLeft: 15 },
    buttonContainer: {
        flex: 4,
        paddingTop: 20,
        marginRight: 20,
        marginLeft: 20
    },
    // CONTAINER
    // ==================
    //|||||||||||||||||||
    //======================

});
