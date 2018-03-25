import React, { Component } from "react";
import {
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import { connect } from "react-redux";
import { PRIMARY_COLOR,TEAMCROP_COLOR } from "../../utils/ConfigApp";
import { NavigationActions } from 'react-navigation';

import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from "../../components/Form";
import styles from './types'


class SlideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
    componentWillMount() {
        console.log("[ROUTENAME]" + this.props.routeName)
        this.setStyleInidcator("Home")
        this.setIconcolor("Home")

    }
    async componentDidUpdate(nextProps) {
        const { routeName } = await nextProps
        if (routeName === "Home") {
            this.setStyleInidcator("Home")
            this.setIconcolor("Home")
        }
        if (routeName === "DealList") {
            this.setStyleInidcator("DealList")
            this.setIconcolor("DealList")
        }
        if (routeName === "CouponList") {
            this.setStyleInidcator("CouponList")
            this.setIconcolor("CouponList")
        }
        if (routeName === "Store") {
            this.setStyleInidcator("Store")
            this.setIconcolor("Store")
        }
        if (routeName === "Notification") {
            this.setStyleInidcator("Notification")
            this.setIconcolor("Notification")
        }
    }

    setStyleInidcator(route) {
        const { routeName } = this.props;
        if (route === routeName) {
            return [styles.tabNavigateGroup, { borderColor: TEAMCROP_COLOR }];
        }
        return styles.tabNavigateGroup;
    }
    setIconcolor(route) {
        let color = "black";
        const { routeName } = this.props;
        if (route === routeName) {
            color = TEAMCROP_COLOR;
            return color;
        }
        return color;
    }

    setRoutes(actionType) {
        const { navigate } = this.props.navigation;

        this.props.dispatch({
            type: actionType
        });

        setTimeout(() => {
            if (this.props.routeName === "Home") {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Home' })]
                });

                this
                    .props
                    .navigation
                    .dispatch(resetAction)
            } else {
                navigate(this.props.routeName);
            }

        }, 50);
    }



    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.userinfoContainer}>
                    <TouchableOpacity
                        style={styles.userInfoGroup}
                        onPress={() => navigate("Profile")}
                    >
                        <Image
                            style={styles.avatarStyle}
                            source={require("../../asset/Logo/logo.png")}
                        />

                        <View style={{ marginLeft: 10, opacity: 0.9, marginTop: 5, overflow: 'hidden' }}>
                            <Text style={styles.textStyle}>
                                {" "}
                                {this.props.auth.user.fullname}
                            </Text>
                            <Text style={[styles.textStyle, { fontSize: 12, opacity: 0.7, overflow: 'hidden' }]}>
                                {this.props.auth.user.email}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.block}>
                    <View style={{ marginLeft: 20, overflow: 'hidden' }}>
                        <Text style={{ fontSize: 10, opacity: 0.6, letterSpacing: 0.3 }}>
                            {"THẺ THÀNH VIÊN"}
                        </Text>
                        <TouchableOpacity>
                            <Text style={[styles.textStyle, { fontSize: 16, marginTop: 5 }]}>
                                {this.props.auth.company.name}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tabNaviagateContainer}>
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={() => this.setRoutes("ROUTE_HOME")}>
                            <View style={this.setStyleInidcator("Home")}>
                                <Icon
                                    name="home"
                                    size={25}
                                    style={styles.iconStyle}
                                    color={this.setIconcolor("Home")}
                                />
                                <Text style={[styles.textStyle, styles.tabbarText]}>
                                    {"TRANG CHỦ"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setRoutes("ROUTE_DEALLIST")}>
                            <View style={this.setStyleInidcator("DealList")}>
                                <Icon
                                    name="redeem"
                                    size={25}
                                    style={styles.iconStyle}
                                    color={this.setIconcolor("DealList")}
                                />
                                <Text style={[styles.textStyle, styles.tabbarText]}>
                                    {"ƯU ĐÃI"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setRoutes("ROUTE_COUPON")}>
                            <View style={this.setStyleInidcator("CouponList")}>
                                <Icon
                                    name="local-activity"
                                    size={25}
                                    style={styles.iconStyle}
                                    color={this.setIconcolor("CouponList")}
                                />
                                <Text style={[styles.textStyle, styles.tabbarText]}>
                                    {"COUPON"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>this.setRoutes("ROUTE_STORE")}>
                            <View style={this.setStyleInidcator("Store")}>
                                <Icon
                                    name="place"
                                    size={25}
                                    style={styles.iconStyle}
                                    color={this.setIconcolor("Store")}
                                />
                                <Text style={[styles.textStyle, styles.tabbarText]}>
                                    {"CỬA HÀNG"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setRoutes("ROUTE_NOTIFICATION")}
                        >
                            <View style={this.setStyleInidcator("Notification")}>
                                <Icon
                                    name="notifications"
                                    size={25}
                                    style={styles.iconStyle}
                                    color={this.setIconcolor("Notification")}
                                />
                                <Text style={[styles.textStyle, styles.tabbarText]}>
                                    {"THÔNG BÁO"}
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.bottom}>
                    <View style={{ flex: 1, paddingBottom: 15 }}>
                        <TouchableOpacity onPress={() => alert("setting account")}>
                            <View style={{ flexDirection: "row", marginTop: 20 }}>
                                <Icon name="settings" size={25} style={styles.iconStyle} />
                                <Text
                                    style={[
                                        styles.textStyle,
                                        styles.tabbarText,
                                        { marginLeft: 10, marginTop: 5 }
                                    ]}
                                >
                                    {"TÀI KHOẢN CỦA TÔI"}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        ...state.session,
        ...state.indicator,

    };
}
const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(SlideMenu);
