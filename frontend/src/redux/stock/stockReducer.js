import { STOCK_FAILURE,STOCK_LOADING,STOCK_SUCCESS } from "./actionType";
const initial = {
    loading:false,
    error:false,
    stockArr:[]
}

export const stockReducer = (state=initial,{type,payload})=>{
        switch (type) {
            case STOCK_LOADING:return {...state,error:false,loading:true};
            case STOCK_FAILURE:return {...state,error:true,loading:false};
            case STOCK_SUCCESS:return {...state,error:false,loading:false,stockArr:payload};
            default: return {...state};
        }
}