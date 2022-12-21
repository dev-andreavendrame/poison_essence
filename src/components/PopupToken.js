import { Box, Typography } from '@mui/material';
import Image from 'mui-image';

import rangerImg from './images/Ranger_with_pe.png';

function PopupToken(props) {

    const popupStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 400,
        p: 4,
        borderRadius: 8
    };


    return (
        <Box display='flex' flexDirection='column' sx={popupStyle}>
            <Box sx={{ maxWidth: 400 }}>
                <Image src={rangerImg} alt='ranger gift' sx={{ filter: 'drop-shadow(0px 0px 50px #000)' }} />
            </Box>
            <Box className='extDataBox' display='flex' flexDirection='column' alignItems='center' sx={{ p: 3, borderRadius: 8, backgroundColor: 'rgba(85, 27, 140, 0.8)' }}>

                <Typography id="gift-popup-title" variant="h5" component="h2" color='white'>
                    Congrats!
                </Typography>
                <Box display='flex' flexDirection='row' >
                    <Typography id="gift-popup-description" variant="h5" component="h2" color='white'>
                        You got&nbsp;
                    </Typography>
                    <Typography id="gift-popup-description" variant="h5" component="h2" color='#a1c126'>
                        <strong>{props.reward_tokens}</strong>&nbsp;
                    </Typography>
                    <Typography id="gift-popup-description" variant="h5" component="h2" color='white'>
                        PE
                    </Typography>
                </Box>
            </Box>
        </Box>
    );

} export default PopupToken;