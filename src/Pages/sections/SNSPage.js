import React, { useEffect } from "react";
import { Container, ImgBox, SquareBox } from "../../Components";
import './styles/SNSPage.css'

function SNSPage (){

    const bgImg = ['a3.png', 'a4.png', 'a2.png', 'a5.png', 'b1.png', 'b2.png']

    // useEffect(()=>{
    //    const observer = IntersectionObserver()
    // })

    return(
        <section className="SNS">
            <Container>
                <div className="bg">
                    {bgImg.map((img, id) => {
                        return <ImgBox key={id} src={`./imgs/bg/${img}`}/>
                    })}
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