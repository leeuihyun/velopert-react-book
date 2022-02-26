import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {changeField,initializeForm} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

function LoginForm() {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth})=>({
        form : auth.login
    }));
    const onChange = (e) => {
        const {value,name} = e.target;
        dispatch(changeField({
            form : 'login',
            key : name,
            value
        }));
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    useEffect(()=>{
        dispatch(initializeForm('login'));
    },[dispatch]);
  return (
    <div>
        <AuthForm
            type = 'login'
            onChange = {onChange}
            onSubmit = {onSubmit}
            form = {form}
        ></AuthForm>
    </div>
  )
}

export default LoginForm;