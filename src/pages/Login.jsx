import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import background from './images/background-grey.png';


const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (    
        <>   
           <div className="login">
                <div className='login-page'>
                    <h1>Please login</h1>
                    <form onSubmit={login}>
                        <MyInput type="text" placeholder="Enter login"/>
                        <MyInput type="password" placeholder="Enter password"/>
                        <MyButton>Enter</MyButton>
                    </form>
                </div>
            </div>   
        </>             
    );
};

export default Login;
