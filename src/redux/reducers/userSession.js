import * as Actions from "../../actions/userSession";
const emptyAuthState = {
    jwt: '',
    company: {},
    companysetting: {},
    user: {},
    role: ''
};
const initialState = {
    isFetching: false,
    email: 'tuanmaster2012@gmail.com',
    password: '123456',
    screenname: '',
    companylist: [],
    errors: {
        email: '',
        password: '',
        server_errors: []
    },
    auth: emptyAuthState,
    accessToken:"",
};
export default(state = initialState, action = {}) => {
    switch (action.type) {
        case 'persist/REHYDRATE':
            //Restore login info from redux-persist
            return {
                ...state,
                ...action.payload.session
            };
        case Actions.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                errors: {}
            };
        case Actions.LOGIN_SHOW_SELECT_COMPANY:
            return {
                ...state,
                isFetching: false,
                errors: {},
                companylist: action.data
            };
        case Actions.LOGIN_SUCCESS:
            let auth = {
                jwt: action.data.jwt,
                company: action.data.companylist[0],
                companysetting: action.data.companysetting,
                user: action.data.user,
                role: action.data.role
            };
            return {
                ...state,
                auth,
                isFetching: false,
                errors: {},
                companylist: [],
                // password: '',
                screenname: ''
            };
        case Actions.LOGIN_FAILED:
            return {
                ...state,
                isFetching: false,
                errors: {
                    ...state.errors,
                    server_errors: action.errors
                }
            };
        case Actions.LOGIN_INPUT_CHANGE:
            let {change} = action;
            if (change.hasOwnProperty("email")) {
                return {
                    ...state,
                    email: change.email,
                    errors: {
                        ...state.errors,
                        email: ""
                    }
                };
            }
            if (change.hasOwnProperty("password")) {
                return {
                    ...state,
                    password: change.password,
                    errors: {
                        ...state.errors,
                        password: ""
                    }
                };
            }
            if (change.hasOwnProperty("screenname")) {
                return {
                    ...state,
                    screenname: change.screenname,
                    errors: {
                        ...state.errors,
                        screenname: ""
                    }
                };
            }
        
        case Actions.LOGIN_DISMISS_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    server_errors: []
                }
            };
        case Actions.LOGOUT_SUCCESS:
            return {
                ...state,
                auth: emptyAuthState,
                companylist: [],
            };
        case Actions.LOGOUT_FAIL:
            return {
                ...state,
                auth: emptyAuthState,
                companylist: [],
            };
        case Actions.LOGIN_FB:
        return {
            ...state,
           accessToken:action.data,
        }
        default:
            return state;
    }
};