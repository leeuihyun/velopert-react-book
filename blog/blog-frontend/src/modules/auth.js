import { createAction, handleActions } from 'redux-actions';
import {produce} from 'immer';


const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIAILIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
    CHANGE_FIELD,
    ({form,key,value})=>({
        form, //register
        key, //username,password,passwordConfirm
        value // 실제 바꾸려는 값
    })
)

export const initializeForm = createAction( //register
    INITIAILIZE_FORM,
    form => form
)

const initialState = {
    register : {
        username : '',
        password : '',
        passwordConfirm : '',
    },
    login : {
        username : '',
        password : '',
    }
};

const auth = handleActions(
  {
    [CHANGE_FIELD] : (state,{payload : {form,key,value}})=>
        produce(state,draft=>{
            draft[form][key] = value;//예 : state.register.username
        }),
    [INITIAILIZE_FORM] : (state,{payload : form})=>({
        ...state,
        [form] : initialState[form]
    })
  },
  initialState,
);

export default auth;
