import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    FlatList,
    TouchableOpacity,

} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowAltCircleLeft,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import db from '../../Config'

const Task = (props) => {
    const name = useSelector(state => state.AuthReducer.name);
    const time = new Date();
    const timeNow = time.toDateString();


    const [listTask, setListTask] = useState([]);


    useEffect(() => {
        db.database().ref().child(`/task/${timeNow}/${name}`)
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                if (data !== null) {
                    const translateData = Object.values(data);
                    const task = Object.values(translateData)
                    setListTask(task);
                }

            })
    }, [])



    const onHome = () => {
        props.navigation.navigate('Home')
    }
    const onTask2 = () => {
        props.navigation.navigate('Task2')
    }
    const onTask3 = () => {
        props.navigation.navigate('Task3')
    }

    return (
        <View style={{ flex: 1, backgroundColor: "orange" }}>
            <View style={{ height: 150 }}>
                <View style={{ paddingTop: "10%", alignItems: "center" }}>
                    <Text style={{ fontSize: 35, color: "white" }}>TASK</Text>
                </View>
            </View>

            <View style={{ backgroundColor: "white", width: "100%", minHeight: 360, borderTopStartRadius: 40, borderTopEndRadius: 40,paddingTop:50 ,paddingBottom:200 }}>
                <ScrollView >
                    {listTask.map((anjing,index)=>{
                        return(
                            <View style={{ marginTop: 25, marginHorizontal: 20, }} key={index}>
                            <TouchableOpacity onPress={() => { onTask3() }} style={{ width: "100%" }}>
                                <View style={{ width: "100%", minHeight: 50, backgroundColor: "#dfe4ea", borderRadius: 15, padding: 10, fontSize: 15, display: 'flex', flexWrap: 'wrap', }}>
                                    <Text > name : {anjing.name}</Text>
                                    <Text> program:  {anjing.program}</Text>
                                    <Text > level : {anjing.level}</Text>
                                    <Text > time :  {anjing.time1} - {anjing.time2} </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        )
                    })}
                
                 

                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", }}>
                        <TouchableOpacity style={{ width: 150, height: 45, borderRadius: 25, backgroundColor: "#a55eea", alignItems: "center", justifyContent: "center", }} onPress={() => { onHome() }}>
                            <View style={{ marginHorizontal: "15%", flexDirection: "row", marginTop: "3%" }}>
                                <Text style={{ color: "white" }}>Upload</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 ,position:"absolute",right:20,top:600 }}>
                        <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: "#dfe4ea", borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={() => { onTask2() }}>
                            <FontAwesomeIcon icon={faPlus} size={35} />
                        </TouchableOpacity>
                    </View>
        </View >
    )

}

export default Task;