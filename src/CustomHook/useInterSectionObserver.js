import React, { useRef } from "react";

function useIntersectionObserver( f ){
    const observer = useRef(
        new IntersectionObserver((entries, observer)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    f()
                }
            })
        })

    )

    const observe = (element) => {
        observer.current.observe(element);
    }
    
    const unobserve = (element) => {
        observer.current.unobserve(element);
    }
    
    return [observe, unobserve]
}

export default useIntersectionObserver