import React,{useEffect} from 'react';
import {View} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';




const  Loader = (props) =>{


    const auth = useSelector(state => state.AuthReducer.auth);
    

    useEffect(()=>{

      if(auth === 'isLogin'){
          props.navigation.navigate('Home')
      }else{
        props.navigation.navigate('Login') 
      }

     },[])

    return(
        <View></View>
    )
}

export default Loader;