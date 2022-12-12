import { useState, useEffect } from 'react';
import MButton from '@mui/material/Button';
import './App.css';
import BonusAssetCard from './components/BonusAssetCard';
import { BONUS_ASSETS } from './components/BonusAssetsData';
import ExtractorSection from './components/ExtractorSection';
import { extractorLogicWritable, extractorTokenWritable, peTokenReadable, TEST_EXTRACTOR_LOGIC_ADDRESS } from './components/smart_contracts/MoonbaseConfig';
import { AppBar, Grid, Icon, IconButton, Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';
import RefreshIcon from '@mui/icons-material/Refresh';
import peLogo from './components/images/frog_logo.png';
import Image from 'mui-image';


function App() {

  // React
  const [currentAccount, setCurrentAccount] = useState("");
  const [refreshIndex, setRefreshIndex] = useState(0);

  console.log(BONUS_ASSETS);
  useEffect(() => {
  });


  function updateConnectedWallet() {

    if (currentAccount === "") {
      console.log("Not logged in");
      return (
        <MButton className="buttonGreen" variant="contained"
          sx={{
            borderRadius: 3,
            backgroundColor: "#a1c126",
            padding: "10px 15px",
            maxWidth: '100px',
            maxHeight: '60px',
            minWidth: '5px',
            minHeight: '5px',
            fontSize: 'clamp(10px, 1vw, 14px)'
          }} onClick={connectWallet}>Connect wallet</MButton>);
    } else {
      return (

        <Box display="inline-flex" alignContent="center">
          <Box sx={{ ml: 1, mr: 1 }}>
            <Typography sx={{ color: "#bad640", fontSize: 'clamp(12px, 1vw, 20px)' }} >
              Connected&nbsp;wallet:
            </Typography>
            <Typography sx={{ color: "#bad640", fontSize: 'clamp(12px, 1vw, 20px)' }} >
              {currentAccount.substring(0, 5) + "..." + currentAccount.substring(currentAccount.length, currentAccount.length - 5)}
            </Typography>
          </Box>

          <Box>
            <MButton className="buttonGreen" onClick={refreshDapp} sx={{ ml: 1, borderRadius: 25, p: 1, boxShadow: 6, maxWidth: '100px', maxHeight: '60px', minWidth: '10px', minHeight: '5px' }} variant="contained"  >
              <RefreshIcon fontSize='medium' />
            </MButton>
          </Box>
        </Box>
      );
    }
  }

  const initializeAccount = async () => {

    if (currentAccount !== "") {
      extractorLogicWritable.initializeNewAccount(currentAccount)
        .then(() => {
          console.log("Account initialized correctly.");
        })
        .catch(error => {
          console.log(error);
        })
    }

  }

  const approveExtractorsManagement = async () => {

    if (currentAccount !== "") {
      extractorTokenWritable.setApprovalForAll(TEST_EXTRACTOR_LOGIC_ADDRESS, true)
        .then(() => {
          console.log("Extractors management approved.");
        })
        .catch(error => {
          console.log(error);
        })
    }

  }

  const connectWallet = async () => {

    // Check Metamask presence
    var { ethereum } = window;
    if (!ethereum) {
      console.log("Metamask not installed");
    } else {
      console.log("Wallet found, ready to start");
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); // fundamental to add this line for correctness
      if (accounts.length !== 0) {
        setCurrentAccount(accounts[0]);
        console.log("Account 0: " + accounts[0]);
      } else {
        console.log("0 account connected to Metamask extension");
      }
    } catch {
      console.log("Error during Metamask connection");
    }

  }

  const refreshDapp = () => {
    setRefreshIndex(refreshIndex + 1);
  }


  // Interface definition

  return (
    <div className="App" class="pb-5 bg" >
      <AppBar position="static" sx={{ height: 130, backgroundColor: "#551b8c", boxShadow: 24 }}>

        <Box display="inline-flex" alignItems="center" justifyContent="space-between" sx={{ height: 100, mt: 3 }} >
          <Box display='inline-flex' sx={{ ml: 4, alignItems: "center" }}>
            <Box sx={{ minWidth: 100, maxWidth: 150, minHeight: 100, maxHeight: 150, mt: 2, elevation: 5, borderRadius: 100, boxShadow: 12, }} >
              <img src={peLogo} alt="Poison Essence logo" class="img-fluid" />
            </Box>
            <Box >
              <Typography sx={{ ml: 2, mb: 3, fontWeight: 'bold', fontSize: 'clamp(26px, 4vw, 36px)', textAlign: 'left' }} variant='h4' >
                Poison Essence
              </Typography>
            </Box>
          </Box>

          <Box sx={{ minWidth: 50 }} />

          <Box display="inline-flex" sx={{ mr: 4, mb: 2, alignItems: "center", justifyContent: "flex-end", minHeight: 10 }}>
            <Box >
              <MButton className="buttonDark" sx={{ color: '#a1c126', backgroundColor: "#303030", border: 3, borderColor: '#a1c126', borderRadius: 2, maxWidth: '100px', maxHeight: '60px', minWidth: '5px', minHeight: '5px', fontSize: 'clamp(10px, 1vw, 14px)' }} variant="contained" onClick={initializeAccount}>
                Initialize account
              </MButton>
            </Box>
            <Box >
              <MButton className="buttonDark" sx={{ color: '#a1c126', backgroundColor: "#303030", border: 3, borderColor: '#a1c126', ml: 1, mr: 1, borderRadius: 2, maxWidth: '200px', maxHeight: '60px', minWidth: '5px', minHeight: '5px', fontSize: 'clamp(10px, 1vw, 14px)' }} variant="contained" onClick={approveExtractorsManagement}>
                Approve&nbsp;Extractors management
              </MButton>
            </Box>
            <Box >
              {updateConnectedWallet()}
            </Box>
          </Box>
        </Box>

      </AppBar>
      <div>
        <div class="mt-5 container">
          <div class="row align-items-center" >
            <ExtractorSection
              address={currentAccount} />
          </div>
          <Grid container spacing={2} direction="row" display="flex" justifyContent="flex-start" alignItems="flex-start" sx={{ mt: 5 }}>
            {
              BONUS_ASSETS.map((info) => {
                return (
                  <BonusAssetCard
                    key={info['id']}
                    name={info['name']}
                    cost={info['cost']}
                    assetImage={info['image']}
                  />);
              }
              )
            }
          </Grid>
        </div>
      </div>
    </div >
  );
} export default App;
