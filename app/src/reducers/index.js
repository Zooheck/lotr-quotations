import {
    FETCHING_CHARACTER,
    FETCH_CHARACTER_SUCCESS,
    FETCHING_QUOTATIONS,
    FETCH_QUOTATIONS_SUCCESS,
    RESET_CHARACTER
} from '../actions/index'

const initialState = {
    character: '',
    posts: [],
    isLoading: false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_CHARACTER:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_CHARACTER_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                character: action.payload
            }
        case FETCHING_QUOTATIONS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case FETCH_QUOTATIONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: action.payload
            }
        case RESET_CHARACTER:
            return {
                ...state,
                character: '',
                posts: [],
                isLoading: false
            }
        default:
            return state
    }
}

export default rootReducer