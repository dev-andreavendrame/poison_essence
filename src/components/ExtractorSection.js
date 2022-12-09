import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';

import peExt from './images/temp_extractor.png';
import bgExt from './images/bg_extractor.png';
import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';



function ExtractorSection(props) {

    // ---------- external parameters
    // extraction_rateo
    // redeemable_tokens
    // time_to_claim
    // owned_tokens
    // owned_extractors
    // free_extractors
    // staked_extractors

    return (
        <Box >
            <Grid sx={{ mb: 5 }} container spacing={5}>
                <Grid item xs={6}>
                    <Paper className='extractorBackground' elevation={24} sx={{ borderRadius: 8 }}>
                        <Box p={1}>
                            <Image src={peExt} alt="extractor gif" elevation={24} />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Box className='extDataBox' p={1} sx={{ borderRadius: 8, mb: 10, p: 3 }} >
                        <Typography sx={{ ml: 1, color: 'white' }} variant='h5'>
                            Extraction rate: 10 PE/day
                        </Typography>
                        <Typography sx={{ ml: 1, color: 'white' }} variant='h5'>
                            Redeemable tokens: 132 PE
                        </Typography>
                        <Typography sx={{ ml: 1, mb: 3.5, color: 'white' }} variant='h5'>
                            Time to next available claim: 1h 25m 15s
                        </Typography>

                        <Grid container spacing={0} >
                            <Grid item xs={3.5}>
                                <Button sx={{ backgroundColor: '#a1c126', ml: 1, mt: 1, borderRadius: 2 }} variant="contained" size='large' fullWidth >
                                    CLAIM
                                </Button>
                            </Grid>
                            <Grid item xs={8.5} sx={{ display: 'flex', alignItems: 'end' }}>
                                <Box sx={{ mt: 2.5 }}>
                                    <Typography sx={{ fontSize: 15, ml: 3, color: 'white' }} variant='overline' >
                                        Owned tokens: 250
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>


                    </Box>



                    <Box className='extDataBox' p={1} sx={{ borderRadius: 8, pt: 3, pb: 3, pl: 3, pr: 5 }} >
                        <Typography sx={{ ml: 1, color: 'white' }} variant='h5'>
                            Owned Extractors: 10
                        </Typography>
                        <Typography sx={{ ml: 1, color: 'white' }} variant='h5'>
                            Free Extractors: 3
                        </Typography>
                        <Typography sx={{ ml: 1, mb: 3.5, color: 'white' }} variant='h5'>
                            Extractors in staking: 7
                        </Typography>


                        <Button sx={{ color: '#a1c126', backgroundColor: "#303030", border: 3, borderColor: '#a1c126', ml: 1, mt: 1, borderRadius: 2 }} variant="contained" size="large" fullWidth>
                            Buy new Extractor
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
} export default ExtractorSection;