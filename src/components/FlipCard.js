import './FlipCard.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';

// icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SvgIcon } from '@mui/material';


// icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SvgIcon } from '@mui/material';


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
                        <Typography sx={{ fontSize: 16, color: "white", mt: 2 }}>
                        <Typography sx={{ fontSize: 16, color: "white", mt: 2 }}>
                            Made by:
                        </Typography>
                        <Box sx={{ width: 70, height: 70, mt: 1 }}>
                        <Box sx={{ width: 70, height: 70, mt: 1 }}>
                            <Image src={props.logo} alt='SRS logo' />
                        </Box>
                        <Typography sx={{ fontSize: 16, color: "white", mt: 1 }}>
                            {props.madeBy}
                        </Typography>
                        <Box display='flex' gap={2} sx={{ mt: 4 }}>
                            {props.socials["instagram"] !== "" &&
                                <Box sx={{ width: 40, height: 40, mt: 1 }}>
                                    <a href={props.socials["instagram"]} class="smallSocialIcon smallSocialIcon--instagram">
                                        <InstagramIcon />
                                    </a>
                                </Box>
                            }
                            {props.socials["website"] !== "" &&
                                <Box sx={{ width: 40, height: 40, mt: 1 }}>
                                    <a href={props.socials["website"]} class="smallSocialIcon smallSocialIcon--website">
                                        <LanguageIcon />
                                    </a>
                                </Box>
                            }
                            {props.socials["twitter"] !== "" &&
                                <Box sx={{ width: 40, height: 40, mt: 1 }}>
                                    <a href={props.socials["twitter"]} class="smallSocialIcon smallSocialIcon--twitter">
                                        <TwitterIcon />
                                    </a>
                                </Box>
                            }
                            {props.socials["discord"] !== "" &&
                                <Box sx={{ width: 40, height: 40, mt: 1 }}>
                                    <a href={props.socials["discord"]} class="smallSocialIcon smallSocialIcon--discord">
                                        <SvgIcon sx={{ mt: 0.9, ml: 0.9  }} >
                                            <path d="M10.308 8.0985c-.5553 0-.9929.4762-.9929 1.0705s.4474 1.0706.9929 1.0706c.5548 0 .9925-.4762.9925-1.0706s-.4477-1.0705-.9925-1.0705zm-3.5533 0c-.5548 0-.9923.4762-.9923 1.0705s.4475 1.0706.9923 1.0706c.5555 0 .9929-.4762.9929-1.0706.0099-.5943-.4374-1.0705-.9929-1.0705zM15.0385 0H1.9955C.8943.0021.0021.8943 0 1.9955v13.043c.0021 1.101.8943 1.993 1.9955 1.9952h11.0381l-.5129-1.7813 1.2457 1.1486 1.1776 1.0804 2.0994 1.8204V1.9955C17.0337.8961 16.1385 0 15.0385 0zm-3.7574 12.6051l-.6421-.779c1.2752-.36 1.7616-1.1483 1.7616-1.1483-.3989.2625-.7785.448-1.1195.5743-.4868.2042-.9541.3308-1.4114.4187-.9342.175-1.7909.1264-2.5211-.0099-.5551-.1072-1.0312-.2534-1.431-.4185-.2236-.0904-.4671-.1948-.7106-.3309-.0289-.0198-.0585-.029-.09-.0479-.0201-.0099-.0295-.0198-.0395-.0198l-.2728-.166s.4676.7692 1.7038 1.139l-.6522.7978c-2.1512-.068-2.9688-1.4696-2.9688-1.4696 0-3.1051 1.4015-5.6259 1.4015-5.6259 1.4024-1.0416 2.7254-1.0127 2.7254-1.0127l.0973.1167c-1.7486.4966-2.5495 1.2658-2.5495 1.2658s.2111-.1172.5735-.2732c1.0418-.4572 1.8696-.5737 2.2097-.6129.0585-.0094.1073-.0194.1661-.0194a8.215 8.215 0 0 1 1.966-.0198 8.105 8.105 0 0 1 2.9302.9244c.9083.4924-.7693-.7295-2.4237-1.2266l.1364-.155s1.3331-.03 2.7255 1.0119c0 0 1.4016 2.5216 1.4016 5.6266 0-.0098-.8144 1.3917-2.969 1.4594z" />
                                        </SvgIcon>
                                    </a>
                                </Box>
                            }
                            {props.socials["twitch"] !== "" &&
                                <Box sx={{ width: 40, height: 40, mt: 1 }}>
                                    <a href={props.socials["twitch"]} class="smallSocialIcon smallSocialIcon--twitch">
                                        <SvgIcon sx={{ mt: 0.9, ml: 0.7 }} >
                                            <path d="M2.2024-.5L.9325 2.7431V16h4.513v2.3976h2.5381L10.3816 16h3.6667l4.9355-4.9359V-.5H2.2024zm15.0894 10.7181l-2.821 2.8202H9.9576L7.5605 15.436v-2.3977H3.7526V1.1919h13.5385v9.0262zm-2.821-5.7822v4.9352h-1.6922V4.4359h1.6922zm-4.5132 0v4.9352h-1.692V4.4359h1.692z" />
                                        </SvgIcon>
                                    </a>
                                </Box>
                            }
                            {props.socials["youtube"] !== "" &&
                                <Box sx={{ width: 40, height: 40, mt: 1 }}>
                                    <a href={props.socials["youtube"]} class="smallSocialIcon smallSocialIcon--youtube">
                                        <YouTubeIcon />
                                    </a>
                                </Box>
                            }

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

    );

} export default FlipCard;



  // props.socials['instagram']



  // props.socials['instagram']