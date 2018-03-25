import React, { Component } from 'react';
import { View, StyleSheet, Text, Text as NativeText, Dimensions, Image,Animated } from 'react-native';
import { PropTypes } from 'prop-types';
import Icon from "react-native-vector-icons/MaterialIcons";

deviceScreen = Dimensions.get('window')

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            imageOpacity: new Animated.Value(0.0),
            placeholderOpacity: new Animated.Value(1.0),
            placeholderScale: new Animated.Value(1.0)
        }
    }
    render() {
        const { bannerStyle } = this.props
        return (
            <Image
                onLoad={(e) => this.setState({ loading: true })}
                onError={(e) => this.setState({ loading: false })}
                onLoadStart={(e) => this.setState({ loading: false })}
              //  resizeMode={Image.resizeMode.cover}
                source={{ uri: this.props.uri }}
                style={[styles.container, bannerStyle && bannerStyle]}
            />

        );
    }
}
Banner.propTypes = {
    uri: PropTypes.string,
    bannerStyle: NativeText.propTypes.style
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 9,
        marginBottom: 5,
        // backgroundColor: "red",
        resizeMode: Image.resizeMode.cover
    }
})