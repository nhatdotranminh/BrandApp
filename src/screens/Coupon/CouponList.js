import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class CouponList extends Component {
    _keyExtractor = (item, index) => index.toString();

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    code: "BACASDFWE",
                    date: "3/3/2018"
                },
                {
                    code: "BACASDFWE",
                    date: "3/10/2018"
                },
                {
                    code: "BACASDFWE",
                    date: "3/9/2018"
                },
                {
                    code: "BACASDFWE",
                    date: "3/7/2018"
                },
            ]
        }
    }
    componentWillMount() {

    }
    _renderItem(item, index) {
        var dateEnd = new Date(item.date);
        var date = new Date()
        var check = date.getTime() > dateEnd.getTime()
        return (
            <View style={{ height: 80, borderBottomWidth: 0.5 }}>
                {
                    check === true ? (

                        <View style={{ marginLeft: 15, marginRight: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name={"local-activity"} size={80} color={'gray'} style={{opacity:0.6}} />
                            <View>
                                <Text style={{ fontSize: 18, marginLeft: 5, marginBottom: 5, opacity:0.6 }}>{item.code}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon size={20} name={"access-time"}  style={{opacity:0.6}}/>
                                    <Text style={{ fontSize: 12, marginLeft: 5, color: 'red' }}>{"Đã hết hạn:"}</Text>
                                    <Text style={{ fontSize: 12, marginLeft: 5, color: 'red' }}>{item.date}</Text>
                                </View>
                            </View>


                        </View>
                    ) : (

                            <View style={{ marginLeft: 15, marginRight: 15, flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name={"local-activity"} size={80} color={'green'} />
                                <View>
                                    <Text style={{ fontSize: 18, marginLeft: 5, marginBottom: 5 }}>{item.code}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon size={20} name={"access-time"} />
                                        <Text style={{ fontSize: 12, marginLeft: 5 }}>{"Ngày hết hạn:"}</Text>
                                        <Text style={{ fontSize: 12, marginLeft: 5 }}>{item.date}</Text>
                                    </View>
                                </View>
                            </View>


                        )
                }
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item, index }) => this._renderItem(item, index)}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    }
})