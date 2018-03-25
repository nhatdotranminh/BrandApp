import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { ICON_SIZE } from '../../utils/ConfigApp';
import ReadMore from 'react-native-read-more-text';

deviceScreen = Dimensions.get('window')
export default class DealDetail extends Component {
    state = {}


    _handleTextReady = () => {
        console.log('ready!');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image style={{ flex: 1 }} />
                </View>
                <View style={styles.middle}>

                    <View style={{ flex: 0.2, flexDirection: 'row', marginLeft: 15, marginRight: 15, marginTop: 10 }}>
                        <Icon name={"info"} size={15} />
                        <Text style={{ fontSize: 12, opacity: 0.6, marginLeft: 5 }}>{"11:10am 23 March 2015"}</Text>

                    </View>
                    <View style={{ flex: 0.75, marginLeft: 15, marginRight: 15 }}>
                        <Text style={{ marginTop: 15, fontSize: deviceScreen.width/22 }}>
                            {"5 ABC DEFGHI  ABC DEFGHI "}
                        </Text>
                    </View>

                    <View style={{ flex: 3, marginLeft: 15, marginRight: 15 }}>
                        <Text
                            adjustsFontSizeToFit={true}
                            style={[styles.textStyle, {color:'black'}]}>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

                        </Text>

                    </View>




                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottom_item}>
                        <Text adjustsFontSizeToFit={true}
                            style={styles.textStyle}>{"Nơi áp dụng: Tất cả cửa hàng"}</Text>
                    </View>

                    <View style={styles.bottom_item}>
                        <Text
                            adjustsFontSizeToFit={true}
                            style={styles.textStyle}>{"Thời gian áp dụng từ: 10/12/2017 - 20/3/2018"}</Text>
                    </View>
                    <View style={{ flex: 0.5 }}></View>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    top: {
        flex: 2,
        backgroundColor: 'red'
    },
    middle: {
        flex: 3,

    },
    bottom: {
        flex: 0.75,
        backgroundColor: 'purple',
        justifyContent: 'center'
    },
    bottom_item:{ flex: 1, justifyContent: 'center', marginLeft: 15 },
    textStyle: {
        textAlignVertical: "center",
        textAlign: "left",
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white',

    }
})