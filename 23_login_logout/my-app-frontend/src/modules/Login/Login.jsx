import { useSelector, useDispatch } from "react-redux"; 
import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";

import LoginForm from "./LoginForm/LoginForm";

import { loginUser } from "../../redux/auth/auth-thunks";
import { selectIsLogin } from "../../redux/auth/auth-selector";

const Login = () => {
    const isLogin = useSelector(selectIsLogin);
    const dispatch = useDispatch();

    const didAlert = useRef(false);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const onLoginUser = data => {
        dispatch(loginUser(data));
    };

    useEffect(() => {
        if (isLogin && !didAlert.current) {
            alert("Login successful!");
            didAlert.current = true;

            // Задержка перед переходом
            setTimeout(() => {
                setShouldRedirect(true);
            }, 200); // 100 мс хватит, чтобы alert сработал
        }
    }, [isLogin]);

    if (shouldRedirect) return <Navigate to="/profile" />;

    return (
        <div>
            <LoginForm submitForm={onLoginUser} />
        </div>
    );
};

export default Login;


// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { Navigate } from "react-router-dom";

// import LoginForm from "./LoginForm/LoginForm";

// import { loginUser } from "../../redux/auth/auth-thunks";
// import { selectIsLogin } from "../../redux/auth/auth-selector";

// const Login = () => {
//     const isLogin = useSelector(selectIsLogin);
//     const dispatch = useDispatch();

//     const onLoginUser = data => {
//         dispatch(loginUser(data));
//     };

//     useEffect(() => {
//         if (isLogin) {
//             alert("Login successful!");
//         }
//     }, [isLogin]);

//     if (isLogin) return <Navigate to="/profile" />;

//     return (
//         <div>
//             <LoginForm submitForm={onLoginUser} />
//         </div>
//     );
// };

// export default Login;


// import { useSelector, useDispatch } from "react-redux";
// import { Navigate } from "react-router-dom";

// import LoginForm from "./LoginForm/LoginForm";

// import { loginUser } from "../../redux/auth/auth-thunks";

// // import { selectIsLogin } from "../../redux/auth/auth-selector";

// const Login = () => {
//     // const isLogin = useSelector(selectIsLogin);

//     const dispatch = useDispatch();

//     const onLoginUser = data => {
//         dispatch(loginUser(data));
//     }

//     // if (isLogin) return <Navigate to="/profile" />

//     return (
//         <div>
//             <LoginForm submitForm={onLoginUser} />
//         </div>
//     )
// }

// export default Login;