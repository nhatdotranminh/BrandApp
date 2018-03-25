const defaultState = {

    routeName: "Home"

};
export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case "ROUTE_HOME":
            return {
                ...state,
                routeName: "Home"
            };
        case "ROUTE_DEALLIST":
            return {
                ...state,
                routeName: "DealList"
            }
        case "ROUTE_COUPON":
            return {
                ...state,
                routeName: "CouponList"
            };
        case "ROUTE_STORE":
            return {
                ...state,
                routeName: "Store"
            }
        case "ROUTE_NOTIFICATION":
            return {
                ...state,
                routeName: "Notification"
            };
        default:
            return state;
    }

}
