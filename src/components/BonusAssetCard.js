import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';

import { Grid } from '@mui/material';

function BonusAssetCard(props) {

    return (


        <Card sx={{ maxWidth: "20%", borderRadius: 3, boxShadow: 24, backgroundColor: '#7f33c5', m: 3 }}>
            <CardContent>
                <Typography sx={{ mb: 1.5, fontWeight: 'bold', textAlign: 'left', fontSize: 26, color: "white" }} >
                    {props.name}
                </Typography>
                <Image sx={{ borderRadius: 3, boxShadow: 6 }} src={props.assetImage} alt="Asset cover" borderRadius='50%' />
                <Box sx={{ pl: 1, pr: 1 }}>
                    <Typography sx={{ fontSize: 20, color: "white", mt: 2 }}>
                        Price: {props.cost}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Grid sx={{ pb: 2, pl: 2, pr: 2 }} container spacing={1}>
                    <Grid item xs={4}>
                        <Button sx={{ backgroundColor: '#a1c126' }} variant="contained" size="medium" disabled>
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