import {LOADING, SEARCH_NFT_MINTS } from '../actions/types'

const initialState = {
    nftMints: [],
    loading: false,
}

export default function searchReducer(state = initialState, action){
    switch (action.type){
        case SEARCH_NFT_MINTS:
            return{
                ...state,
                nftMints: action.payload,
                loading: false
            }
        case LOADING:
            return{
                ...state,
                loading: true,
            }
        default:
            return state
    }
}