import React from "react";
import { Link } from "react-router-dom";
import './styles/Nav.css'

/** className : Nav-ul */
function Nav ({list}) {
    return(
        <ul className="Nav-ul">
            {list && list.map((item, id) => {
                return (
                    <li key={id}><Link>{item}</Link></li>
                )
            })}
        </ul>
    )
}

export default Nav