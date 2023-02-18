import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchMints } from '../actions/searchActions';

//styling



export function Charts() {

   
    const nftMints = useSelector((state) =>  state.appRedux.nftMints)
    const dispatch = useDispatch();

    useEffect(() => {
        //calls the action fetchMints from searchActions.js
        dispatch(fetchMints());
      }, [dispatch])

     

      return(
        <Box>
          <div>{console.log(nftMints)}</div>
        </Box>
    );
}