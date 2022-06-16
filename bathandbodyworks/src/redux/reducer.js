import { ADDRESS_DATA, ADD_PRODUCT, AUTH } from "./action";

const initState = {
    auth : false,
    products:[],
    userAddress:{}
}

export const reducer = (store=initState,{type,payload})=>{
    switch(type){
        case ADD_PRODUCT:
            return {...store,products:[...store.products,payload]}
        case AUTH:
            return {...store,auth:payload}
        case ADDRESS_DATA:    
            return {...store,userAddress:payload}
        default:
            return store;
    }
}