import axios from 'axios'
export const GET_SWIPER_INFO_REQUEST ="swiper/GET_SWIPER_INFO_REQUEST"
export const GET_SWIPER_INFO_SUCCESS = "swiper/GET_SWIPER_INFO_SUCCESS"
export const GET_SWIPER_INFO_FAIL = "swiper/GET_SWIPER_INFO_FAIL"

export function getSwiperInfo(data) {
    // if(data === 'serve'){
    //     return axios.get('http://localhost:3000/static/mock.json')
    // }
    return {
        types: [GET_SWIPER_INFO_REQUEST, GET_SWIPER_INFO_SUCCESS, GET_SWIPER_INFO_FAIL],
        promise: client => client.get('http://localhost:3000/static/mock.json',data)
    }
}