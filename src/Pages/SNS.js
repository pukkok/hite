import React from "react";
import { Container, ImgBox, SquareBox } from "../Components";
function SNSPage (){
    return(
        <section className="SNS">
            <Container>
                <div className="bg">
                    <ImgBox src={'./imgs/bg/a3.png'}/>
                    <ImgBox src={'./imgs/bg/a4.png'}/>
                    <ImgBox src={'./imgs/bg/a2.png'}/>
                    <ImgBox src={'./imgs/bg/a5.png'}/>
                    <ImgBox src={'./imgs/bg/b1.png'}/>
                    <ImgBox src={'./imgs/bg/b2.png'}/>
                </div>
                
                <div className="content">
                    <SquareBox size={270} lineColor={'#a4b7b1'}>
                        <div className="text-box">
                            <h1>HITE <br/> SNS</h1>
                            <h4>NEW 하이트진로</h4>
                        </div>
                    </SquareBox>
                    <article>
                        <ImgBox src={'./imgs/sns/fb_cover.jpg'}/>
                        <ImgBox src={'./imgs/sns/fb_cover3.jpg'}/>
                        <ImgBox src={'./imgs/sns/blog_cover.jpg'}/>
                        <ImgBox src={'./imgs/sns/blog_cover2.png'}/>
                        <ImgBox src={'./imgs/sns/insta_cover1.jpg'}/>
                        <ImgBox src={'./imgs/sns/insta_cover2.jpg'}/>
                        <ImgBox src={'./imgs/sns/insta_cover3.jpg'}/>
                    </article>
                </div>
            </Container>
        </section>
    )
}
export default SNSPage