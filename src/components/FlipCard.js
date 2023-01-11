import './FlipCard.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';

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
                            <Image src={props.logo} alt='SRS logo' />
                        </Box>
                        <Typography sx={{ fontSize: 16, color: "white", mt: 2 }}>
                            {props.madeBy}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>

    );

} export default FlipCard;