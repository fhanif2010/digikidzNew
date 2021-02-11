import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

class Cuti extends React.Component {
    onHome = () => {
        this.props.navigation.navigate('Home')
    }
    render() {
        return (

            <View style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior="padding">
                    <View style={{ backgroundColor: "orange", width: 360, height: 150 }}>
                        <Text>Cuti</Text>
                    </View>
                    <View style={{ backgroundColor: "gray", width: 360, height: 500, justifyContent: "center", flexDirection: "column" }}>
                        <View style={{ justifyContent: "center", alignItems: "center", }}>
                            <TouchableOpacity style={{ width: 300, height: 60, borderRadius: 25, marginTop: -30, marginHorizontal: "20%", backgroundColor: "#a55eea" }} onPress={ () => {this.onHome()}}>
                                <View style={{ alignItems: "center", justifyContent: "space-between", marginHorizontal: "15%", flexDirection: "row", marginTop: "3%" }}>
                                    <View>
                                        <FontAwesomeIcon icon={faArrowAltCircleLeft} size={30} color="white" />
                                    </View>
                                    <View>
                                        <Text style={{ color: "white" }}>Back To Home</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </View>
                        <ScrollView style={{ marginTop: 10 }}>
                            <View style={{ alignItems: "center" }}>
                                <View style={{ backgroundColor: "white", width: "80%", height: 430, marginTop: 10, marginBottom: 150, alignItems: "center" }}>


                                    <View style={{ width: 200, height: 40, marginTop: "5%", marginBottom: 10 }}>
                                        <TextInput style={{ borderBottomWidth: 1, borderColor: "red" }} placeholder="NAME" />
                                    </View>

                                    <View style={{ width: 200, height: 40, marginBottom: 10 }}>
                                        <TextInput style={{ borderBottomWidth: 1, borderColor: "red" }} placeholder="Reason of Vacation" />
                                    </View>

                                    <View style={{ width: 200, height: 40, marginBottom: 10 }}>
                                        <TextInput style={{ borderBottomWidth: 1, borderColor: "red" }} placeholder="Vacation start date" />
                                    </View>

                                    <View style={{ width: 200, height: 40, marginBottom: 10 }}>
                                        <TextInput style={{ borderBottomWidth: 1, borderColor: "red" }} placeholder="Vacation end" />
                                    </View>

                                    <View style={{ width: 200, height: 40, marginBottom: 10 }}>
                                        <TextInput style={{ borderBottomWidth: 1, borderColor: "red" }} placeholder="Gender" />
                                    </View>

                                    <View style={{ width: 200, height: 40, marginBottom: 10 }}>
                                        <TextInput style={{ borderBottomWidth: 1, borderColor: "red" }} placeholder="Phone" />
                                    </View>

                                    <View style={{ justifyContent: "center" }}>
                                        <Button title="submit" />
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </View>

        )
    }
}

export default Cuti;