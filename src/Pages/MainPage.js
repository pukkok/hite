import React, { useEffect } from "react";
import { Header, Section1, Section2, Section3, Section4 } from './index'
import Footer from './Footer'

function MainPage(){

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(e=>{
                
                
                if(e.isIntersecting){
                    if(e.target === sections[1]){
                        console.log('aaa')
                        // s2Content.style.position = 'fixed'
                        sections[1].classList.add('on')
                        
                    }else{
                        s2Content.style.position = 'absolute'
                        sections[1].classList.remove('on')
                    }

                    if(e.target === cover){
                        s2Content.style.position = 'fixed'
                    }else{
                        s2Content.style.position = 'absolute'
                    }
                }
            })

        },{rootMargin: '-1px 0px'})

        const sections = document.querySelectorAll('section')
        sections.forEach(section=>observer.observe(section))
        const cover = document.querySelector('.section2 .cover')
        observer.observe(cover)
        const s2Content = sections[1].querySelector('.content')
    })

    return(
        <>
            <Header/>
            
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Footer/>
        </>

    )
}

export default MainPage