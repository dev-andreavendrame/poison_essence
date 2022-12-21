import { useState } from 'react';
import { styled } from "@mui/material/styles";

import { Box, Button, Typography, Modal } from '@mui/material';

import { giftBoxLogicWritable } from './smart_contracts/MoonbaseConfig';
import { ethers } from 'ethers';
import PopupToken from './PopupToken';

function DailyGiftSection(props) {

    const GIFT_BOX_READY = 0;
    const GIFT_BOX_NOT_READY = 1;
    const GIFT_BOX_REVEALED = 2;

    const [giftBoxState, setGiftBoxState] = useState(GIFT_BOX_NOT_READY);
    const [accountInitialized, setAccountInitialized] = useState(false);

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const [popupTokens, setPopupTokens] = useState(0);


    // START --- Update section state -->
    giftBoxLogicWritable.isInitialized()
        .then(_isInit => {
            setAccountInitialized(_isInit);
        }
        );

    giftBoxLogicWritable.canUserClaimBox()
        .then(_userCanClaim => {
            if (_userCanClaim) {
                setGiftBoxState(GIFT_BOX_READY);
            }
        });

    // <-- END --- Update section state

    const handleClick = async () => {
        if (giftBoxState !== GIFT_BOX_READY) {
            giftBoxLogicWritable.canUserClaimBox()
                .then((_isAbleToClaim) => {
                    if (_isAbleToClaim) {
                        console.log("User can claim the box");
                        setGiftBoxState(GIFT_BOX_READY);
                    } else {
                        console.log("User cannot claim the box yet.");
                        if (giftBoxState !== GIFT_BOX_NOT_READY) {
                            setGiftBoxState(GIFT_BOX_NOT_READY);
                        }
                    }
                }).catch(error => {
                    console.log(error);
                });
        } else {
            await giftBoxLogicWritable.openGiftBox()
                .then(reward => {
                    console.log("Claimed %d PE tokens", reward);
                    setGiftBoxState(GIFT_BOX_REVEALED);
                    giftBoxLogicWritable.on("BoxOpened", (_from, _amount, _event) => {
                        let eventInfo = {
                            from: _from,
                            amount: _amount
                        };
                        setPopupTokens(ethers.utils.formatEther(eventInfo['amount']));
                        console.log("Amount of PE gained: %d from %s", eventInfo['amount'], eventInfo['from']);
                        handleOpen();

                    });
                    console.log("Gift box state: GIFT_BOX_REVEALED");
                }).catch(error => {
                    console.log(error);
                })
        }
    };

    const BonusButton = styled(Button)({
        borderRadius: 50,
        outline: '4px solid #00a2ff',
        transition: 'outline-offset 1s, outline-color 1s'
    });

    const initializeChristmasJourney = async () => {
        const USER_WALLET = props.address;
        console.log("WALLET UTENTE: %s", USER_WALLET);
        giftBoxLogicWritable.inizializeAccountClaim(USER_WALLET)
            .then(_isInit => {
                setAccountInitialized(_isInit);
                console.log("Account is initialized to claim boxes");
            }).catch(error => {
                console.log("Account initialization error...");
                console.log(error);
            })
    }

    function getGiftingInitializationButton() {
        if (!accountInitialized) {
            return (<BonusButton className='giftButton' sx={{ ml: 5 }} onClick={initializeChristmasJourney}>
                <Typography sx={{ p: 1, fontWeight: 'bold' }}>
                    Start Holiday journey
                </Typography>
            </BonusButton>);

        }
    }

    function loadGiftState() {

        if (giftBoxState === GIFT_BOX_READY) {
            return 'giftIcon';
        } else if (giftBoxState === GIFT_BOX_NOT_READY) {
            return 'giftNotReadyIcon';
        } else {
            // giftBoxState == GIFT_BOX_REVEALED
            return 'giftNotReadyIcon';
        }
    }

    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ backdropFilter: "blur(3px)" }}
            >
                <PopupToken
                    reward_tokens={popupTokens} />
            </Modal>

            <Box display='flex' justifyContent='center' alignItems='center' sx={{ mb: 5 }}>
                <Box sx={{ minWidth: 200 }}>
                    <BonusButton className={loadGiftState()} onClick={handleClick} />
                </Box>

                <Box className='bonusBannerBox' p={1} sx={{ ml: 5, borderRadius: 8, pt: 3, pb: 3, pl: 5, pr: 5 }} >
                    <Box display='inline-flex'>
                        <Typography sx={{ mb: 1, color: 'white', fontWeight: 'bold', textShadow: ' 1px 2px 8px #303030', fontSize: 'clamp(30px, 4vw, 46px)' }} variant='h3'>
                            Claim now your gift!
                        </Typography>
                        {getGiftingInitializationButton()}
                    </Box>

                    <Typography sx={{ color: 'white', fontWeight: 'light', fontSize: 'clamp(16px, 4vw, 20px)' }} variant='h6'>
                        Click on the giftbox to earn some PE tokens.
                    </Typography>
                    <Typography sx={{ color: 'white', fontWeight: 'light', fontSize: 'clamp(16px, 4vw, 20px)' }} variant='h6'>
                        <strong>Remember to return tomorrow:</strong> the holiday gifts will be available daily for the rest of 2022!
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
} export default DailyGiftSection;