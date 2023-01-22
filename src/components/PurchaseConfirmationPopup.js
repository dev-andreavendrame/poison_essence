import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import SaleAuthorizationPopup from './SaleAuthorizationPopup';
import { assetMarketLogicWritable } from './smart_contracts/blockchainConfig/PolygonConfig';
import { NOT_ENOUGH_PE_TO_COMPLETE_THE_PURCHASE } from './smart_contracts/TransactionErrors';


function PurchaseConfirmationPopup(props) {

    const assetCost = props.cost;
    const internalId = props.internalId;
    const assetName = props.name;
    const [copiesAmount, setCopiesAmount] = useState(1);
    const [peTotalPrice, setPeTotalPrice] = useState(copiesAmount * assetCost);

    const popupStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 400,
        p: 4,
        borderRadius: 8
    };

    const buyAssetCopies = () => {
        if (copiesAmount > 2 ) {
            return <SaleAuthorizationPopup
            key={props.key}
            name={props.name}
            cost={props.cost}
            assetImage={props.assetImage}
            internalId={props.internalId}
            tokenId={props.tokenId}
        />
        }
        assetMarketLogicWritable.buyAsset(internalId, copiesAmount)
        .then(buyResult => {
            console.log("Bought %d copies of the %s asset");
        }).catch(error => {
            if ((error.message).includes(NOT_ENOUGH_PE_TO_COMPLETE_THE_PURCHASE)) {
                console.log("Show popup fondi non sufficienti");
                // SHOW HERE THE POPUP
            } else {
                console.log("Unknown error while buying asset copies");
            }
        });
    }

    return (

        <Box display='flex' flexDirection='column' sx={popupStyle}>
            <Box className='extDataBox' display='flex' flexDirection='column' sx={{ p: 3, width: 500, height: 250, borderRadius: 8, backgroundColor: 'rgba(85, 27, 140, 0.8)' }}>
                <Box display='flex' justifyContent='center'>
                    <Typography id="generic-popup-title" variant="h1" component="h2" color='white' sx={{ mb: 4, fontSize: 32, fontWeight: 'bold', textShadow: ' 1px 2px 8px #303030' }}>
                        {props.name}
                    </Typography>
                </Box>
                <Grid container alignItems='center'>
                    <Grid xs={3}>
                        <Typography id="generic-popup-description" variant="h6" color='white' sx={{ fontSize: 18, fontWeight: 'normal', textShadow: ' 1px 2px 8px #303030' }}>
                            Copies to buy:
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <TextField
                            inputProps={{ style: { color: 'white' } }}
                            required
                            type='number'
                            id="asset-copies-sale"
                            name="asset-copies-sale"
                            onChange={(event) => {
                                const amount = parseInt(event.target.value);
                                if (amount < 1) {
                                    setCopiesAmount(1);
                                    setPeTotalPrice(assetCost);
                                    document.getElementById('asset-copies-sale').value = "1";
                                } else {
                                    setCopiesAmount(amount);
                                    setPeTotalPrice(amount * assetCost);
                                }
                            }}

                            placeholder={copiesAmount}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography id="generic-popup-description" variant="h6" color='white' sx={{ ml: 4, fontSize: 18, fontWeight: 'normal', textShadow: ' 1px 2px 8px #303030' }}>
                            Total PE amount: {peTotalPrice}
                        </Typography>
                    </Grid>
                </Grid>

                <Box display='flex' justifyContent='center' sx={{ mt: 5 }}>
                    <Button className='buttonGreen' variant='contained' size='large' sx={{ fontWeight: 'bold' }} onClick={buyAssetCopies} >
                        Confirm purchase
                    </Button>
                </Box>
            </Box>
        </Box>
    );

} export default PurchaseConfirmationPopup;