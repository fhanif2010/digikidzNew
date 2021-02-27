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
import { 
    faArrowAltCircleLeft,
    faPlus
 } from "@fortawesome/free-solid-svg-icons";

class Cuti extends React.Component {
    onHome = () => {
        this.props.navigation.navigate('Home')
    }
    onTask2 = () => {
        this.props.navigation.navigate('Task2')
    }
    onTask3 = () => {
        this.props.navigation.navigate('Task3')
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>CUTI</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                <TouchableOpacity onPress={() => { this.onCuti2() }}>
                                    <View style={{ height: 50, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#dfe4ea", borderRadius: 15 }}>
                                        <FontAwesomeIcon icon={faPlus} size={35} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                <TouchableOpacity onPress={() => { this.onCuti3() }}>
                                    <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#dfe4ea", borderRadius: 15 }}>
                                        <Text style={{ fontSize: 18 }}> 13-10-2020 </Text>
                                        <Text style={{ fontSize: 18 }}> - </Text>
                                        <Text style={{ fontSize: 18 }}> 16-10-2020, </Text>
                                        <Text style={{ fontSize: 18 }}> waiting, </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                <TouchableOpacity onPress={() => { this.onCuti3() }}>
                                    <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#2ecc71", borderRadius: 15 }}>
                                        <Text style={{ fontSize: 18 }}> 03-08-2020 </Text>
                                        <Text style={{ fontSize: 18 }}> - </Text>
                                        <Text style={{ fontSize: 18 }}> 04-10-2020, </Text>
                                        <Text style={{ fontSize: 18 }}> Approv </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                <TouchableOpacity onPress={() => { this.onCuti3() }}>
                                    <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#e74c3c", borderRadius: 15 }}>
                                        <Text style={{ fontSize: 18 }}> 20-04-2020 </Text>
                                        <Text style={{ fontSize: 18 }}> - </Text>
                                        <Text style={{ fontSize: 18 }}> 25-04-2020, </Text>
                                        <Text style={{ fontSize: 18 }}> Not ap </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default Cuti;