import { Box, Button, Typography } from '@mui/material';


function SaleAuthorizationPopup(props) {

    const popupStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 200,
        p: 4,
        borderRadius: 8
    };

    return (

        <Box display='flex' flexDirection='column' sx={popupStyle}>
            <Box className='extDataBox' display='flex' flexDirection='column' alignItems='center' sx={{ p: 3, borderRadius: 8, backgroundColor: 'rgba(85, 27, 140, 0.8)' }}>
                <Typography align='center' id="authorization-popup-title" variant="h1" color='white' sx={{ fontSize: 18, fontWeight: 'bold', textShadow: ' 1px 2px 8px #303030' }} >
                    Please, give your authorization to spend the PE tokens.
                </Typography>
                <Box display='flex' flexDirection='row' sx={{ mt: 1 }}>
                    <Typography align='center' id="authorization-popup-description" variant="subtitle1" color='white' sx={{ fontSize: 14, textShadow: ' 1px 2px 8px #303030' }} >
                        This operation is required only once.
                    </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Button className='buttonGreen' variant='contained' size='large' sx={{ fontWeight: 'bold' }} >
                        <Typography align='center' id="authorization-popup-button" variant="subtitle1" color='white' sx={{ fontSize: 16, fontWeight: 'bold', textShadow: ' 1px 1px 8px #202020' }} >
                            Authorize
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );

} export default SaleAuthorizationPopup;