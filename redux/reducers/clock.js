const exampleInitialState = {
    lastUpdate: 0,
    light: false,
    count: 0
}
const actionTypes = {
    ADD: 'ADD',
    TICK: 'TICK'
}
export default function reducer(state = exampleInitialState, action) {
    switch (action.type) {
        case actionTypes.TICK:
            return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light })
        case actionTypes.ADD:
            return Object.assign({}, state, {
                count: state.count + 1
            })
        default: return state
    }
}