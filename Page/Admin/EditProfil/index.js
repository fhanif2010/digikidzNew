import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image
} from "react-native";
import { faEdit, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

class EditProfil extends React.Component {
    constructor(props) {
        super(props);

    };

    onAdminProfil = () => {
        this.props.navigation.navigate('AdminProfil')
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: "100%", height: 150, backgroundColor: "orange", borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }}>
                    <View style={{ paddingTop: "10%", alignItems: "center" }}>
                        <Text style={{ fontSize: 35, color: "white" }}>FAISAL HANIF</Text>
                        <Text style={{ fontSize: 15, color: "white" }}>TEACHER</Text>
                    </View>
                </View>

                <View style={{ marginTop:10, marginHorizontal: 30 }}>

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <View style={{ width: 154, height: 100, borderWidth: 1, alignItems: "center", justifyContent: "center", borderTopStartRadius: 8, borderBottomLeftRadius: 8, borderColor: "black", backgroundColor: "white" }}>
                            <Text style={{ color: "black" }}>CUTI</Text>
                            <Text style={{ color: "orange", fontSize: 40 }}>20</Text>
                            <Text style={{ color: "black" }}>/year</Text>
                        </View>
                        <View style={{ width: 154, height: 100, borderWidth: 1, alignItems: "center", justifyContent: "center", borderBottomRightRadius: 8, borderTopRightRadius: 8, borderColor: "black", backgroundColor: "white" }}>
                            <Text style={{ color: "black" }}>TRIAL</Text>
                            <Text style={{ fontSize: 40, color: "orange" }}>5</Text>
                            <Text style={{ color: "black" }}>/year</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Email</Text>
                        <TextInput style={{ fontSize: 20, borderBottomWidth: 1 }}>fhanif665@gmail.com</TextInput>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>No. Phone</Text>
                        <TextInput style={{ fontSize: 20, borderBottomWidth: 1 }}>089651688182</TextInput>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Address</Text>
                        <TextInput style={{ fontSize: 20, borderBottomWidth: 1 }}>Jl. Akasia No.20 Rt/Rw. 002/012</TextInput>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Date of Birth</Text>
                        <TextInput style={{ fontSize: 20, borderBottomWidth: 1 }}>20-Oktober-1998</TextInput>
                    </View>

                    <View style= {{ flexDirection: "row", justifyContent: "center", justifyContent:"space-around", marginTop: 20}}>
                    <TouchableOpacity style={{ width: 150 ,height: 45, borderRadius: 25, backgroundColor: "#a55eea", alignItems: "center", justifyContent: "center", }} onPress={() => { this.onAdminProfil() }}>
                            <View style={{ marginHorizontal: "15%", flexDirection: "row", marginTop: "3%" }}>
                                    <Text style={{ color: "white" }}>Cancel</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 150 ,height: 45, borderRadius: 25, backgroundColor: "#a55eea", alignItems: "center", justifyContent: "center", }} onPress={() => { this.onAdminProfil() }}>
                            <View style={{ marginHorizontal: "15%", flexDirection: "row", marginTop: "3%" }}>
                                    <Text style={{ color: "white" }}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }
}


export default EditProfil;