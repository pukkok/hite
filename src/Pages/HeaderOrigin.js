import React from "react";
// import './styles/Header.css'
import { Nav, ImgBox, Container } from "../Components"
import navData from "../Datas/navData"
import hiteLogo from '../logo_hitejinro.png'

const LoginData = ['login', 'join', 'recruit', 'language']

function Header2 () {

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
                    <Nav list={main} />
                    <Nav list={LoginData} />
                </nav>
            </Container>
        </header>
    )
}

export default Header2