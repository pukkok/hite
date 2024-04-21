import React, { useEffect, useRef, useState } from "react";
import { Header, Sidebar, Section1, Section2, Section3 } from './index'
import { Container } from "../Components";

function MainPage(){

    const x = useRef()

    // useEffect(()=>{
    //     const observer = new IntersectionObserver((entries)=>{
    //         entries.forEach(e=>{
    //             if(e.intersectionRatio>0.5){
    //                 console.log(e.target)
    //             }
                
    //             if(e.isIntersecting){
    //                 if(e.target === sections[1]){
    //                     // s2Content.style.position = 'fixed'
    //                     sections[1].classList.add('on')
    //                     console.log('2번')
                        
    //                 }else{
    //                     s2Content.style.position = 'absolute'
    //                     sections[1].classList.remove('on')
    //                 }

    //                 if(e.target === cover){
    //                     console.log('커버')
    //                 }else{
    //                 }
    //             }
    //         })

    //     })

    //     const sections = document.querySelectorAll('section')
    //     sections.forEach(section=>observer.observe(section))
    //     const cover = document.querySelector('.section2 .cover')
    //     // observer.observe(cover)
    //     const s2Content = sections[1].querySelector('.content')
    // })

    return(
        <>
            <Header/>
            <Sidebar/>
            <Section1/>
            <Section2/>
            <Section3/>
        </>

    )
}

export default MainPage