import React from "react";
import siteMapData from "../Datas/footerSiteMap";
import policyData from "../Datas/footerPolicy";
import Nav from "../Components/Nav";
import './styles/Footer.css'
import { Link } from "react-router-dom";
import Container from "../Components/Container";

function Footer () {
    const keys = Object.keys(siteMapData)

    return(
    <footer>
        <Container>
            <nav className="site-map">
                {keys.map((key,id) => {
                    return (
                        <ul key={id}>
                            <li className="title"><Link>{key}</Link>
                                <ul className="depth1">
                                    {siteMapData[key].map((data, id)=>{
                                        return(
                                            <li key={id}>
                                                <Link>{data.depth1}</Link>
                                                {data.depth2 && 
                                                    <Nav addClass={'depth2'}
                                                    list={data.depth2}/>
                                                }
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        </ul>
                    )
                })}
            </nav>
        </Container>
            <div className="body">
                <Container>
                    <Nav addClass={'policy'} list={policyData.policy}></Nav>
                    <nav className="sns">
                        하이트진로 SNS
                        <Nav list={policyData.sns}/>
                    </nav>
                    <nav className="family">
                        패밀리 사이트
                        <Nav list={policyData.family} />
                    </nav>
                </Container>
            </div>

            <div className="footer">
                <span className="address">
			        (06075) 서울특별시 강남구 영동대로 714 하이트진로빌딩 /
                </span>
                <span className="tel">
                    대표전화 02-3219-0114 / 사업자등록번호 214-81-00777
                </span>
                <div className="copyright">
                    Copyright© 2016 HITEJINRO CO.LTD. ALL RIGHTS RESERVED.
                </div>
            </div>
        

    </footer>
)

    
}

export default Footer


