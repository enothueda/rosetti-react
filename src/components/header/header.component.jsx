import React from 'react';

import logo from '../../assets/rosetti-logo.png';

import './header.styles.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt={logo} className='logo'/>
            </div>
            <div className='menu'>
                <p className='option'>Quienes Somos</p>
                <p className='option'>Servicios</p>
                <p className='option'>Preguntas Frecuentes</p>
            </div>	
        </div>
    )
}

export default Header;