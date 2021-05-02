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

import { FlatList, } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowAltCircleLeft,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

const CutiApproveList = (props) => {
    onCutiProses = () => {
        props.navigation.navigate('CutiProses')
    }
    onHistoty3 = () => {
        props.navigation.navigate('History3')
    }
    onTask3 = () => {
        props.navigation.navigate('Task3')
    }
    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange"  }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 30, color: "white" }}>Cuti Progres</Text>
                        </View>
                    </View>
                <View style={{ backgroundColor: "white", width: "100%", height: "100%",  borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                <View style={{ marginTop: 40, marginHorizontal: 20,}}>
                        <TouchableOpacity onPress={() => { onCutiProses()  }} >
                            <View style={ styles.form.Textarea}>
                                <Text style={ styles.form.Textarea.Text}> Faisal Hanif, Teacher, 20-08-20 </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { onHistory2()  }}>
                            <View style={ styles.form.Textarea}>
                                <Text style={ styles.form.Textarea.Text}> Nurfaizin, Admin, 01-05-2021</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                    </View>

                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default CutiApproveList;

const styles= {
form: {
    marginTop: 40, 
    marginHorizontal: 20,
    
    Textarea: {
        width: "100%", 
        height: 50, 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        backgroundColor: "#dfe4ea", 
        paddingHorizontal: 15,
        marginTop: 6,
        borderRadius: 8,
        Text: {
            fontSize: 18
        }
    }
}
}