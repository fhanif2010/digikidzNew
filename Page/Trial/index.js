import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowAltCircleLeft,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Trial = (props) => {

    onTrial2 = () => {
        props.navigation.navigate('Trial2')
    }
    onTrial3 = () => {
        props.navigation.navigate('Trial3')
    }
    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>TRIAL</Text>
                        </View>
                    </View>


                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ alignItems: "center", marginTop: 10, position: "absolute", right: 20, top: 450 }}>
                            <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: "#dfe4ea", borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={() => { onTrial2() }}>
                                <FontAwesomeIcon icon={faPlus} size={35} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                <TouchableOpacity onPress={() => { onTrial3() }}>
                                    <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#dfe4ea", borderRadius: 15 }}>
                                        <Text style={{ fontSize: 18 }}> Pesta, </Text>
                                        <Text style={{ fontSize: 18 }}> 13, </Text>
                                        <Text style={{ fontSize: 18 }}> GameDev, </Text>
                                        <Text style={{ fontSize: 18 }}> Construc2, </Text>
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

export default Trial;