// React imports
import { Box, Button, Typography } from '@mui/material';

// Logic imports
import { peTokenWritable, ASSET_MARKET_LOGIC_ADDRESS } from './smart_contracts/blockchainConfig/PolygonConfig';


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

    const approvePESpending = () => {
        const MAX_PE_AMOUNT = "20000000000000000000000000";  // Approve the max supply (20 millions) to ask only one time the approval
        peTokenWritable.approve(ASSET_MARKET_LOGIC_ADDRESS, MAX_PE_AMOUNT)
        .then(result => {
            console.log(result);
            console.log("Approving market to spend user PE...");
            peTokenWritable.on("Approval", (_owner, _spender, _value) => {
                let eventInfo = {
                    owner: _owner,
                    spender: _spender,
                    value: _value
                };
                if (eventInfo['value'] > 0) {
                    console.log("Asset Market Smart contract authorized!");
                } else {
                    console.log("Something went wrong, try again the authorization process");
                }
            });
        });
    };

    return (

        <Box display='flex' flexDirection='column' sx={popupStyle}>
            <Box className='extDataBox' display='flex' flexDirection='column' alignItems='center' sx={{ p: 3, borderRadius: 8, backgroundColor: 'rgba(85, 27, 140, 0.8)' }}>
                <Typography align='center' id="authorization-popup-title" variant="h1" color='white' sx={{ fontSize: 18, fontWeight: 'bold', textShadow: ' 1px 2px 8px #303030' }} >
                    You need to approve the Asset Market smart contract to spend your PE tokens before proceding.
                </Typography>
                <Box display='flex' flexDirection='row' sx={{ mt: 1 }}>
                    <Typography align='center' id="authorization-popup-description" variant="subtitle1" color='white' sx={{ fontSize: 14, textShadow: ' 1px 2px 8px #303030' }} >
                    Please, give your authorization by confirming the transaction. This operation is required only once.
                    </Typography>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Button className='buttonGreen' variant='contained' size='large' sx={{ fontWeight: 'bold' }} onClick={approvePESpending}>
                        <Typography align='center' id="authorization-popup-button" variant="subtitle1" color='white' sx={{ fontSize: 16, fontWeight: 'bold', textShadow: ' 1px 1px 8px #202020' }} >
                            Authorize
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );

} export default SaleAuthorizationPopup;