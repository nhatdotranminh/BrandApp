import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Text as NativeText } from 'react-native';
import { PRIMARY_COLOR, BUTTON_TEXT_COLOR, FONT_FAMILY } from '../../../utils/ConfigApp';

import { PropTypes } from 'prop-types'

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {

            color: BUTTON_TEXT_COLOR
        }
    }
    componentWillMount() {

        if (this.props.color == null) {
            this.setState({
                color: this.state.color
            })
        } else {
            this.setState({
                color: this.props.color
            })
        }
    }
    render() {
        const { buttonStyle } = this.props
        return <TouchableOpacity style={[styleButton.container, buttonStyle && buttonStyle]} onPress={this.props.onPress}>
            <Text style={[styleButton.text, { color: this.state.color }]}>{this.props.title}</Text>
        </TouchableOpacity>

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

}

const styleButton = StyleSheet.create({
    container: {
        paddingTop: 9,
        paddingBottom: 13,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 30,
        height: 50,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: PRIMARY_COLOR,

    },
    text: {
        fontSize: 14,
        textAlign: "center",
        letterSpacing: -0.4,
        fontWeight: "400",
        fontFamily: FONT_FAMILY

    }
})