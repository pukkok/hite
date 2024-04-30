import React, { useEffect, useRef } from "react";
import { ImgBox, SquareBox } from "../Components";
import './styles/Section2.css'

function Section2 () {

    return(
        <section className="section2">
            <div className="content">
                <SquareBox size={'100'}/>
            </div>

            <ImgBox addClass={'bg'} src={"/imgs/section2/bg.jpg"}/>

            <div className="cover">
                
            </div>

        </section>
    )
}

export default Section2