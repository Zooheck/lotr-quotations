import axios from 'axios'

export const FETCHING_CHARACTER = 'FETCHING_CHARACTER'
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS'

export const FETCHING_QUOTATIONS = 'FETCHING_QUOTATIONS'
export const FETCH_QUOTATIONS_SUCCESS = 'FETCH_QUOTATIONS_SUCCESS'


const baseUrl = 'https://lotr-quotations.herokuapp.com/api/';

export const getCharacter = userId => dispatch => {
    dispatch({ type: FETCHING_CHARACTER })
    axios
        .get(`${baseUrl}users/userinfo/${userId}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: FETCH_CHARACTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}

export const getPosts = userId => dispatch => {
    dispatch({ type: FETCHING_QUOTATIONS })
    axios
        .get(`${baseUrl}users/posts/${userId}`)
        .then(res => {
            dispatch({
                type: FETCH_QUOTATIONS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}