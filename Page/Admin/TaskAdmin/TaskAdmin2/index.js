import React, { useEffect, useState } from "react";
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
import db from '../../../../Config';

const TaskAdmin2 = (props) => {

    const database = db.database();
    const time = new Date();
    const timeNow = time.toDateString();

    const [listName, setListName] = useState([]);


    const date = props.route.params.data;
    useEffect(() => {
        database.ref()
            .child(`/task_container/${date}`)
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                    console.log(data)
                if (data !== null) {
                    const key = Object.keys(data)
                    console.log(key)

                    setListName(key);
                }
            })
    }, [])


    onTaskAdmin3 = (data) => {
        props.navigation.navigate('TaskAdmin3',{data:data,date:date})
    }
    onHistoty3 = () => {
        props.navigation.navigate('History3')
    }
    onTask3 = () => {
        props.navigation.navigate('Task3')
    }
    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>TASK</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 40, marginHorizontal: 20, }}>
                            {listName.map((data, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => { onTaskAdmin3(data) }} >
                                        <View style={styles.form.Textarea}>
                                            <Text style={styles.form.Textarea.Text}>{data}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}



                        </View>
                    </View>

                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default TaskAdmin2;

const styles = {
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