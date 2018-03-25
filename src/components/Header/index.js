import React, { Component } from 'react';
import { View, TouchableOpacity,StyleSheet, Text as NaviteText } from 'react-native';
import {ICON_HEADER_SIZE} from "../../utils/ConfigApp";
import Icon from "react-native-vector-icons/MaterialIcons";
import { PropTypes } from "prop-types";



export default class Header extends Component {
    state = {  }
    render() {
        return (
            <View style={{}}>
              <TouchableOpacity
                onPress={this.props.onPress}>
                <Icon size={ICON_HEADER_SIZE} style={{ margin: 10 }} name={this.props.iconName} />
              </TouchableOpacity>
            </View>
          )
    }
}
Header.propTypes={
    onPress: PropTypes.func,
    iconName:PropTypes.string
};
const styles = StyleSheet.create({
    
})