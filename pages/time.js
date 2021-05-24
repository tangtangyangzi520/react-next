/*
 * @Descripttion: 
 * @Date: 2021-05-24 16:56:50
 * @LastEditTime: 2021-05-24 17:59:58
 * @LastEditors: kiki
 * @Author: Kiki
 */
// import React, {useState} from 'react'
// import momnet from 'momnet'

// function Time(){
//     // let aa=Date.now()
//     // const [nowTime,setTime] = useState(aa)
//     const nowTime=useState('232323')
//     const changeTime=()=>{
//         // console.log('111',momnet(Date.now().format()))
//         // setTime(momnet(Date.now()).format())
//         // console.log('222',nowTime)
//     }
//     return (
//         <>
//             <div>显示时间为:{nowTime}</div>
//             <div><button onClick={changeTime}>改变时间格式</button></div>
//         </>
//     )
// }
// export default Time
import React, {useState} from 'react'
// import moment from 'momnet'
import dynamic from 'next/dynamic'
// const One = dynamic(import('../components/one'))
function Time(){
    const [nowTime,setTime] = useState()
    const changeTime=()=>{
        setTime(new Date().getTime())
    }
    return (
        <div>
            <div>显示时间为:{nowTime}</div>
            {/* <One/> */}
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </div>
    )
}
export default Time