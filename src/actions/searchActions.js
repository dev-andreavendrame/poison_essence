import { SEARCH_NFT_MINTS, LOADING } from "./types";


//Get information about the NFTs in the collection
export const fetchMints = () => dispatch => {

    //array test
    const arrayMints = [
        {
            assetName: 'Lumaca',
            assetMinted: 500,
            UniqueHolders: 20,
        },
        {
            assetName: 'Pianta',
            assetMinted: 300,
            UniqueHolders: 10,
        },
    ]

    dispatch({
        type: SEARCH_NFT_MINTS,
        payload:arrayMints
    });
};


//to be used at every api call
export const setLoading = () => {
    return {
        type: LOADING
    };
};