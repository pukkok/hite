import React from "react";
import './styles/SquareBox.css'

/** size : 박스크기(단위 필요x) lineColor : 라인색상 */
function SquareBox ({size, lineColor, lineDuration}) {
    const boxSize = {
        width: size + 'px',
        height: size + 'px'
    }

    const LineStyle = {
        backgroundColor: lineColor,
        animationDuration: lineDuration,
        // animationDelay: lineDuration * +id
    }

    return(
        <div className="square" style={boxSize}>
            <div className="line-top line-x" style={LineStyle}></div>
            <div className="line-right line-y" style={LineStyle}></div>
            <div className="line-bottom line-x" style={LineStyle}></div>
            <div className="line-left line-y" style={LineStyle}></div>
        </div>
    )
}

export default SquareBox

SquareBox.defaultProps = {
    size: '500',
    lineColor: 'white',
    lineDuration: '.8s'
}
