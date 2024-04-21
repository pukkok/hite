import React, { useEffect, useRef, useState } from "react";
import './styles/Sidebar.css'
// import { ImgBox , Nav } from "../Components";
import brandData from "../Datas/brandData";
import Nav from "../Components/Nav";

function Sidebar () {
    let keys = Object.keys(brandData)
    // const {beer, soju, whiskey, wine, imported, sake, extra, international, spirit } = brandData


    let prevItem
    const subOpen = (e) =>{
        const brandItem = e.target.parentElement.parentElement
        const main = document.querySelectorAll('.main-item img')
            keys.forEach((key, i)=>{
                if(e.target === main[i]){
                    if(prevItem) prevItem !== brandItem ?
                    prevItem.classList.remove('on') : prevItem.classList.add('on')
        
                    if(brandItem.classList.contains(key)){
                        brandItem.classList.add('on')
                        prevItem = brandItem
                    }
                }
            })
    }

    const resetSidebar = () => {
        const brand = document.querySelectorAll('.brand-item')
        brand.forEach(item=>{
            item.classList.remove('on')
        })
    }

    return(
        <div className="side-bar" onMouseLeave={resetSidebar}>
            <div className="top-menu" >
                <img src="/imgs/gnb/gnb_brand_menu_1.png" alt=""/>
            </div>
            {keys && keys.map((key, id)=>{
                let data = brandData[key]
                return (
                    <div className={`brand-item ${key}`} key={id} onMouseOver={subOpen}>
                    <div className="main-item">
                        <img src="/imgs/gnb/gnb_brand_menu_2.png" style={{top:-100*id +'px'}} alt=""/>
                    </div>
                    <ul className={`sub-item`}>
                        {data.imgs.map((img, id)=>{
                            return(
                                <li key={id}><img src={`/imgs/gnb/${img}`} alt=""/></li>
                            )
                        })}
                    </ul>
                </div>
                )
            })}
        </div>
    )
}

export default Sidebar