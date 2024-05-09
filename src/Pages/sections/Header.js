import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './styles/Header.css'
import { Nav, ImgBox, Container } from "../../Components"
import navData from "../../Datas/navData"
import hiteLogo from './styles/logo_hitejinro.png'
const LoginData = ['login', 'join', 'recruit', 'language']

function Header () {

    const mapping = (data, name) => {
        const _name = data
        .map((item) => {
            return item[name]
        })
        return _name
    }
    const main = mapping(navData, 'main')


    
    function openLogin (e) {
        e.preventDefault()
        window.open(
            e.target.href,
            '_blank',
            `width=550 height=500
            top=100 left=150`
        )
    }

    return(
        <header>
            <Container>
                <nav>
                    <ImgBox addClass={'logo'} src={hiteLogo} path={'/'}/>
                    <Nav list={main} addClass={'main-nav'}/>
                    <ul className="login-nav">
                        <li><Link to="login" onClick={openLogin}>login</Link></li>
                        <li><Link to="a">join</Link></li>
                        <li><Link to="b">recruit</Link></li>
                        <li><Link to="c">language</Link></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header