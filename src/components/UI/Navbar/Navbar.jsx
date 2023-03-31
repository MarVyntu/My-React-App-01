import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";



const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <>

        <div className="navbar">
            <div className="navbar__logo">
             <a href='/'> <img src="./logo-4petals.png" alt="logo" /></a>
            </div>
            <div className="navbar__links">              
                <Link className='navbar__link' to="/about">About me</Link>
                <Link className='navbar__link' to="/posts">Posts</Link>
                <MyButton className='navbar__link' onClick={logout}>
                Login
                </MyButton>
            </div>
        </div>
        </>
    );
};

export default Navbar;



{/* <Head>
  <title>Maryan Vyntu | 4petals </title>
  <meta name='title' content='Maryan Vyntu'/>
  <link rel="shortcut icon" href="/logoM8.png" type="image/png" />
</Head> */}