import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text, Platform, Dimensions, Text as NativeText } from "react-native";
import {
  PRIMARY_COLOR,
  TEXT_COLOR,
  FONT_FAMILY,
  FONT_SIZE
} from "../../../utils/ConfigApp";
import { TextFont } from '../../Text'

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const { width, height } = Dimensions.get('window')

import { PropTypes } from "prop-types";

export default class Input extends Component {
  render() {
    const { inputStyle } = this.props
    return (
      <View style={InputStyles.container}>
        <View style={InputStyles.formLabel}>

          <TextFont textStyle={{ letterSpacing: 0.4, opacity: 0.6 }} content={this.props.label} />
        </View>
        <View style={InputStyles.formInput}>
          <TextInput
            placeholder={this.props.placeholder}
            style={[
              InputStyles.input,
              { fontSize: 14 },
              inputStyle && inputStyle,
            ]}
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            autoFocus={false}
            disableFullscreenUI={true}
            secureTextEntry={this.props.entry}
            numberOfLines={this.props.numberOfLines}
            underlineColorAndroid={"transparent"}
            multiline={this.props.multiline}
            maxLength={this.props.maxLength}
            keyboardType={this.props.keyboardType}
          />
        </View>
      </View>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  entry: PropTypes.bool,
  label: PropTypes.string,
  inputStyle: NativeText.propTypes.style,
  maxLength: PropTypes.number,
  keyboardType: PropTypes.string,
  numberOfLines: PropTypes.number,
  multiline: PropTypes.bool

};

const InputStyles = StyleSheet.create({
  input: {
    ...Platform.select({
        android: {
          minHeight: 46,
          width: width - 30,
          borderBottomWidth:0.2,
        },
        ios: {
          minHeight: 36,
          width: width-30,
          borderBottomWidth:0.3,
        },
      }),
   
  },
  container: {
    flex: 1,
    marginBottom: 5

  },
  formLabel: {
    flex: 0.5, marginBottom: 10
  },
  formInput: { flex: 2 },
  label: {
    opacity: 0.5,
    letterSpacing: 0.4,
    fontSize: FONT_SIZE,
    fontFamily: FONT_FAMILY,
    color: TEXT_COLOR
  }
});
