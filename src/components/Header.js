import React from 'react'
import '../App.css';
import { HashRouter, Link } from 'react-router-dom'
import logo from './media/logo.svg';
export const Header = () => {
    return (
        <HashRouter>
            <header>
                <nav className='nav-header'>
                    <ul className='ul-sections'>
                    <li><Link to=''><img className='logo' src={logo} alt="Descripción de la imagen" /></Link></li>
                        <li><Link to='inicio'>INICIO</Link></li>
                        <li><Link to='nosotros'>NOSOTROS</Link></li>
                        <li><Link to='trabajos'>TRABAJOS</Link></li>
                        <li><Link to='contacto'>CONTACTO</Link></li>
                    </ul>
                </nav>
            </header>
        </HashRouter>

    )
}
