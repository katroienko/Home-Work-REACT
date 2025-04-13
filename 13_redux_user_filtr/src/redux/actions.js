import {SET_FILTER} from './types'

export const setFilter = (payload) => {
    return {
        type: SET_FILTER,
        payload,
    }
}