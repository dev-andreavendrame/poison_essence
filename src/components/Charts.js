import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
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
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "72vh" }}>
    <BarChart width={800} height={600} data={nftMints} barCategoryGap={'25%'}>
      <CartesianGrid stroke="white"/>
      <XAxis dataKey="assetName" stroke="white" />
      <YAxis stroke="white"/>
      <Tooltip />
      <Legend wrapperStyle={{ backgroundColor: "#4F1C6F", padding: "5px" }}/>
      <Bar dataKey="assetMinted" fill="#8884d8" animationDuration={2200} />
    </BarChart>
</div>

    );
}