import { GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAIL } from '../actions/userShow'

const initState = {
    isLoading: false,
    preList: { userList: [] },
    userList: { userList: [] },
    errorMsg: ''
}

export default function reducer(state = initState, action) {
    console.log(state, action.type)
    switch (action.type) {

        case GET_USER_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                userList: { userList: [] },
                errorMsg: ''
            }
            break;
        case GET_USER_LIST_SUCCESS:
            console.log(action.result.data.data.list)
            return {
                ...state,
                isLoading: false,
                preList: { userList: action.result.data.data.list },
                userList: { userList: action.result.data.data.list },
                errorMsg: ''
            }
            console.log(state)
            break;
        case GET_USER_LIST_FAIL:
            return {
                ...state,
                isLoading: false,
                userList: { userList: [] },
                errorMsg: '请求错误'
            }
            break;
        default:
            return state;
            break;
    }
}