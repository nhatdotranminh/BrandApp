import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Alert, ActivityIndicator, StyleSheet, Text } from 'react-native';

// Actions
import * as sessionActions from "../../actions/userSession";
import * as shipperSessionActions from '../../actions/shippingRoutes';
// 3rd LIN
import BackgroundGeolocation from "react-native-background-geolocation";
import * as Progress from 'react-native-progress';
import { connect } from 'react-redux';




class LogoutScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    componentDidUpdate() {
        //Return to Login if jwt had been reset to empty
        if (this.props.auth.jwt.length == 0) {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Login' })]
            });

            this
                .props
                .navigation
                .dispatch(resetAction)
        }

    }
    componentWillMount() {
        this._offlineWork();
        BackgroundGeolocation.stop(() => {
            console.log("[BackgroundGeolocation] stopped successfully")
        });
    }

    componentDidMount() {
        //do Logout
        this.props.logoutRequest();
    }

    async _offlineWork() {
        await this.props.shipperStatus({
            id: this.props.shipperData.id,
            user_id: this.props.auth.user.id,
            company_id: this.props.shipperData.company_id,
            position: this.props.shipperData.position,
            internal_id: this.props.shipperData.internal_id,
            full_name: this.props.shipperData.full_name,
            job_title: this.props.shipperData.job_title,
            job_description: this.props.shipperData.job_description,
            gender: this.props.shipperData.gender,
            email: this.props.shipperData.email,
            phone: this.props.shipperData.phone,
            address: this.props.shipperData.address,
            region_id: this.props.shipperData.region_id,
            creator_id: this.props.auth.user.id,
            ip_address: this.props.shipperData.ip_address,
            status: this.props.shipperData.status,
            online_status: 0,
            is_deleted: this.props.shipperData.is_deleted,
            date_created: this.props.shipperData.date_created,
            date_modified: this.props.shipperData.date_modified,
            date_deleted: this.props.shipperData.date_deleted

        })

    }
    render() {

        return (
            <View style={styles.container}>
            <Progress.Circle size={30} indeterminate={true} />
                <Text>Logging out...</Text>
            </View>
        )
    }
}


function mapStateToProps(state) {
    return {
        ...state.session,
        ...state.shipperSession
    }
}


const mapDispatchToProps = dispatch => ({
    logoutRequest: () => dispatch(sessionActions.logoutRequest()),
    shipperStatus: shipperData => dispatch(shipperSessionActions.shipperStatus(shipperData))
});


export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen);


let styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    activityIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});



