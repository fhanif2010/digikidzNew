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
class Task3 extends React.Component {
    onTask = () => {
        this.props.navigation.navigate('Task')
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "orange"}}>
                <KeyboardAvoidingView behavior="height">

                    <View>
                        <View style={{ width: "100%", height: 150 }}>
                            <View style={{ paddingTop: "10%", alignItems: "center" }}>
                                <Text style={{ fontSize: 35, color: "white" }}>TASK</Text>
                            </View>
                        </View>

                        <View style={{ backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <ScrollView>
                            <View style={{ marginTop: 40, marginHorizontal: 20, height: 900 }}>

                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                                    <TextInput style={{ borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}>Panji</TextInput>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Program</Text>
                                    <TextInput style={{ borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}>Coding</TextInput>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Level</Text>
                                    <TextInput style={{ borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}>Construct2</TextInput>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Status</Text>
                                    <TextInput style={{ borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}>Center</TextInput>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Time</Text>
                                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                        <TextInput style={{ borderWidth: 1, height: 36, width: 160, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}>15:00</TextInput>
                                        <TextInput style={{ borderWidth: 1, height: 36, width: 160, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}>16:00</TextInput>
                                    </View>

                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Status</Text>
                                    <TextInput style={{ borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd", borderRadius: 15 }}> Panji sedang mengerjakan project indian escape, ia baru menyelesaikan rintangan 1, next week melanjutkan pertemuan ke 3</TextInput>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30}}>
                                        <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={() => { this.onTask() }}>
                                            <View style={{ alignItems: "center", marginVertical: 11 }}>
                                                <Text style={{ color: "white" }}>Delete</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={() => { this.onTask() }}>
                                            <View style={{ alignItems: "center", marginVertical: 11 }}>
                                                <Text style={{ color: "white" }}>Update</Text>
                                            </View>
                                        </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                        </View>
                    </View>

                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default Task3;