import React, { Component }  from 'react'
import Link from 'next/link'
import { Button } from 'reactstrap';
import Head from 'next/head'
import { withI18next } from '../lib/withI18next'
// redux
import { initStore, startClock, addCount, serverRenderClock, getInfo } from '../store'
import withRedux from '../utils/withRedux'
import { bindActionCreators } from 'redux'
import { getSwiperInfo } from "../redux/actions/swiperInfo"
import { getGlassList } from '../redux/actions/glassList'
import { getUserList } from '../redux/actions/userShow'
import Swiper from './../components/swiper';
// component
/**
 * 首页
 * 
 * @class Index
 * @extends {Component}
 */
class Index extends Component {
  static async getInitialProps({ store, req, res, isServer }){
    if (isServer) {
      const { slugDoctor } = req.query
      await store.dispatch(getSwiperInfo())
    }
    return {isServer}
  }
  constructor(props){
    super(props)
    this.t = this.props.t;
    // 根据这个变量来确认请求不同语言的接口
    const lang = this.props.i18n.language
    //en-US,zh-CN
  }
  componentDidMount() {
    // this.props.getSwiperInfo();

    // this.timer = this.props.startClock()
  }
  render(){
    return (
      <div>
        <Head>
          <link href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"></link>
        </Head>
        <h1>{this.t('welcome')}</h1>
        <p>{this.t('common:integrates_react-i18next')}</p>
        <Swiper/>
        <ul>
          <li><Link href='/b' as='/a'><a>a</a></Link></li>
          <li><Link href='/a' as='/b'><a>b</a></Link></li>
        </ul>
        <div>
          <Button color="primary">primary</Button>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSwiperInfo: bindActionCreators(getSwiperInfo, dispatch),
    getGlassList: bindActionCreators(getGlassList, dispatch),
    getUserList: bindActionCreators(getUserList, dispatch)
  }
}
const withI18n = withI18next(['home', 'common'])(Index);
const wuthR = withRedux(initStore, null, mapDispatchToProps)(withI18n)
export default wuthR