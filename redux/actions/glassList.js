export const GET_GLASS_LIST_REQUEST = "swiper/GET_GLASS_LIST_REQUEST"
export const GET_GLASS_LIST_SUCCESS = "swiper/GET_GLASS_LIST_SUCCESS"
export const GET_GLASS_LIST_FAIL = "swiper/GET_GLASS_LIST_FAIL"
/**
 * 
 * 
 * @export
 * @param {any} data 
 * @returns 
 */
export function getGlassList(data) {
    return {
        types: [GET_GLASS_LIST_REQUEST, GET_GLASS_LIST_SUCCESS, GET_GLASS_LIST_FAIL],
        promise: client => client.get('http://localhost:3000/static/mockImg.json', data)
    }
}