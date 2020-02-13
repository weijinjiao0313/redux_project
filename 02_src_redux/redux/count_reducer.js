import {INCREMENT,DECREMENT} from './action_types'

export default  function (perState=0,action){
    const {type,data} = action
    let newState
    switch (type) {
        case INCREMENT:
            newState = perState + data 
            return newState 
        case DECREMENT:
            newState = perState - data
            return newState
        default:
            return perState
    }
}