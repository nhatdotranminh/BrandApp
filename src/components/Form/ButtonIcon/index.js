import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Text as NativeText,Dimensions } from "react-native";
import {
    PRIMARY_COLOR,
    BUTTON_TEXT_COLOR,
    FONT_FAMILY
} from "../../../utils/ConfigApp";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { PropTypes } from "prop-types";
deviceScreen = Dimensions.get("window");
export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "transparent",
            color: BUTTON_TEXT_COLOR
        };
    }
    componentWillMount() {
        if (this.props.backgroundColor == null) {
            this.setState({
                backgroundColor: this.state.backgroundColor
            });
        } else {
            this.setState({
                backgroundColor: this.props.backgroundColor
            });
        }
        if (this.props.color == null) {
            this.setState({
                color: this.state.color
            });
        } else {
            this.setState({
                color: this.props.color
            });
        }
    }
    render() {
        const { buttonStyle } = this.props
        return (
            <TouchableOpacity
                style={[
                    styleButton.container,
                    {
                        backgroundColor: this.state.backgroundColor,
                        borderColor: this.props.borderColor,
                        borderWidth: this.props.borderWidth
                    }, buttonStyle && buttonStyle
                ]}
                onPress={this.props.onPress}
            >
                <Icon
                    style={styleButton.icon}
                    name={this.props.iconName}
                    size={25}
                    color={this.props.color}
                />
                <Text style={[styleButton.text, { color: this.state.color }]}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    marginTop: PropTypes.number,
    width: PropTypes.any,
    flex: PropTypes.number,
    onPress: PropTypes.func,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    title: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    buttonStyle: NativeText.propTypes.style
};

const styleButton = StyleSheet.create({
    container: {
        paddingTop: 9,
        paddingBottom: 13,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 30,
        height:50,
        
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        letterSpacing: -0.4,
        fontFamily: FONT_FAMILY
    },
    icon: {
        marginRight: 5
    }
});
