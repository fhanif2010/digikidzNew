import React, { useEffect,useState } from "react";
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
import { FlatList,  } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowAltCircleLeft,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { set } from "react-native-reanimated";

const HistoryTask2 = (props) =>{

const onDone = () =>{
    props.navigation.navigate('HistoryTask')
}
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <View>
                    <View style={{ width: "100%", height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>HISTORY</Text>
                            <Text style={{ fontSize: 15, color: "white" }}>Faisal Hanif/PANJI</Text>
                        </View>
                    </View>
                    <ScrollView >
                        <View style={{ backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40}}>
                                <View style={{ marginTop: 40, marginHorizontal: 20 , height: 800}}>
                                    <View>
                                        <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                                        <TextInput style={{ borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}></TextInput>
                                    </View>

                                    <View>
                                        <Text style={{ fontSize: 20, color: "orange" }}>Program</Text>
                                        <TextInput style={{ borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}></TextInput>
                                    </View>

                                    <View>
                                        <Text style={{ fontSize: 20, color: "orange" }}>Level</Text>
                                        <TextInput style={{ borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}></TextInput>
                                    </View>

                                    <View>
                                        <Text style={{ fontSize: 20, color: "orange" }}>Status</Text>
                                        <TextInput style={{ borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}></TextInput>
                                    </View>

                                    <View>
                                        <Text style={{ fontSize: 20, color: "orange" }}>Time</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                            <TextInput style={{ borderWidth: 1, height: 36, width: 160, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}></TextInput>
                                            <TextInput style={{ borderWidth: 1, height: 36, width: 160, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}></TextInput>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={{ fontSize: 20, color: "orange" }}>Note</Text>
                                        <TextInput style={{ borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd", borderRadius: 15 }}> </TextInput>
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                                        <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={() => { onDone() }}>
                                            <View style={{ alignItems: "center", marginVertical: 11 }}>
                                                <Text style={{ color: "white" }}>Done</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                                
                        </View>
                        </ScrollView >
                </View>
            </View >
        )
    }


export default HistoryTask2;