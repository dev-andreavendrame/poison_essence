import { Box, Button, Grid, TextField, Typography } from '@mui/material';


function PurchaseConfirmationPopup(props) {

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
                            Number of copies:
                        </Typography>
                    </Grid>
                    <Grid xs={3}>
                        <TextField
                            inputProps={{ style: { color: 'white' } }}
                            required
                            type='number'
                            id="asset-copies-sale"
                            name="asset-copies-sale"

                            placeholder="Copies"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography id="generic-popup-description" variant="h6" color='white' sx={{ ml: 4, fontSize: 18, fontWeight: 'normal', textShadow: ' 1px 2px 8px #303030' }}>
                            Token price:
                        </Typography>
                    </Grid>
                </Grid>

                <Box display='flex' justifyContent='center' sx={{ mt: 5 }}>
                    <Button className='buttonGreen' variant='contained' size='large' sx={{ fontWeight: 'bold' }} >
                        Click me
                    </Button>
                </Box>
            </Box>
        </Box>
    );

} export default PurchaseConfirmationPopup;