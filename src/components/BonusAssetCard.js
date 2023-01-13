import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Grid, Modal } from '@mui/material';
import FlipCard from './FlipCard';
import PurchaseConfirmationPopup from './PurchaseConfirmationPopup';
import { assetMarketLogicWritable } from './smart_contracts/MoonbaseConfig';
import SaleAuthorizationPopup from './SaleAuthorizationPopup';

function BonusAssetCard(props) {

    // ------------------------------ //
    // -------- Functions ----------- //
    // ------------------------------ //

    const buyAsset = () => {

        assetMarketLogicWritable.buyAsset(props.internalId, 1)
            .then(actualCopies => {
                console.log("Bought %d copies sucessfully, now %d has been bought", 1, actualCopies);
            }).catch(error => {
                console.log("buyAsset: " + error);
            })

    }

    const [popupState, setPopupState] = useState(false);
    const handleOpen = () => setPopupState(true);
    const handleClose = () => setPopupState(false);

    const [authorizationState, setAuthorizationState] = useState(true);



    return (
        <Card sx={{ borderRadius: 3, boxShadow: 24, backgroundColor: '#7f33c5' }}>
            <CardContent>
                <Typography sx={{ mb: 1.5, fontWeight: 'bold', textAlign: 'left', color: "white" }} variant='h6' >
                    {props.name}
                </Typography>

                <FlipCard
                    key={props.key}
                    name={props.name}
                    cost={props.cost}
                    assetImage={props.assetImage}
                    internalId={props.internalId}
                    tokenId={props.tokenId}
                />

                <Box sx={{ pl: 1, pr: 1 }}>
                    <Typography sx={{ fontSize: 20, color: "white", mt: 2 }}>
                        Price: {props.cost}
                    </Typography>
                </Box>
            </CardContent>

            <CardActions>
                <Grid sx={{ pb: 2, pl: 2, pr: 2 }} container spacing={1}>
                    <Grid item xs={4}>
                        <Modal
                            open={popupState}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            closeAfterTransition
                            style={{ backdropFilter: "blur(3px)" }}
                        >
                            {authorizationState ?
                                <PurchaseConfirmationPopup
                                    key={props.key}
                                    name={props.name}
                                    cost={props.cost}
                                    assetImage={props.assetImage}
                                    internalId={props.internalId}
                                    tokenId={props.tokenId}
                                />
                                :
                                <SaleAuthorizationPopup
                                    key={props.key}
                                    name={props.name}
                                    cost={props.cost}
                                    assetImage={props.assetImage}
                                    internalId={props.internalId}
                                    tokenId={props.tokenId}
                                />}
                        </Modal>

                        <Button className='buttonGreen' variant="contained" size="medium" onClick={handleOpen} disabled>
                            Buy
                        </Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                            <Typography sx={{ color: 'white' }} variant='overline'  >
                                Owned: 0
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );

} export default BonusAssetCard;