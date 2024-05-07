import React, { useEffect } from "react";
import './styles/Header.css'
import { Nav, ImgBox, Container } from "../../Components"
import navData from "../../Datas/navData"
import LoginPage from "../LoginPage";
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

    
    const xx = () => {
        window.open(`${window.location.href}login`, '_black', 'width=550px, height=550px')
    }

    return(
        <header>
            <Container>
                <nav>
                    <button onClick={xx}>test</button>
                    <ImgBox addClass={'logo'} src={hiteLogo} path={'/'}/>
                    <Nav list={main} addClass={'main-nav'}/>
                    <Nav list={LoginData} target='_blank' addClass={'login-nav'} />
                </nav>
            </Container>
        </header>
    )
}

export default Header