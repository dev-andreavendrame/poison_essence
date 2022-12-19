import { useState } from 'react';
import { styled } from "@mui/material/styles";

import { Grid, Box, Button, Typography } from '@mui/material';

import { giftBoxLogicWritable } from './smart_contracts/MoonbaseConfig';

function DailyGiftSection(props) {

    const GIFT_BOX_READY = 0;
    const GIFT_BOX_NOT_READY = 1;
    const GIFT_BOX_REVEALED = 2;

    const [giftBoxState, setGiftBoxState] = useState(GIFT_BOX_NOT_READY);

    const handleClick = async () => {
        if (giftBoxState !== GIFT_BOX_READY) {
            giftBoxLogicWritable.canUserClaimBox()
                .then((_isAbleToClaim) => {
                    if (_isAbleToClaim) {
                        console.log("User can claim the box");
                        setGiftBoxState(GIFT_BOX_READY);
                    } else {
                        console.log("User cannot claim the box yet.");
                        if (giftBoxState !== GIFT_BOX_NOT_READY) {
                            setGiftBoxState(GIFT_BOX_NOT_READY);
                        }
                    }
                }).catch(error => {
                    console.log(error);
                });
        } else {
            await giftBoxLogicWritable.openGiftBox()
                .then(reward => {
                    console.log("Claimed %d PE tokens", reward);
                    setGiftBoxState(GIFT_BOX_REVEALED);
                }).catch(error => {
                    console.log(error);
                })
        }
    };

    const BonusButton = styled(Button)({
        borderRadius: 50,
        outline: '4px solid #00a2ff',
        transition: 'outline-offset 1s, outline-color 1s'
    });

    function loadGiftState() {

        if (giftBoxState === GIFT_BOX_READY) {
            return 'giftIcon';
        } else if (giftBoxState === 1) {
            return 'giftNotReadyIcon';
        } else {
            // giftBoxState == GIFT_BOX_REVEALED
            return 'giftIcon--open';
        }
    }

    return (
        <Box>
            <Grid container spacing={4} justifyContent='center' alignItems='center' direction="row" sx={{ mb: 10 }}>
                <Grid item xs='auto'>
                    <BonusButton className={loadGiftState()} onClick={handleClick} />
                </Grid>

                <Grid item xs='auto'>
                    <Box className='bonusBannerBox' p={1} sx={{ borderRadius: 8, pt: 3, pb: 3, pl: 5, pr: 5 }} >
                        <Typography sx={{ color: 'white', fontWeight: 'bold', textShadow: ' 1px 2px 8px #303030' }} variant='h3'>
                            Claim now your gift!
                        </Typography>
                        <Typography sx={{ ml: 2, color: 'white', fontWeight: 'light' }} variant='h6'>
                            Click on the giftbox to earn some PE tokens.
                        </Typography><Typography sx={{ ml: 2, color: 'white', fontWeight: 'light' }} variant='h6'>
                            <strong>Remember to come back tomorrow:</strong> the holiday gifts will be available daily for the rest of 2022!
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
} export default DailyGiftSection;