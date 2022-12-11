import { useState, useEffect } from 'react';
import MButton from '@mui/material/Button';
import './App.css';
import BonusAssetCard from './components/BonusAssetCard';
import { BONUS_ASSETS } from './components/BonusAssetsData';
import ExtractorSection from './components/ExtractorSection';
import { extractorLogicWritable, extractorTokenWritable, TEST_EXTRACTOR_LOGIC_ADDRESS } from './components/smart_contracts/MoonbaseConfig';
import { AppBar, Grid } from '@mui/material';
import Box from '@mui/material/Box';

function App() {

  // React
  const [currentAccount, setCurrentAccount] = useState("");

  console.log(BONUS_ASSETS);
  useEffect(() => {
  });


  function updateConnectedWallet() {

    if (currentAccount === "") {
      console.log("Not logged in");
      return (<MButton variant="contained" style={{
        borderRadius: 10,
        backgroundColor: "#a1c126",
        padding: "10px 15px",
        fontSize: "13px"
      }} size="large" onClick={connectWallet}>Connect wallet</MButton>);
    } else {
      return (
        <div class="d-inline-flex" style={{
          padding: "10px 15px",
          fontSize: "13px",
          color: "#bad640"
        }}>
          <h5 class="px-2">{"Connected wallet: " + currentAccount.substring(0, 5) + "..." + currentAccount.substring(currentAccount.length, currentAccount.length - 5)}</h5>
        </div>
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


  // Interface definition

  return (
    <div className="App" class="pb-5 bg" >
      <AppBar position="static" sx={{ height: 100, backgroundColor: "#551b8c", boxShadow: 24 }}>
        <Box sx={{ display: "flex", mt: 3 }}>
          <Box sx={{ width: '100%', ml: 4 }}>
            <h2 class="text-light">Poison Essence</h2>
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <MButton sx={{ color: '#a1c126', backgroundColor: "#303030", border: 3, borderColor: '#a1c126', ml: 1, borderRadius: 2 }} variant="contained" size="medium" onClick={initializeAccount}>
              Initialize account
            </MButton>
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <MButton sx={{ color: '#a1c126', backgroundColor: "#303030", border: 3, borderColor: '#a1c126', ml: 1, mr: 2, borderRadius: 2 }} variant="contained" size="medium" onClick={approveExtractorsManagement}>
              Approve extractors management
            </MButton>
          </Box>
          <Box sx={{ flexShrink: 0, ml: 5, mr: 4 }}>
            {updateConnectedWallet()}
          </Box>
        </Box>
      </AppBar>
      <div>
        <div class="mt-5 container">
          <div class="row align-items-center" >
            <ExtractorSection
              address={currentAccount} />

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
      </div>
    </div >
  );
}

export default App;
