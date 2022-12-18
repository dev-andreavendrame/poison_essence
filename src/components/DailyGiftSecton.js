import { useState } from 'react';
import { styled } from "@mui/material/styles";

import { Grid, Box, Button, Typography } from '@mui/material';

import peExt from './images/temp_extractor.png';

function DailyGiftSection(props) {

    const myImg = { peExt };
    const [flag, setFlag] = useState(true);
    const handleClick = () => {
        setFlag(!flag);
    };

    const BonusButton = styled(Button)({
        borderRadius: 50,
        outline: '4px solid #00a2ff',
        transition: 'outline-offset 1s, outline-color 1s'
    });

    return (
        <Box>
            <Grid container spacing={4} justifyContent='center' alignItems='center' direction="row" sx={{ mb: 10 }}>
                <Grid item xs='auto'>
                    <BonusButton className={flag ? 'giftIcon' : 'giftIcon--open'} onClick={handleClick} />
                </Grid>
                
                <Grid item xs='auto'>
                    <Box className='bonusBannerBox' p={1} sx={{ borderRadius: 8, pt: 3, pb: 3, pl: 5, pr: 5 }} >
                        <Typography sx={{ color: 'white', fontWeight: 'bold', textShadow: ' 1px 2px 8px #303030' }} variant='h3'>
                            Claim now your gift!
                        </Typography>
                        <Typography sx={{ ml: 2, color: 'white', fontWeight: 'light' }} variant='h6'>
                            Click on the giftbox to earn some PE tokens.
                        </Typography><Typography sx={{ ml: 2, color: 'white', fontWeight: 'light' }} variant='h6'>
                            <strong>Remember to return tomorrow:</strong> the holiday gifts will be available daily for the rest of 2022!
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
} export default DailyGiftSection;