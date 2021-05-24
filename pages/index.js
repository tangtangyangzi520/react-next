/*
 * @Descripttion: 
 * @Date: 2021-05-20 15:48:36
 * @LastEditTime: 2021-05-24 16:59:03
 * @LastEditors: kiki
 * @Author: Kiki
 */
//index.js
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
    function gotoA () {
        Router.push('/time')
    }
    function gotoXiaojiejie(){
        Router.push('/xiaojiejie?name=huanhuan')
    }
    Router.events.on('routeChangeStart',(...args)=>{
        console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
    })
    Router.events.on('routeChangeComplete',(...args)=>{
        console.log('routeChangeComplete->路由结束变化,参数为:',...args)
    })
    Router.events.on('beforeHistoryChange',(...args)=>{
        console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
    })
    Router.events.on('hashChangeStart',(...args)=>{
        console.log('5,hashChangeStart->hash跳转开始时执行,参数为:',...args)
    })

    Router.events.on('hashChangeComplete',(...args)=>{
        console.log('6,hashChangeComplete->hash跳转完成时,参数为:',...args)
    })
    return (
        <div>
            <div>我是首页</div>
            <div><Link href="/xiaojiejie?name=波多野结衣"><a>去JspangA页面</a></Link></div>
            <div><Link href="/xiaojiejie?name=袅袅"><a>去JspangB页面</a></Link></div>
            <div>
                <button onClick={gotoA}>去JspangA页面</button>
            </div>
            <button onClick={gotoXiaojiejie}>选小红</button>
            <Link href={{pathname:'/xiaojiejie',query:{name:'结衣'}}}><a>选结衣</a></Link><br/>
            <div>
                <Link href="#jspang"><a>选JSPang</a></Link>
            </div>
        </div>
    )

}

export default Home