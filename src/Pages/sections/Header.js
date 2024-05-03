import React from "react";
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

    return(
        <header>
            <Container>
                <nav>
                    <ImgBox addClass={'logo'} src={hiteLogo} path={'/'}/>
                    <Nav list={main} addClass={'main-nav'}/>
                    <Nav list={LoginData} addClass={'login-nav'} />
                </nav>
            </Container>
        </header>
    )
}

export default Header