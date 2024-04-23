import React from "react";
import { Container, ImgBox, Nav } from "../Components";
import './styles/SubPage.css'
import subData from "../Datas/subData";

const subList = ['HOME', '진로골드', 'TV CF', 'PRINT']

function SubPage () {
    console.log(subData[0])
    const {name, cf_title, detail, bottle, pet, alc, description} = subData[0]

    return(
        <div className="Sub-page">
            <div className="box"></div>
            <ImgBox src={'/imgs/sub/jinro-gold.jpg'}/>


    <div>
        <Container maxWidth={'1000'}>
            <Nav list={subList}/>
        </Container>
    </div>

    <div className="Sub-page-info">
        <Container maxWidth={'1000'}>
            <div className="title">
                <h1>{name}</h1>
            </div>
            <div className="brand-content">
                <h4>{cf_title}</h4>
                <p>{detail}</p>
            </div>
            <div className="table">
            <p>PRODUCT INFORMATION</p>
            <div className="bottle-size">
                <p>병</p><ImgBox addClass={'bottle'} src={'imgs/sub/img_bottle.png'}/><p> {bottle}ml</p>
                <p>페트</p><ImgBox addClass={'pet'} src={'imgs/sub/img_pet.png'}/> <p>{pet}ml</p> 
            </div>
            <div>
            </div>
                <p>{alc}</p>
                <p>{description}</p>
            </div>
        </Container>
    </div>

        </div>
    )
}
export default SubPage