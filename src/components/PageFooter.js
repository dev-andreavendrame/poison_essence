import { BottomNavigation, SvgIcon, Box, Typography, Grid } from '@mui/material';


import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';


function PageFooter(props) {

    return (
        <BottomNavigation sx={{ mt: 5, backgroundColor: "#551b8c", height: 100, boxShadow: 24 }}>
            <Grid container flexGrow='true' alignItems='center' justifyContent='space-between' sx={{mr: 2, ml: 2}}>
                <Grid item xs={3} >
                    <Typography sx={{ mt: 1, fontWeight: 500, fontSize: 20, textAlign: 'center', color: '#350761' }} variant='subtitle' >
                        by Superrisk Studio, 2022.
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
                    </div>
                </Grid>

                <Grid item xs={3}>
                </Grid>
            </Grid>
        </BottomNavigation>
    );
} export default PageFooter;