import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";

import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowAltCircleLeft,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
class Trial extends React.Component {
    onTrial2 = () => {
        this.props.navigation.navigate('Trial2')
    }
    onTrial3 = () => {
        this.props.navigation.navigate('Trial3')
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>TRIAL</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                <TouchableOpacity onPress={() => { this.onTrial2() }}>
                                    <View style={{ height: 50, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#dfe4ea", borderRadius: 15 }}>
                                        <FontAwesomeIcon icon={faPlus} size={35} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                <TouchableOpacity onPress={() => { this.onTrial3() }}>
                                    <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#dfe4ea", borderRadius: 15 }}>
                                        <Text style={{ fontSize: 18 }}> Pesta, </Text>
                                        <Text style={{ fontSize: 18 }}> 13, </Text>
                                        <Text style={{ fontSize: 18 }}> GameDev, </Text>
                                        <Text style={{ fontSize: 18 }}> Construc2, </Text>
                                        <Text style={{ fontSize: 18 }}> Mampu Mengikuti</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                <TouchableOpacity onPress={() => { this.onTask3() }}>
                                    <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#2ecc71", borderRadius: 15 }}>
                                        <Text style={{ fontSize: 18 }}> Amaro, </Text>
                                        <Text style={{ fontSize: 18 }}> 8, </Text>
                                        <Text style={{ fontSize: 18 }}> Animasi, </Text>
                                        <Text style={{ fontSize: 18 }}> Flash, </Text>
                                        <Text style={{ fontSize: 18 }}> Memiliki kemauan</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                <TouchableOpacity onPress={() => { this.onTask3() }}>
                                    <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#e74c3c", borderRadius: 15 }}>
                                        <Text style={{ fontSize: 18 }}> Vita, </Text>
                                        <Text style={{ fontSize: 18 }}> 6, </Text>
                                        <Text style={{ fontSize: 18 }}> Robotkidz, </Text>
                                        <Text style={{ fontSize: 18 }}> Le2, </Text>
                                        <Text style={{ fontSize: 18 }}> Tidak bisa mengikuti arahan</Text>
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