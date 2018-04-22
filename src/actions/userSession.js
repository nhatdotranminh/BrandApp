import axios from 'axios';
// FBSDK
// import {
//     LoginManager,
//     AccessToken,
//     GraphRequestManager,
//     GraphRequest,
//     LoginButton
//   } from "react-native-fbsdk";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_INPUT_CHANGE = "LOGIN_INPUT_CHANGE";
export const LOGIN_DISMISS_ERROR = "LOGIN_DISMISS_ERROR";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const LOGIN_FB = "LOGIN_FB";
export const LOGIN_SHOW_SELECT_COMPANY ="LOGIN_SHOW_SELECT_COMPANY"
export function loginRequest({email, password, screenname}) {
    return function (dispatch) {
        dispatch({type: LOGIN_REQUEST});
        axios
            .post('/users/login', {email, password, screenname})
            .then(response => {
                if (response.data.jwt === null || response.data.jwt.length == 0) {
                    dispatch({type: LOGIN_SHOW_SELECT_COMPANY, data: response.data.companylist});
                } else {
                    //store authorization header
                    axios.defaults.headers.common['Authorization'] = response.data.jwt;
                    
                    dispatch({type: LOGIN_SUCCESS, data: response.data});
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch({type: LOGIN_FAILED, errors: error.response.data.error});
            });
    }
}
export function logoutRequest() {
    return function (dispatch) {
        axios
            .post('/users/logout')
            .then(response => {
                dispatch({type: LOGOUT_SUCCESS, data: response.data.message});
            })
            .catch((err) => {
                dispatch({type: LOGOUT_FAIL});
            })
            .done(function () {
                //Clear authorization header
                axios.defaults.headers.common['Authorization'] = '';
            });
    }
}
// export function _fbAuth() {
//      return function(dispatch){
//         LoginManager.logInWithReadPermissions(["public_profile"]).then(
//             function(result) {
//               if (result.isCancelled) {
//                 console.log("Login Cancelled");
//               } else {
//                 AccessToken.getCurrentAccessToken().then(data => {
//                   let accessToken = data.accessToken;
//                   dispatch({type: LOGIN_FB, data: accessToken});
//                   console.log("access Token" + accessToken)
//                   // Graph request
//                   const responseInfoCallback = (error, result) => {
//                     if (error) {
//                       console.log(error);
//                       // alert('Error fetching data: ' + error.toString());
//                     } else {
//                       console.log("result" + JSON.stringify(result));
//                       // alert('Success fetching data: ' + result.toString());
//                     }
//                   };
//                   const infoRequest = new GraphRequest(
//                     "/me",
//                     {
//                       accessToken: accessToken,
//                       parameters: {
//                         fields: {
//                           string: "email,name,first_name,middle_name,last_name"
//                         }
//                       }
//                     },
//                     responseInfoCallback
//                   );
    
//                   // Start the graph request.
//                   new GraphRequestManager().addRequest(infoRequest).start();
//                 });
//               }
//             },
//             function(error) {
//               console.log("some error occurred!!" + result.error);
//             }
//           );
//      }
     
//    };
export const loginInputChange = (change) => ({type: LOGIN_INPUT_CHANGE, change});
export const loginDismissError = () => ({type: LOGIN_DISMISS_ERROR});