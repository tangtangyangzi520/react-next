/*
 * @Descripttion: 
 * @Date: 2021-05-21 13:46:28
 * @LastEditTime: 2021-05-24 16:55:40
 * @LastEditors: kiki
 * @Author: Kiki
 */
//jspang.js
import React, {useState} from 'react'
function Jspang () {
    const [color,setColor] = useState('blue')
    const changeColor=()=>{
        console.log('111',color)
        setColor(color=='blue'?'red':'blue')
    }
    return (
        <>
            <div>tyy</div>
            <div><button onClick={changeColor}>改变颜色</button></div>
            <style jsx>
                {`
                div{color:${color};}
            `}
            </style>
        </>
    )
}
export default Jspang