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

import { FlatList, } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowAltCircleLeft,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import db from '../../../Config';

const TaskAdmin = (props) => {

    const database =  db.database();
    const time = new Date();
    const timeNow = time.toDateString();


    const [listTask, setListTask] = useState([]);
    const [history, setHistory] = useState({});




useEffect(()=>{
    database.ref()
    .child(`/task_container/`)
    .on('value', (snapshoot) => {
        const data = snapshoot.val();
        console.log( data )
        if (data !== null) {
            const  key = Object.keys(data)
            
            setListTask(key);
        }
    })
},[])
    
  const  onTaskAdmin2 = (data) => {
        props.navigation.navigate('TaskAdmin2',{data:data})
    }
  const   onHistoty3 = () => {
        props.navigation.navigate('History3')
    }
  const   onTask3 = () => {
        props.navigation.navigate('Task3')
    }
    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange"  }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>TASK</Text>
                        </View>
                    </View>
                <View style={{ backgroundColor: "white", width: "100%", height: "100%",  borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                <View style={{ marginTop: 40, marginHorizontal: 20,}}>
                    {listTask.map((data,index)=>{
                        return(
                            <TouchableOpacity key={index} onPress={() => { onTaskAdmin2(data)  }} >
                            <View style={ styles.form.Textarea}>
                                <Text style={ styles.form.Textarea.Text}>{data}</Text>
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

export default TaskAdmin;

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