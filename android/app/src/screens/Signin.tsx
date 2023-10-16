import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import RNBounceable from "@freakycoder/react-native-bounceable";


const Signin = ( {navigation}) => {

    let bouncyCheckboxRef: BouncyCheckbox | null = null;
    const [checkboxState, setCheckboxState] = useState(false);

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const submit = () => {
        if (userEmail === "ahmed@gmail.com" && userPassword === "123") {
            Alert.alert(`Welcome`);
            navigation.navigate("Home");
        } else {
            Alert.alert("User Email and Password is not correct");
        }
    }


  return (
    <View style={styles.mainContainer}>

        <View>
            <View>
                <Text style={styles.mainHeader}> Welcome </Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Email </Text>
                <TextInput style={styles.inputStyle} value={userEmail} onChangeText={(updatedValue) => setUserEmail(updatedValue)} autoCapitalize='none' autoCorrect={false} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Password </Text>
                <TextInput style={styles.inputStyle} value={userPassword} onChangeText={(updatedValue) => setUserPassword(updatedValue)} autoCapitalize='none' autoCorrect={false} secureTextEntry={true} />
            </View>

            <View>
                <View>
                    {/* <BouncyCheckbox onPress={(isChecked: boolean) => {}} /> */}
                    <BouncyCheckbox
                        style={{ marginTop: 16 }}
                        ref={(ref: any) => (bouncyCheckboxRef = ref)}
                        isChecked={checkboxState}
                        text="Remember me"
                        disableBuiltInState
                        onPress={() => setCheckboxState(!checkboxState)}
                    />
                    {/* <Text style={styles.wrapperText}> Remember me </Text> */}
                </View>
                <View>
                    <Text> Forget Password? </Text>
                </View>
            </View>

            <TouchableOpacity style={[styles.buttonStyle, {backgroundColor:"linear-gradient(to right, #FFA500, #FFC0CB)"}]} disabled={!checkboxState} onPress={() => submit()}>
                <Text style={styles.buttonText}> Sign in </Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        backgroundColor: "#ffff",
    },
    mainHeader: {
        fontSize: 25,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
        // fontFamily: "bold",
    },
    description: {
        fontSize: 20,
        color: "#7d7d7d",
        paddingBottom: 20,
        lineHeight: 25,
        fontFamily: "regular",
    },
    inputContainer: {
        marginTop: 20,
    },
    labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontFamily: "regular"
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontFamily: "regular",
        fontSize: 18,
    }, 
    wrapperText: {},
    buttonStyle: {
        height: 33,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    buttonText: {
        // height: 30,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'linear-gradient(to right, #FF5733, #33FF57)',

    },
})

export default Signin;