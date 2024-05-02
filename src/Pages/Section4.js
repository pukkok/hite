import React from "react";
import './styles/Section4.css'
import { Container, ImgBox, SquareBox } from "../Components";
function Section4 (){
    return(
        <section className="section4">
            <Container>
                <div className="news">
                    <SquareBox size={300}>
                        News
                    </SquareBox>
                    {/* <div className="square-test">News</div> */}
                    
                    <article>
                        <ImgBox src={'./imgs/news/broad-hd.jpg'}/>
                        <ImgBox src={'./imgs/news/factory.jpg'}/>
                        <ImgBox src={'./imgs/news/social.jpg'}/>
                    </article>
                </div>
            </Container>
        </section>
    )
}
export default Section4