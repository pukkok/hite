import React from "react";
import imgsData from "../Datas/imgsData";
import { ImgBox } from "../Components";
import {Container} from '../Components'
import './styles/Section1.css'

function Section1 (){
    const datas = imgsData.section1
    const { main, sub } = datas

    return(
        <section className="section1">
            <div className="bg">
                {main && main.map((img, id)=>{
                    return <ImgBox key={id} src={`/imgs/main/${img}`}/>
                })}
            </div>
            <Container>
                <div className="bg2">
                    {sub && sub.map((img, id)=>{
                        return <ImgBox key={id} src={`/imgs/main/${img}`}/>               })}
                </div>
            </Container>
        </section>
    )
}

export default Section1