import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import './FlipCard.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Grid, Modal, SvgIcon, Collapse, IconButton } from '@mui/material';
import FlipCard from './FlipCard';
import PurchaseConfirmationPopup from './PurchaseConfirmationPopup';
import SaleAuthorizationPopup from './SaleAuthorizationPopup';
import { ASSET_MARKET_LOGIC_ADDRESS, peTokenReadable } from './smart_contracts/blockchainConfig/PolygonConfig';
const ethers = require('ethers');

// ExpandMore styling
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


function BonusAssetCard(props) {

    // ------------------------------ //
    // -------- Functions ----------- //
    // ------------------------------ //

    const userWallet = props.wallet;
    const [popupOpen, setPopupOpen] = useState(false);
    const [authorizationState, setAuthorizationState] = useState(false);

    const handleOpen = () => {
        console.log(userWallet);
        peTokenReadable.allowance(userWallet, ASSET_MARKET_LOGIC_ADDRESS)
            .then(tokenAllowance => {
                if (parseInt(tokenAllowance) > 0) {
                    console.log("Spending approved with %d", tokenAllowance);
                    // User has already approved PE spending
                    setAuthorizationState(true);
                } else {
                    console.log(ethers.utils.formatEther(tokenAllowance + ""));
                    // User has to approve PE spending
                    setAuthorizationState(false);
                }
                setPopupOpen(true);
            }).catch(error => {
                console.log(error);
            })
    };

    const handleClose = () => setPopupOpen(false);


    // --- lore section ---
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const closeLoreExpand = () => {
        if (expanded) setExpanded(false);
    }


    // --- rendering ---
    return (
        <Card sx={{ borderRadius: 3, boxShadow: 24, backgroundColor: '#7f33c5' }} onMouseLeave={closeLoreExpand}>
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
                    madeBy={props.madeBy}
                    logo={props.logo}
                    lore={props.lore}
                    socials={props.socials}
                />

                <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ mt: 1, pl: 1 }}>
                    <Typography sx={{ fontSize: 20, color: "white" }}>
                        Price: {props.cost > 0 ? props.cost : "?"} PE
                    </Typography>
                    <Box sx={{ width: 40, height: 40, mt: 1 }}>
                        <a href={props.socials["instagram"]} class="smallSandboxIcon">
                            <SvgIcon sx={{ mb: 0.7, mr: 0.65 }} >
                                <path d="M9.96 7.08L8.34 8.7v6.42l1.62 1.62h6.42v3.24H13.2v-1.62H8.34v3.24l1.62 1.62h9.66l1.62-1.62v-6.48l-1.62-1.62H13.2v-3.24h3.24v1.62h4.86V8.64l-1.62-1.62H9.96z" />
                            </SvgIcon>
                        </a>
                    </Box>
                </Box>

                <Box sx={{ pl: 1 }}>
                    <Box display='inline-flex' alignItems='center'>
                        <Typography variant='body2' color="white" >
                            Read lore:
                        </Typography>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            sx={{ color: "white"}}
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </Box>

                    <Collapse in={expanded} timeout="auto" sx={{ maxWidth: 185 }}>
                        <Box sx={{ backgroundColor: '#551b8c', borderRadius: 2}}>
                            <Typography variant='body2' sx={{ fontSize: 11, color: "white", p: 1 }}>
                                "{props.lore}"
                            </Typography>
                        </Box>
                    </Collapse>
                </Box>

            </CardContent>

            <CardActions>
                <Grid sx={{ pb: 2, pl: 2, pr: 2 }} container spacing={1}>
                    <Grid item xs={4}>
                        <Modal
                            open={popupOpen}
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

                        {props.cost > 0 ?
                            <Button className='buttonGreen' variant="contained" size="medium" onClick={handleOpen}>
                                Buy
                            </Button> :
                            <Button className='buttonGreen' variant="contained" size="medium" disabled>
                                Buy
                            </Button>
                        }

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