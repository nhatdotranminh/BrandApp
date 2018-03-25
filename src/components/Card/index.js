import React, { Component } from 'react';
import { View, StyleSheet, Text, Text as NativeText, Dimensions, Image, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import Icon from "react-native-vector-icons/MaterialIcons";

deviceScreen = Dimensions.get('window')

export default class Card extends Component {
    state = {}
    render() {
        return (
            <View style={{ height: 130, width: deviceScreen.width }}>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
                    <Image style={{ width: 90, height: 90, borderRadius: 10 }} source={{ uri: this.props.uri }} />
                    <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                        <View style={{ width: deviceScreen.width - 130 }}>
                            <TouchableOpacity onPress={this.props.onPress}>
                                <Text
                                    style={{ fontSize: 14, color:'black' }}
                                    numberOfLines={3}
                                    ellipsizeMode={'tail'}
                                >
                                    {this.props.detail}
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
                            <Icon size={20} name={"access-time"} />
                            <Text style={{ fontSize: 12, opacity: 0.6, marginLeft: 5  }}>{this.props.time}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
Card.propTypes = {
    uri: PropTypes.string,
    detail: PropTypes.string,
    time: PropTypes.string,
    onPress:PropTypes.func
}
const styles = StyleSheet.create({

})