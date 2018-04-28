import 'core-js/fn/string/includes'
import React, { Component }  from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'reactstrap';
import Head from 'next/head'
import { withI18next } from '../lib/withI18next'
import * as $ from 'jquery'
// redux
import { initStore, startClock, addCount, serverRenderClock, getInfo } from '../store'
import withRedux from '../utils/withRedux'
import { bindActionCreators } from 'redux'
import { getSwiperInfo } from "../redux/actions/swiperInfo"
import { getGlassList } from '../redux/actions/glassList'
import { getUserList } from '../redux/actions/userShow'
// components
import Swiper from './../components/swiper';
import PureComponent from '../components/PureComponent'
import axios from 'axios'
// component
/**
 * 首页
 * 
 * @class Index
 * @extends {Component}
 */
class App extends Component {
    static async getInitialProps({ store, req, res, isServer },lang){
        let json,lan;
        // 获取需要渲染的语言
        if(isServer){
            lan = lang.initialLanguage;
        }
        // 发起语言特性的特殊请求
        json =await axios('http://localhost:3000/static/mock.json')
        return { isServer, json:json.data }
    }
    constructor(props){
        super(props)
        this.t = this.props.t;
        // 根据这个变量来确认请求不同语言的接口
        this.lang = this.props;
        // console.log(this.props,'lang'.repeat(100))
        //en-US,zh-CN
    }
    componentDidMount() {
        axios.get('test').then((res)=>{
            console.log(res)
        });
        const a = {a:1};
        const b = {b:2};
        console.log(Object.assign(a,b));
        console.log('firmoo'.includes('fir'))
        // this.props.getSwiperInfo();
        // this.timer = this.props.startClock()
    }
    render(){
        function test(){
            // const a = { a: 1 };
            // const b = { b: 2 };
            // console.log(Object.assign(a, b));
        }
        return (
            <div>
                <Head>
                    <link href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"></link>
                </Head>
                <h1>{this.t('welcome')}</h1>
                <p>{this.t('common:integrates_react-i18next')}</p>
                <span>{this.props.json.data}</span>
                <Swiper swiperInfo={this.props.json ? this.props.json.data:[]}/>
                <ul>
                    <li><a href="javascript:void(0)" onClick={() => Router.push('/b',{shallow:false})}>aa</a></li>
                    <li><Link href='/a' as='/b'><a>b</a></Link></li>
                </ul>
                <div>
                    <Button color="primary" onClick={()=>test()}>primary</Button>
                </div>
                <PureComponent t={this.t}/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSwiperInfo: bindActionCreators(getSwiperInfo, dispatch),
    }
  }
const withI18n = withI18next(['home', 'common'])(App);
const wuthR = withRedux(initStore, null, mapDispatchToProps)(withI18n)
export default wuthR