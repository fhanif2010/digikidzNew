import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView
} from "react-native";
import {
    faArrowAltCircleLeft,
    faPlus,

} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

class UserList extends React.Component {
    constructor(props) {
        super(props);

    };

    onAdminProfil = () => {
        this.props.navigation.navigate('AdminProfil')
    }

    onHome = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={ styles.container}>
                <KeyboardAvoidingView behavior="height">
                    <View style={ styles.header}>
                        <View style={ styles.header.Logo }>
                            <Text style={ styles.header.Logo.Text }>Karyawan</Text>
                        </View>
                        <TouchableOpacity style={ styles.header.btn}  onPress={() => { this.onHome() }}>
                            <View style={ styles.header.btn.Text }>
                                <View>
                                    <FontAwesomeIcon icon={faPlus} size={20} color="white" />
                                </View>
                                <View>
                                    <Text style={{ color: "white" }}>Create User</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={ styles.form}>
                        <TouchableOpacity onPress={() => { this.onAdminProfil()  }} >
                            <View style={ styles.form.Textarea }>
                                <Text style={ styles.form.Textarea.Text}> NurFaizin</Text>
                                <Text style={ styles.form.Textarea.Text}> Teacher</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.onAdminProfil()  }}>
                            <View style={ styles.form.Textarea }>
                                <Text style={ styles.form.Textarea.Text}> Faisal Hanif</Text>
                                <Text style={ styles.form.Textarea.Text}> Admin</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                </KeyboardAvoidingView>
            </View >
        )
    }
}


export default UserList;

const styles= {
    container: {
        flex:1,
    },
    header: {
        width: "100%",
        height: 150,
        backgroundColor: "orange",
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,

            Logo: {
                paddingTop: "10%", 
                alignItems: "center",

                 Text: {
                    fontSize: 30, 
                    color: "white"
                 }
            },
            btn: {
                width: "60%", 
                height: 45, 
                borderRadius: 25, 
                marginTop: 45, 
                marginHorizontal: "20%", 
                backgroundColor: "#a55eea",

                Text: {
                    alignItems: "center", 
                    justifyContent: "space-around",
                    marginHorizontal: "15%", 
                    flexDirection: "row", 
                    marginTop: "5%"
                }
            }
            
    },
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