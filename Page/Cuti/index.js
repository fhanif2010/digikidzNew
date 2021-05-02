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

const Cuti = (props) => {

    onCuti2 = () => {
        props.navigation.navigate('Cuti2')
    }
    onCuti3 = () => {
        props.navigation.navigate('Cuti3')
    }
 {
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
                            <View style={{ alignItems: "center", marginTop: 10, position: "absolute", right: 20, top: 400 }}>
                                <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: "#dfe4ea", borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={() => { this.onCuti2() }}>
                                    <FontAwesomeIcon icon={faPlus} size={35} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                <TouchableOpacity onPress={() => { onCuti3() }}>
                                    <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#dfe4ea", borderRadius: 15 }}>
                                        <Text style={{ fontSize: 18 }}> 13-10-2020 </Text>
                                        <Text style={{ fontSize: 18 }}> - </Text>
                                        <Text style={{ fontSize: 18 }}> 16-10-2020, </Text>
                                        <Text style={{ fontSize: 18 }}> waiting, </Text>
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