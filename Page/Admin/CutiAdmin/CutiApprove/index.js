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

const CutiApprove = (props) => {
    onCutiNameList = () => {
        props.navigation.navigate('CutiNameList')
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
                            <Text style={{ fontSize: 30, color: "white" }}>Cuti Appove</Text>
                        </View>
                    </View>
                <View style={{ backgroundColor: "white", width: "100%", height: "100%",  borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                <View style={{ marginTop: 40, marginHorizontal: 20,}}>
                        <TouchableOpacity onPress={() => { onCutiNameList()  }} >
                            <View style={ styles.form.Textarea}>
                                <Text style={ styles.form.Textarea.Text}> Faisal Hanif </Text>
                                <Text style={ styles.form.Textarea.Text}> Teacher </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { onHistory2()  }}>
                            <View style={ styles.form.Textarea}>
                                <Text style={ styles.form.Textarea.Text}> Nurfaizin</Text>
                                <Text style={ styles.form.Textarea.Text}> Admin </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </View>

                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default CutiApprove;

const styles= {
form: {
    marginTop: 40, 
    marginHorizontal: 20,
    
    Textarea: {
        width: "100%", 
        height: 50, 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-around", 
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