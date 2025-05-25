import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import RegisterForm from "./RegisterForm/RegisterForm";

import { registerUser } from "../../redux/auth/auth-thunks";

import { selectAuthSuccess } from "../../redux/auth/auth-selector";
import { useEffect } from "react";


const Register = () => {

    const success = useSelector(selectAuthSuccess);

    const dispatch = useDispatch();

    const onRegiserUser = ({ confirmPassword, ...data }) => {
        dispatch(registerUser(data));
    }

    useEffect(() => {
        if (success) {
            alert("Registration successful!");
        }
    }, [success]);

    if (success)
        return <Navigate to="/login" />

    return (
        <div>
            <RegisterForm submitForm={onRegiserUser} />
        </div>
    )
};

export default Register;