
import React from 'react'
import '../assets/styles/components/Header.scss'
import Logo from '../assets/statics/logo-platzi-video-BW2.png'
import UserIcos from '../assets/statics/user-icon.png'

const Header = () =>{
    return(

        <header className="header">
        <img className="header__img" src={Logo} alt="Platzi Video"/>
        <div className="header__menu">
        <div className="header__menu--profile">
            <img src={UserIcos} alt=""/>
            <p>Perfil</p>
        </div>
        <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
        </ul>
        </div>
        </header>
    )

}

export default Header