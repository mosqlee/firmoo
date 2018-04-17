export const GET_USER_LIST_REQUEST = "swiper/GET_USER_LIST_REQUEST"
export const GET_USER_LIST_SUCCESS = "swiper/GET_USER_LIST_SUCCESS"
export const GET_USER_LIST_FAIL = "swiper/GET_USER_LIST_FAIL"

export function getUserList(url='1') {
    return {
        types: [GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAIL],
        promise: client => client.get(`http://localhost:3000/static/mockAvatar${url}.json`)
    }
}