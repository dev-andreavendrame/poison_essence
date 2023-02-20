import { SEARCH_NFT_MINTS, LOADING } from "./types";


//Get information about the NFTs in the collection
export const fetchMints = () => dispatch => {

    //array test
    const arrayMints = [
        {
            assetName: 'Lumaca',
            assetMinted: 50,
            UniqueHolders: 20,
        },
        {
            assetName: 'Pianta',
            assetMinted: 30,
            UniqueHolders: 10,
        },
        {
            assetName: 'Spada',
            assetMinted: 60,
            UniqueHolders: 10,
        },
        {
            assetName: 'Scudo',
            assetMinted: 30,
            UniqueHolders: 20,
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