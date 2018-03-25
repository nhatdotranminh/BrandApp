import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    userinfoContainer: {
      flex: 2,
      backgroundColor: "white"
    },
    block: {
      flex: 1,
      backgroundColor: "#EEEEEE",
  
      justifyContent: "center"
      //alignItems: "center"
    },
    tabNaviagateContainer: {
      flex: 5
      // backgroundColor: "green"
    },
    bottom: {
      flex: 2
      // backgroundColor: "black",
    },
    userInfoGroup: {
      flex: 1,
      flexDirection: "row",
      // justifyContent: "center",
      alignItems: "center"
    },
    avatarStyle: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 20,
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: "transparent"
    },
    textStyle: {
      fontSize: 14,
      letterSpacing: -0,
      fontWeight: "400"
    },
    button: {
      paddingTop: 5,
      paddingBottom: 5,
      marginRight: 15,
      borderRadius: 25,
      alignItems: "center",
      borderWidth: 2,
      borderColor: "transparent",
      width: 60,
      height: 30,
      backgroundColor: "red"
    },
    tabNavigateGroup: {
      //backgroundColor: "#EEEEEE",
      height: 50,
      marginTop: 5,
      borderColor: "white",
      borderLeftWidth: 4,
      flexDirection: "row",
      alignItems: "center"
    },
    iconStyle: {
      marginLeft: 20,
      opacity: 0.8
    },
    tabbarText: {
      marginLeft: 15,
      fontSize: 12,
      opacity: 0.8
    }
  });
  export default styles;