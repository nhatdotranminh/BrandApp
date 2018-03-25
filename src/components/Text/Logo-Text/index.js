import React, { Component} from 'react';
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';
import {TEXT_COLOR,LOGO_TEXT_FONTSIZE} from '../../../utils/ConfigApp';
import {PropTypes} from 'prop-types'

export default class LogoText extends Component{
    render(){
        return <Text numberoflines={3} style={[LogoStyles.text,{width:this.props.width}]}>{this.props.content}</Text>
    }
}
LogoText.propTypes = {
    marginTop: PropTypes.number,
    content: PropTypes.string,
    color:PropTypes.string,
    width:PropTypes.number
   
}
const LogoStyles = StyleSheet.create({
    text: {
        fontSize: LOGO_TEXT_FONTSIZE,
        textAlign: "center",
        letterSpacing: 6,
       
        color:TEXT_COLOR
      },
})