import React from "react";
import './styles/Section4.css'
import { Container, ImgBox, SquareBox } from "../../Components";
function Section4 (){
    return(
        <section className="section4">
            <Container>
                <div className="bg">
                    <ImgBox src={'./imgs/bg/a3.png'}/>
                    <ImgBox src={'./imgs/bg/a4.png'}/>
                    <ImgBox src={'./imgs/bg/a2.png'}/>
                    <ImgBox src={'./imgs/bg/a5.png'}/>
                    <ImgBox src={'./imgs/bg/b1.png'}/>
                    <ImgBox src={'./imgs/bg/b2.png'}/>
                </div>
                <div className="news">
                    <SquareBox size={250}>
                        <div className="text-box">
                            <h1>HITE <br/> NEWS</h1>
                            <h4>HITE의 소식을 만나보세요</h4>
                        </div>
                    </SquareBox>
                    
                    <article>
                        <ImgBox src={'./imgs/news/broad-hd.jpg'}>
                            <div className="news-cover">
                                <h2>보도자료</h2>
                                <p>언론 속 하이트진로의 <br/>
                                다양한 소식을 알려드립니다 </p>
                                <ImgBox addClass={'learn-more'} src={'./imgs/icons/btn_hotclick_more.png'}/>
                            </div>
                        </ImgBox>
                        <ImgBox src={'./imgs/news/social.jpg'}>
                            <div className="news-cover">
                                <h2>사회공헌</h2>
                                <p>하이트진로의 사회공헌 활동은<br/>
                                모두가 즐겁고 행복한 세상을<br/>
                                만들기 위한 실천입니다. </p>
                                <ImgBox addClass={'learn-more'} src={'./imgs/icons/btn_hotclick_more.png'}/>
                            </div>
                        </ImgBox>
                        <ImgBox src={'./imgs/news/factory.jpg'}>
                            <div className="news-cover">
                                <h2>공장견학</h2>
                                <p>하이트진로만의 최첨단 설비와<br/>
                                친환경이념이 담긴 생산공정을<br/>
                                직접 만나보세요.</p>
                                <ImgBox addClass={'learn-more'} src={'./imgs/icons/btn_hotclick_more.png'}/>
                            </div>
                        </ImgBox>
                    </article>
                </div>

                <div className="SNS">
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
export default Section4