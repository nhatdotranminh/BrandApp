import React, {Component} from 'react';
import {Text,Text as NativeText} from 'react-native';

import {TEXT_COLOR, FONT_SIZE, FONT_FAMILY} from '../../../utils/ConfigApp';
import {PropTypes} from 'prop-types'

export default class TextFont extends Component {
    render() {
       const{textStyle} = this.props
        return <Text {...this.props} numberOfLines={this.props.numberOfLines} multiline={this.props.multiline} style={[textStyle && textStyle]} >
            {this.props.content}
        </Text>
    }
}

TextFont.defaultProps = {
    fontFamily: FONT_FAMILY,
    fontWeight: '400',
    fontSize: 14,
    color: TEXT_COLOR,
    
}

TextFont.propTypes = {
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.number,
    marginTop: PropTypes.number,
    color: PropTypes.string,
    content:PropTypes.string,
    opacity:PropTypes.number,
    multiline: PropTypes.bool,
    numberOfLines:PropTypes.number,
    textStyle:NativeText.propTypes.style
}

