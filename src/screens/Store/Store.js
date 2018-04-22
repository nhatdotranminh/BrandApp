import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Platform } from "react-native";
import MapView from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { mapStyle } from '../../utils/Mapstyle';
import Icon from "react-native-vector-icons/MaterialIcons";

deviceScreen = Dimensions.get('window')

export default class Store extends Component {
    _keyExtractor = (item, index) => index.toString();

    constructor(props) {
        super(props)
        this.state = {
            flex: 0,
            data: [
                {
                    title: "something"
                },
                {
                    title: "something"
                },
                {
                    title: "something"
                },
                {
                    title: "something"
                },

            ]
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({ flex: 1 }), 100);
        navigator.geolocation.getCurrentPosition(
            position => {
            //   this.setState({
            //     region: {
            //       latitude: position.coords.latitude,
            //       longitude: position.coords.longitude,
            //       latitudeDelta: LATITUDE_DELTA,
            //       longitudeDelta: LONGITUDE_DELTA,
            //     }
            //   });
            console.log("Lat"+position.coords.latitude, "Long"+position.coords.longitude )
            },
          (error) => console.log(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
          );
          this.watchID = navigator.geolocation.watchPosition(
            position => {
            //   this.setState({
            //     region: {
            //       latitude: position.coords.latitude,
            //       longitude: position.coords.longitude,
            //       latitudeDelta: LATITUDE_DELTA,
            //       longitudeDelta: LONGITUDE_DELTA,
            //     }
            //   });
            console.log(position.coords.latitude)
            }
          );
    }
    _renderItem(item) {
        return (
            <View style={styles.card}>
                <View style={{ flex: 3, borderBottomWidth: 0.2, backgroundColor: 'gray',  borderRadius: 5, }}>
                </View>
                <View style={{ flex: 2 }}>
                    <View style={{ marginLeft: 10, marginTop: 10 }}>
                        <Text style={{fontSize:12}}>{item.title}</Text>
                        <Text style={{fontSize:12}}>{"Phuong 12 Quan BT"}</Text>
                    </View>
                    <View style={{marginLeft:10, marginTop:5, flexDirection:"row"}}>
                        <Icon name={"near-me"} color={'gray'}/>
                    </View>

                </View>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mapView}>
                    <MapView
                        ref="map"
                        style={{ flex: this.state.flex }}
                        showsUserLocation={true}
                        followsUserLocation={true}
                        scrollEnabled={true}
                        showsMyLocationButton={true}
                        showsPointsOfInterest={false}
                        showsScale={false}
                        showsTraffic={false}
                        toolbarEnabled={false}
                        zoomEnabled={true}
                        loadingEnabled={true}
                        customMapStyle={mapStyle}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                    </MapView>
                </View>
                <View style={styles.storeView}>
                    <FlatList
                        style={{ flex: 1 }}
                        extraData={this.state.data}
                        horizontal={true}
                        data={this.state.data}
                        keyExtractor={this._keyExtractor}
                        renderItem={({ item, index }) => this._renderItem(item, index)}

                    />
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfcfc',

    },
    mapView: {
        flex: 3,
        backgroundColor: 'red'
    },
    map: {
        flex: 1
    },
    storeView: {
        height: deviceScreen.height * 1 / 3,
        backgroundColor: "#fcfcfc"
    },
    card: {
        width: 150,
         paddingTop: 5,
         paddingLeft: 5,
        // paddingBottom: 5,
         paddingRight: 5,
        //  borderWidth: 1,
        margin: 5,
        marginBottom: 10,
        marginLeft: 5,
        borderRadius: 5,
        ...Platform.select({
            android: {
                elevation: 2
            }
        })
    }
})