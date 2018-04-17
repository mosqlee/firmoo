import { GET_GLASS_LIST_REQUEST, GET_GLASS_LIST_SUCCESS, GET_GLASS_LIST_FAIL } from '../actions/glassList'

const initState = {
    isLoading: false,
    glassList: { glassList: [] },
    errorMsg: ''
}

export default function reducer(state = initState, action) {
    
    switch (action.type) {
        
        case GET_GLASS_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                glassList: { glassList: [] },
                errorMsg: ''
            }
            break;
        case GET_GLASS_LIST_SUCCESS:
            console.log(action.result.data.data.list)
            return {
                ...state,
                isLoading: false,
                glassList: { glassList: action.result.data.data.list },
                errorMsg: ''
            }
            console.log(state)
            break;
        case GET_GLASS_LIST_FAIL:
            return {
                ...state,
                isLoading: false,
                glassList: { glassList: [] },
                errorMsg: '请求错误'
            }
            break;
        default:
            return state;
            break;
    }
}