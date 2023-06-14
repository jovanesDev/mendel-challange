import { types } from './constants/book'

export default (state, { type, payload }) => {
    switch (type) {
    case types.GET_BOOKS:
    case types.GET_BOOK:
        return {...state,loading:true}    
    case types.GET_BOOKS_SUCCESS:
        return { ...state, ...payload }
    case types.GET_BOOKS_FAILED:  
        return {...state,books:null,loading:false}
    case types.GET_BOOK_FAILED:  
        return {...state,book:null,loading:false}
    case types.RESET_STATE:  
        return {...state,book:null,books:null,loading:false}
    default:
        return state
    }
}
