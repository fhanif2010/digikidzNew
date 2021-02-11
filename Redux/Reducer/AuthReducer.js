const initialState ={
    
    auth:"",
    profil:{
    name:"",
    address:"",
    number:"",
    email:"",
    uid:"",
    dob:""
    }

}
const authReducer = (state=initialState,actions) =>{
        switch (actions.type) {
            case 'LOGIN':
                return{...state,auth:'isLogin',name:actions.name,address:actions.address,number:actions.number,email:actions.email,uid:actions.uid,dob:actions.dob}
            case 'LOGOUT':
                return {...state,auth:'isLogout',name:"",address:"",number:"",email:"",dob:"",uid:""}
            default:
               return state;
        }
}

export default authReducer;