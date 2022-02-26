import { useDispatch,useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { initializeForm,changeField } from "../../modules/auth";
import { useEffect } from "react";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth})=>({
        form : auth.register
    }));
    useEffect(()=>{
        initializeForm('register');
    },[dispatch]);
    const onChange = e =>{
        const {value,name} = e.target;
        dispatch(changeField({
            form : 'register',
            key : name,
            value
        }))
    }
    const onSubmit = e => {
        e.preventDefault();
    }
    return(
        <AuthForm
            type = 'register'
            form = {form}
            onChange = {onChange}
            onSubmit = {onSubmit}
        ></AuthForm>
    )
}

export default RegisterForm;
