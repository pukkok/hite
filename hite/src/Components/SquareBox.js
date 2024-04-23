import React from "react";
import './styles/SquareBox.css'

/** size : 박스크기(단위 필요x) lineColor : 라인색상 */
function SquareBox ({size, thick, lineColor, lineDuration}) {
    const boxSize = {
        width: size + 'px',
        height: size + 'px'
    }

    // 1번 방향 위 오 아 왼 어디서부터??
    // 2번 두깨 한쪽은 linex = width : 100% height:5px // liney = height : 100% width:5px
    // 2번 변수 하나 추가

    // 3번 딜레이 : 1번 따라서 딜레이 * [0, 1, 2, 3]

    const lineX = {
        width: '100%',
        height: thick + 'px'
    }

    const lineY = {
        width: thick + 'px',
        height: '100%'
    }

    const LineStyle = {
        backgroundColor: lineColor,
        animationDuration: lineDuration,
        // animationDelay: lineDuration * +id
    }

    return(
        <div className="square" style={boxSize}>
            <div className="line-top line-x" style={{...LineStyle, ...lineX}}></div>
            <div className="line-right line-y" style={{...LineStyle, ...lineY}}></div>
            <div className="line-bottom line-x" style={{...LineStyle, ...lineX}}></div>
            <div className="line-left line-y" style={{...LineStyle, ...lineY}}></div>
        </div>
    )
}

export default SquareBox

SquareBox.defaultProps = {
    size: '500',
    lineColor: 'white',
    lineDuration: '.8s',
    thick: '10px'
}
