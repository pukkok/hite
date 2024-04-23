import React, { useState } from "react";
import './styles/Sidebar.css'
import { ImgBox , Nav } from "../Components";
import brandData from "../Datas/brandData";
import { Link } from "react-router-dom";
import classNames from 'classnames';

function Sidebar () {
    const [activeItem, setActiveItem] = useState(null)
    let keys = Object.keys(brandData)
    // const {beer, soju, whiskey, wine, imported, sake, extra, international, spirit } = brandData

    const subOpen = (id) =>{
        setActiveItem(id)
    }

    const resetSidebar = () => {
        setActiveItem(null)
    }
    
    return(
        <div className="side-bar" onMouseLeave={resetSidebar}>
            <div className="top-menu" >
                <img src="/imgs/gnb/gnb_brand_menu_1.png" alt=""/>
            </div>
            {keys && keys.map((key, id)=>{
                let data = brandData[key]
                return (
                    <div className={classNames(`brand-item` ,key , {on: activeItem===id})} key={id} onMouseOver={() => subOpen(id)}>
                    <div className="main-item">
                        <Link><img src="/imgs/gnb/gnb_brand_menu_2.png" style={{top:-100*id +'px'}} alt=""/></Link>
                    </div>
                    <Nav list={data.imgs} isImg={true} location={'/imgs/gnb'} 
                    addClass={'sub-item'} to={`/brand/${key}`}></Nav>
                </div>
                )
            })}
        </div>
    )
}

export default Sidebar