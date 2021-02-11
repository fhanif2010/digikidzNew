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
class Task extends React.Component {
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
            <View style={{ flex: 1, backgroundColor: "orange"  }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>TASK</Text>
                        </View>
                    </View>
                <View style={{ backgroundColor: "white", width: "100%", height: "100%",  borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                    <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                        <TouchableOpacity onPress={() => { this.onTask3() }}>
                            <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#dfe4ea", borderRadius: 15 }}>
                                <Text style={{ fontSize: 18 }}> Panji,</Text>
                                <Text style={{ fontSize: 18 }}> Coding,</Text>
                                <Text style={{ fontSize: 18 }}> Construc2,</Text>
                                <Text style={{ fontSize: 18 }}> 15:00-16:00</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: "#dfe4ea", borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={() => { this.onTask2() }}>
                                <FontAwesomeIcon icon={faPlus} size={35} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", width: "100%", justifyContent:"space-around", bottom: -270 }}>
                        <TouchableOpacity style={{ width: 150, height: 45, borderRadius: 25, backgroundColor: "#a55eea", alignItems: "center", justifyContent: "center", }} onPress={() => { this.onHome()}}>
                            <View style={{ marginHorizontal: "15%", flexDirection: "row", marginTop: "3%" }}>
                                <Text style={{ color: "white" }}>Upload</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </View>

                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default Task;