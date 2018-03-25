import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../../components/Card'
import Banner from '../../components/Banner'
export default class DealList extends Component {
    _keyExtractor = (item, index) => index.toString()
    constructor(props) {
        super(props);
        //
        this.state = {
            data: [
                {
                    img: "https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg",
                    name: "Shanghai's natural history museum by perkins + will open in china",
                    time: "5:12 pm 6 March 2018"
                },
                {
                    img: "https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg",
                    name: "Shanghai's natural history museum by perkins + will open in china,Shanghai's natural history museum by perkins + will open in china,Shanghai's natural history museum by perkins + will open in china",
                    time: "5:12 pm 6 March 2018"
                },
                {
                    img: "https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg",
                    name: "Shanghai's natural history museum by perkins + will open in china,Shanghai's natural history museum by perkins + will open in china,Shanghai's natural history museum by perkins + will open in china",
                    time: "5:12 pm 6 March 2018"
                },
                {
                    img: "https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg",
                    name: "Shanghai's natural history museum by perkins + will open in china,Shanghai's natural history museum by perkins + will open in china,Shanghai's natural history museum by perkins + will open in china",
                    time: "5:12 pm 6 March 2018"
                },
            ]
        }
    }
    _renderItem(item, index) {
        return (
            <Card onPress={this._onPressItem.bind(this, index)} uri={item.img} detail={item.name} time={item.time} />
        )
    }
    _onPressItem(item) {
        let { data } = this.state
        let targetRow = data[item]
        console.log(targetRow.index)
        this.props.navigation.navigate("DealDetail")
      }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                   <Banner uri={"https://media.giphy.com/media/2FJLQBDAnAUFy/giphy.gif"}/>
                </View>
                <View style={styles.middle}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={this._keyExtractor}
                        renderItem={({ item, index }) => this._renderItem(item, index)}
                    />
                </View>
                <View style={styles.bototm}>
               <Banner uri={'http://tanthanhcontainer.com/wp-content/uploads/2017/03/banner_tet_web.jpg'} bannerStyle={{marginTop:5, marginBottom:13}}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    top: {
        flex: 1,
       
    },
    middle: {
        flex: 2
    },
    bototm: {
        flex: 1.25,
      
    }
})