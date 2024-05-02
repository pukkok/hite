import React from "react";

/** maxWidth (단위x) */
function maxContainer ({maxWidth, children}) {
    
    return(
        // <div className="Container" style={{maxWidth: maxWidth+'px', margin: '0 auto'}}>
        //     {children}
        // </div>
        <div className="Container" style={{width: maxWidth+'px', margin: '0 auto'}}>
            {children}
        </div>
    )
}

export default maxContainer

maxContainer.defaultProps = {
    maxWidth: '1280'
}