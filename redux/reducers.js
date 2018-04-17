import { combineReducers } from "redux";
import swiperInfo from './reducers/swiperInfo'
import clock from './reducers/clock'
import glassList from './reducers/glassList'
import userShow from './reducers/userShow'
export default combineReducers({
    clock,
    swiperInfo,
    glassList,
    userShow
})