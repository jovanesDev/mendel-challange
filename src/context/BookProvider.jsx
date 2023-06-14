/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react'
import reducer from './BookReducer'
import { types } from './constants/book'
import { get } from '../services/axios'
import { filterBooks, newBookObjWithLessValues } from '../helpers/books.helper'

const initialState = {
    books: null,
    loading: false,
    book:null
}

export const BookContext = createContext('')

const BookProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getBooks = async (url) => {
        dispatch({
            type: types.GET_BOOKS
        })
        try {
            const result = await get(url)
            if (result.data?.docs?.length < 1) {
                console.log('no hay resultado!')
                dispatch({
                    type: types.GET_BOOKS_SUCCESS,
                    payload: { loading: false, books: [] },
                })
                return
            }
            const filteredBooks = filterBooks(result.data.docs, [
                'first_publish_year',
                'author_name',
                'title',
                'key',
            ])
                .sort((a, b) => a.first_publish_year - b.first_publish_year)
                .reverse()
            const books = newBookObjWithLessValues(filteredBooks)
            dispatch({
                type:types.GET_BOOKS_SUCCESS,
                payload:{loading:false,books}
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type:types.GET_BOOK_FAILED
            })
        }
    }

    const getBook = async (url) => {
        dispatch({
            type:types.GET_BOOK
        })
        try {
            const {data} = await get(url)
            const {authors,title} = data
            const [first_param] = authors
            const {author:{key}} = first_param
            let formattedTitle = title.toLowerCase().replace(/\s+/g, '+')
            const [{first_publish_year},authorResponse] = await Promise.all([
                get(`/search.json?q=${formattedTitle}`).then((res) => res.data.docs.find(({key}) => key === key)),
                get(`${key}.json`)
            ])
            dispatch({
                type:types.GET_BOOKS_SUCCESS,
                payload:{loading:false,book:{
                    ...data,
                    author_info:authorResponse.data,
                    first_publish_year:first_publish_year || null
                }}
            })
        } catch (error) {
            dispatch({
                type:types.GET_BOOK_FAILED
            })
        }
    }

    const resetData = () => dispatch({
        type:types.RESET_STATE
    })
    

    return (
        <BookContext.Provider
            value={{
                state,
                getBooks,
                getBook,
                resetData
            }}
        >
            {children}
        </BookContext.Provider>
    )
}

export default BookProvider
