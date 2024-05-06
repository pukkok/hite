import React from "react";
import {SquareBox, ImgBox, Container} from "../../Components";
import './styles/NewsPage.css'
function NewsPage () {
    const datas = [
        {
            img: 'broad-hd.jpg',
            head: '보도자료',
            comment: '언론 속 하이트진로의 \n다양한 소식을 알려드립니다',

        },
        {
            img: 'social.jpg',
            head: '사회공헌',
            comment: '하이트진로의 사회공헌 활동은 \n모두가 즐겁고 행복한 세상을 \n만들기 위한 실천입니다.'            
        },
        {
            img: 'factory.jpg',
            head: '공장견학',
            comment: '하이트진로만의 최첨단 설비와 \n친환경이념이 담긴 생산공정을 \n직접 만나보세요.'            
        },
    ]

    return(
        <section className="NEWS">
            <Container>
            <div className="news-content">
            
            <SquareBox size={250}>
                <div className="text-box">
                    <h1>HITE <br/> NEWS</h1>
                    <h4>HITE의 소식을 만나보세요</h4>
                </div>
            </SquareBox>
            
            <article>
                {datas.map((data, id) => {
                    const {img, head, comment} = data
                    return (
                        <ImgBox key={id} src={`./imgs/news/${img}`}>
                            <div className="news-cover">
                                <h2>{head}</h2>
                                <p>{comment}</p>
                                <ImgBox addClass={'learn-more'}
                                src={'./imgs/icons/btn_hotclick_more.png'}/>
                            </div>
                        </ImgBox>
                    )
                })}
            </article>
            </div>
            </Container>
        </section>
    )
}

export default NewsPage