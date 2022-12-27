import { useState } from 'react';
import './FlipCard.css';

import { BONUS_ASSETS, BONUS_EQUIPMENTS } from './BonusAssetsData';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';
import { Grid } from '@mui/material';

import BonusAssetCard from './BonusAssetCard';

import myImage from './images/SRS_logo.png';


function FlipCard(props) {

    // Change Button className to 'buttonGreen' when 'disabled == false'

    return (

        <Box className="flip-card" >
            <Box className="flip-card-inner" >
                <Box className="flip-card-front">
                    <Image sx={{ borderRadius: 3, boxShadow: 6 }} src={props.assetImage} alt="Asset cover" borderRadius='50%' />
                </Box>


                <Box className="flip-card-back">
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Typography sx={{ fontSize: 20, color: "white", mt: 2 }}>
                            Made by:
                        </Typography>
                        <Box sx={{ width: 70, height: 70, mt: 2 }}>
                            <Image src={myImage} alt='SRS logo' />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

    );

} export default FlipCard;