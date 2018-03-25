import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Picker,
  ActivityIndicator,
  StyleSheet,
  Dimensions
} from "react-native";
const deviceScreen = Dimensions.get("window");
import { Button } from "../../components/Form";
export default class LoginSelectCompany extends Component {
  componentDidMount() {
    let defaultvalue =
      this.props.screenname.length == 0
        ? this.props.companylist[0].screenname
        : this.props.screenname;
    this.props.inputChange({ screenname: defaultvalue });
   console.log(defaultvalue)
  }
  render() {
    return (
      <View>
          <Text style={{textAlign:'center'}}>Chọn một công ty để tiếp tục:</Text>

          <Picker
            selectedValue={this.props.screenname}
            onValueChange={itemValue =>
              this.props.inputChange({ screenname: itemValue})
            }
          >
            {this.props.companylist.map(item => {
              return (
                <Picker.Item
                  label={item.name}
                  value={item.screenname}
                  key={item.id}
                />
              );
            })}
          </Picker>
       

        <View style={styles.container}>
          {this.props.isFetching ? (
            <ActivityIndicator
              animating={true}
              color="#22baa0"
              size="small"
              style={styles.activityIndicator}
            />
          ) : (
            <View style={{ width: deviceScreen.width - 30 }}>
              <Button onPress={this.props.doLogin} title={"Tiếp tục"} />
            </View>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop:15,
    alignItems: "center"
  },
  activityIndicator: {
    justifyContent: "center",
    alignItems: "center",
    height: 80
  }
});
