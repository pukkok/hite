import React from "react";
import { Link } from "react-router-dom";

function ImgBox ({src, path, addClass}) {
    return(
        <div className={addClass ? addClass : 'img-box'}>
            {path ? 
            <Link to={path}>
                <img src={src} style={{width:'100%', height: '100%'}}/>
            </Link> :
                <img src={src} style={{width:'100%', height: '100%'}}/>
            }
        </div>
    )
}

export default ImgBox