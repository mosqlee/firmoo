import { getSwiperInfo, GET_SWIPER_INFO_REQUEST, GET_SWIPER_INFO_SUCCESS, GET_SWIPER_INFO_FAIL} from './swiperInfo'

// jest 模拟函数
jest.fn('client',()=>({
    get:(url,data)=> new Promise((res,rej)=>{
        setTimeout(() => {
            res(100)
        }, 1000);
    })
}));
const mockFn = jest.fn().mockImplementation(data => {
    return {
        get: (url, data) => new Promise((res, rej) => {
            setTimeout(() => {
                res(100)
            }, 1000);
        })
    }
});
describe('get swiperinfo unit test',()=>{
    it('will return promise&&type',()=>{
        const action = getSwiperInfo();
        expect(action.types).toEqual([GET_SWIPER_INFO_REQUEST, GET_SWIPER_INFO_SUCCESS, GET_SWIPER_INFO_FAIL])
        const a = mockFn();
        console.log(a);
        expect(action.promise(a)).resolves.toBe(100)
    })
})