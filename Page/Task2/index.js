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
class Task2 extends React.Component {
    onTask = () => {
        this.props.navigation.navigate('Task')
    }
    onTask2 = () => {
        this.props.navigation.navigate('Task2')
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
            <KeyboardAvoidingView behavior="height">

                <View>
                    <View style={{ width: "100%", height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>TASK</Text>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                    <ScrollView>
                        <View style={{ marginTop: 40, marginHorizontal: 20, height: 800 }}>

                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                                <TextInput style={{  borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}></TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Program</Text>
                                <TextInput style={{  borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}></TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Level</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}></TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Status</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}></TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Time</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 36, width: 160, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}></TextInput>
                                    <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 36, width: 160, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}></TextInput>
                                </View>

                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Status</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" }}> </TextInput>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30}}>
                                    <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={() => { this.onTask2() }}>
                                        <View style={{ alignItems: "center", marginVertical: 11 }}>
                                            <Text style={{ color: "white" }}>Clear</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={() => { this.onTask() }}>
                                        <View style={{ alignItems: "center", marginVertical: 11 }}>
                                            <Text style={{ color: "white" }}>Save</Text>
                                        </View>
                                    </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </KeyboardAvoidingView>
        </View >
        )
    }
}

export default Task2;