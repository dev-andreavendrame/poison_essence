import { useState } from 'react';

import { Box, Button, Modal, Typography } from '@mui/material';


function AssetSalePopup(props) {

    const [popupState, setPopupState] = useState(false);
    const handleOpen = () => setPopupState(true);
    const handleClose = () => setPopupState(false);

    const popupStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        height: 200,
        p: 4,
        borderRadius: 8
    };

    return (

        <Box>

            <Modal
                open={popupState}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                style={{ backdropFilter: "blur(3px)" }}
            >


                <Box display='flex' flexDirection='column' sx={popupStyle}>
                    <Box className='extDataBox' display='flex' flexDirection='column' alignItems='center' sx={{ p: 3, borderRadius: 8, backgroundColor: 'rgba(85, 27, 140, 0.8)' }}>
                        <Typography id="generic-popup-title" variant="h5" component="h2" color='white'>
                            Title
                        </Typography>
                        <Box display='flex' flexDirection='row' >
                            <Typography id="generic-popup-description" variant="h6" color='white'>
                                Description
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 3 }}>
                            <Button className='buttonGreen' variant='contained' size='small' sx={{ fontWeight: 'bold' }} onClick={handleClose}>
                                Click me
                            </Button>
                        </Box>
                    </Box>
                </Box>


            </Modal>
            <Button sx={{ backgroundColor: '#a1c126' }} variant="contained" size="medium" onClick={handleOpen} disabled>
                Buy
            </Button>
        </Box>



    );

} export default AssetSalePopup;
