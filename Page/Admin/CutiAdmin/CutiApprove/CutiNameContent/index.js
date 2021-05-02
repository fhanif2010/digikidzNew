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


const CutiNameContent = (props) => {

    onTrial = () => {
        props.navigation.navigate('Trial')
    }
    onTrial2 = () => {
        props.navigation.navigate('Trial2')
    }
    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
            <KeyboardAvoidingView behavior="height">

                <View>
                    <View style={{ width: "100%", height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>CUTI</Text>
                        </View>
                    </View>
                </View>

                <ScrollView>
                <View style={{ backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40, height: 860 }}>
                        <View style={{ marginTop: 40, marginHorizontal: 20 }}>

                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                                <TextInput style={{  borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}>Faisal Hanif</TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Position</Text>
                                <TextInput style={{  borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}>Teacher</TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Start - End</Text>
                                <View style={{ justifyContent: "space-around", flexDirection: "row", width: "100%"}}>
                                <TextInput style={{ width: "47%",borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}>13-10-2020</TextInput>
                                <Text style={{ fontSize: 20, color: "orange" }}>-</Text>
                                <TextInput style={{ width: "47%", borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}>16-10-2020</TextInput>
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Neccessity</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" }}> Keperluan Acara keluarga  </TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Note</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" }}> Waiting - ...  </TextInput>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30}}>
                                    <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={() => { this.onTrial2() }}>
                                        <View style={{ alignItems: "center", marginVertical: 11 }}>
                                            <Text style={{ color: "white" }}>Rejected</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={() => { this.onTrial() }}>
                                        <View style={{ alignItems: "center", marginVertical: 11 }}>
                                            <Text style={{ color: "white" }}>Approve</Text>
                                        </View>
                                    </TouchableOpacity>
                            </View>
                        </View>
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View >
        )
    }
}

export default CutiNameContent;