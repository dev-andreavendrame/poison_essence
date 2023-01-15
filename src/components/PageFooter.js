import { BottomNavigation, SvgIcon, Typography, Grid } from '@mui/material';


import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function PageFooter(props) {

    return (
        <BottomNavigation sx={{ mt: 5, backgroundColor: "#551b8c", height: 100, boxShadow: 24 }}>
            <Grid container flexGrow='true' alignItems='center' justifyContent='space-between' sx={{mr: 2, ml: 2}}>
                <Grid item xs={3} >
                    <Typography sx={{ mt: 1, fontWeight: 500, fontSize: 20, textAlign: 'center', color: 'white' }} variant='subtitle' >
                        by Superrisk Studio, 2023.
                    </Typography>
                </Grid>

                <Grid item xs={6} display='inline-flex' justifyContent='center'>
                    <div class='icons'>
                        <a href='https://www.instagram.com/superrisk_studio/' class="icon icon--instagram">
                            <InstagramIcon />
                        </a>
                        <a href='https://twitter.com/s_superrisk' class="icon icon--twitter">
                            <TwitterIcon />
                        </a>
                        <a href='https://www.superrisknft.com/' class="icon icon--srs">
                            <SvgIcon >
                                <path d="M8.82,5.62a7.21,7.21,0,0,1,9.87,4.09h5A12,12,0,0,0,5.31,2.11h0l0,0a12.19,12.19,0,0,0-3.39,3.4h0L5.4,9,15,18.63a7.2,7.2,0,0,1-9.86-4.09h-5a12,12,0,0,0,18.36,7.6h0l0,0a12.1,12.1,0,0,0,3.4-3.4h0Z" />
                            </SvgIcon>
                        </a>
                        <a href='https://superrisk-studio.gitbook.io/asset-collections/poison-essence/collection-composition/the-poison-essence' class="icon icon--gitbook">
                            <SvgIcon sx={{ mt: 1 }} >
                                <path d="M10.8,14.44a.72.72,0,1,1-.71.72.72.72,0,0,1,.71-.72m11-4.35a.71.71,0,1,1,.71-.71.73.73,0,0,1-.71.71m0-2.88a2.18,2.18,0,0,0-2.18,2.17,2.3,2.3,0,0,0,.11.68L12.6,13.88a2.16,2.16,0,0,0-1.8-.94,2.25,2.25,0,0,0-2,1.2L2.4,10.77A2.79,2.79,0,0,1,1.28,8.26a1.34,1.34,0,0,1,.49-1.09.65.65,0,0,1,.63,0l0,0L10,11.18a1.16,1.16,0,0,0,1.2-.07l11.55-6a.54.54,0,0,0,.37-.49.58.58,0,0,0-.34-.49L20.1,2.9C18,1.92,15.6.8,14.55.23a1.79,1.79,0,0,0-1.76,0l-.26.12C7.77,2.75,1.47,5.86,1.09,6.08A2.53,2.53,0,0,0,0,8.22a4.08,4.08,0,0,0,1.84,3.71l6.83,3.53A2.17,2.17,0,0,0,13,15.19l7.5-4A2.19,2.19,0,0,0,24,9.42a2.18,2.18,0,0,0-2.17-2.21" />
                            </SvgIcon>
                        </a>
                        <a href='https://discord.gg/yBPbD76hVQ' class="icon icon--discord">
                            <SvgIcon sx={{ ml: 0.3, mt: 0.1 }} >
                                <path d="M13.1196 10.3073c-.7065 0-1.2639.6071-1.2639 1.3627s.5704 1.363 1.2639 1.363c.7064 0 1.2635-.6069 1.2635-1.363s-.5699-1.3627-1.2635-1.3627zm-4.5218 0c-.7061 0-1.2636.6071-1.2636 1.3627s.57 1.363 1.2636 1.363c.7059 0 1.2632-.6069 1.2632-1.363.0129-.7556-.5573-1.3627-1.2632-1.3627zM19.1408 0H2.5398C1.138.0034.0034 1.138 0 2.5398v16.601c.0034 1.4012 1.138 2.5366 2.5398 2.5397h14.0489l-.6526-2.2669 1.5857 1.4613 1.4989 1.3751 2.6718 2.3169V2.5398C21.6805 1.14 20.5407 0 19.1408 0zm-4.782 16.0436l-.8176-.9914c1.6228-.4581 2.2428-1.4613 2.2428-1.4613-.5082.3338-.9916.5694-1.4252.7304-.6197.2602-1.214.4215-1.7964.533-1.1892.2225-2.2798.1612-3.2095-.0125-.7059-.136-1.3127-.3224-1.821-.5327-.2852-.1152-.5946-.2475-.9036-.4209-.0381-.0255-.0752-.0372-.1159-.0619-.0247-.0118-.0371-.0247-.0496-.0247l-.3469-.2107s.5947.9786 2.168 1.4492l-.8305 1.0157c-2.7375-.0871-3.7784-1.8707-3.7784-1.8707 0-3.9521 1.7845-7.1603 1.7845-7.1603C7.2432 5.6988 8.928 5.7356 8.928 5.7356l.1243.1487c-2.2266.6322-3.246 1.6111-3.246 1.6111s.2689-.1492.7308-.3473c1.3258-.5824 2.3792-.7306 2.8121-.7805.0746-.0123.1365-.0255.2115-.0255.8294-.1079 1.6699-.1157 2.5022-.0249 1.307.151 2.5723.5505 3.729 1.1772s-.9789-.9287-3.0847-1.5609l.1736-.1983s1.6975-.0369 3.469 1.2884c0 0 1.7844 3.2094 1.7844 7.1614 0-.0127-1.0368 1.7712-3.7789 1.8575z" />
                            </SvgIcon>
                        </a>
                    </div>
                </Grid>

                <Grid item xs={3}>
                </Grid>
            </Grid>
        </BottomNavigation>
    );
} export default PageFooter;