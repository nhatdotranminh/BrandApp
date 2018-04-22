import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux'
import { Button } from '../../components/Form';
import Card from '../../components/Card'
import Icon from "react-native-vector-icons/MaterialIcons";
import Barcode from 'react-native-barcode-builder';
import * as ConfigApp from '../../utils/ConfigApp';
deviceScreen = Dimensions.get('window')
// =================
class Home extends Component {
    _keyExtractor = (item, index) => index.toString()
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {}
        return {
            title: params.title
        }
    }
    // Set header title
    async _setNavigationParams() {
        const { navigate } = this.props.navigation
        let title = await this.props.auth.company.name
        this.props.navigation.setParams({
            title
        });
    }
    constructor(props) {
        super(props);
        //
        this._setNavigationParams();
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
    componentWillMount(){
        this.props.dispatch({
            type: "ROUTE_HOME"
        })
    }
    _renderItem(item, index) {
        return (
            <Card uri={item.img} detail={item.name} time={item.time}/>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top_container}>
                    <View style={styles.top_child}>
                        <Icon color={ConfigApp.Blue} size={ConfigApp.ICON_SIZE} name={'info'} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.top_child_point}>1,213</Text>
                            <Text style={styles.top_child_text}>{"Điểm"}</Text>
                        </View>
                    </View>
                    <View style={styles.top_child}>
                        <Icon color={ConfigApp.Pink} size={ConfigApp.ICON_SIZE} name={'star-border'} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.top_child_point}>213</Text>
                            <Text style={styles.top_child_text}>{"Sao"}</Text>
                        </View>
                    </View>
                    <View style={styles.top_child}>
                        <Icon color={ConfigApp.Green} size={ConfigApp.ICON_SIZE} name={'card-travel'} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.top_child_point}>13</Text>
                            <Text style={styles.top_child_text}>{"Đơn hàng"}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.barcode_container}>
                    <View style={styles.barcode_form}>
                        <View style={{ marginTop: 10 }}>
                            <Barcode height={70} width={2} value="M12345678910" format="CODE128" />
                        </View>
                        <View>
                            <Text style={{ letterSpacing: 4 }}>{"M12345678910"}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 3.5 }}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={this._keyExtractor}
                        renderItem={({ item, index }) => this._renderItem(item, index)}
                    />
                </View>
                <View style={styles.bottom_container}>
                    <View style={{ marginLeft: 20, marginRight: 20 }}>
                        <Button
                            title={"XEM TẤT CẢ ƯU ĐÃI"}
                            color={ConfigApp.Blue}
                            buttonStyle={styles.button_style}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        //  justifyContent:'center',
        //  alignItems:'center'
    },
    top_container: { flex: 0.75, flexDirection: 'row' },
    top_child: { flex: 1, marginLeft: 10, alignItems: 'center', flexDirection: 'row' },
    top_child_point: { fontSize: 14, letterSpacing: 0.5 },
    top_child_text: { fontSize: 10, opacity: 0.6 },
    barcode_container: { flex: 2.5, backgroundColor: '#4c4949' },
    barcode_form: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 23,
        marginBottom: 23,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        //  justifyContent:'center',
        alignItems: 'center'

    },
    bottom_container: { flex: 1, flexDirection: 'column', justifyContent: 'center' },
    button_style: { backgroundColor: 'transparent', borderWidth: 0.5, borderColor: 'blue' }
})
function mapStateToProps(state) {
    return {
        ...state.session,
        ...state.indicator


    };
}
const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
