import React from "react";
import { Link } from "react-router-dom";
import './styles/Nav.css'

/** className : Nav-ul */
function Nav ({list, isImg, location, option, addClass, to, children}) {
    return(
        <ul className={addClass ? addClass : "Nav-ul"}>
            {isImg ? list.map((item, id)=>{
                return (
                    <li key={id}><Link to={`${to}/${id}`}>
                        <img alt="" src={`${location}/${option ? item[option] : item}`}/></Link></li>
                )
            }):
            list && list.map((item, id) => {
                return (
                    <li key={id}><Link to={`${to}/${id}`}>{item}</Link>{children}</li>
                )
            })
        }
        </ul>
    )
}

export default Nav

Nav.defaultProps = {
    isImg: false
}