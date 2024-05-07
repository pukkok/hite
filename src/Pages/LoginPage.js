import React from "react";
import './styles/LoginPage.css'

function LoginPage () {

    return(
        <div className="login-box">
            <header>
                <h1>LOGIN</h1>
                <p>하이트진로 기업사이트 및 게열사 사이트를 
                    통합 아이디로 로그인 하실 수 있습니다.</p>
            </header>
            <form method="post">
                <div>
                    <input type="text" placeholder="아이디"/>
                    <input type="password" placeholder="비밀번호"/>
                </div>
                <button type="submit">로그인 →</button>
            </form>
            <div className="small-box">
                <div>
                    <h2>통합 회원이 아니신가요?</h2>
                    <h3> 회원가입을 하시면 하나의 계정으로 <br/> 다양한 서비스를 이용하실수 있습니다.</h3>
                    <button>회원가입 →</button>
                </div>
                <div>
                    <h2>아이디/비밀번호를 잊으셨나요?</h2>
                    <h3>회원님의 개인정보 또는 IPIN으로 <br/> 아이디/비밀번호를 찾을 수 있습니다.</h3>
                    <button>아이디/비밀번호 찾기 →</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage