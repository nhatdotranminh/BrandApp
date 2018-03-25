import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import { LogoText } from "../../components/Text";
import { Input, Button } from "../../components/Form";
//import I18n from '../../languages'

const TEXT_FONT_SIZE = 14;
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            phonenumber: "",
            email: "",
            password: ""
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text style={{ fontSize: 24, marginLeft: 15 }}>X</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.logoLabelContainer}>
                    <LogoText content={"TẠO TÀI KHOẢN"} />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        label={"TÊN CỦA BẠN"}
                        placeholder={"Họ và tên "}
                        value={this.state.fullname}
                        onChangeText={value => this.setState({ fullname: value })}
                    />

                    <Input
                        label={"ĐIỆN THOẠI CỦA BẠN"}
                        placeholder={"Số điện thoại"}
                        value={this.state.phonenumber}
                        onChangeText={value => this.setState({ phonenumber: value })}
                    />

                    <Input
                        label={"EMAIL CỦA BẠN"}
                        placeholder={"Email"}
                        value={this.state.email}
                        onChangeText={value => this.setState({ email: value })}
                    />

                    <Input
                        label={"MẬT KHẨU"}
                        placeholder={"***************"}
                        value={this.state.password}
                        onChangeText={value => this.setState({ password: value })}
                        entry={true}
                        maxLenght={20}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={"ĐĂNG KÝ"}
                        onPress={() => this.props.navigation.navigate("Login")}
                    />
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
    logoLabelContainer: {
        flex: 1.5,
        justifyContent: "center",
        alignSelf: "center",
        marginLeft: 90,
        marginRight: 90,
        paddingTop: 20
    },

    inputContainer: {
        flex: 4.5,
        marginLeft: 15,
        marginRight: 15
    },

    buttonContainer: {
        flex: 1,
        marginRight: 15,
        marginLeft: 15
    }
});
