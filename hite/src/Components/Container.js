import React from "react";

/** maxWidth (단위x) */
function Container ({maxWidth, children}) {
    
    return(
        <div className="Container" style={{maxWidth: maxWidth+'px', margin: '0 auto'}}>
            {children}
        </div>
    )
}

export default Container

Container.defaultProps = {
    maxWidth: '1280'
}