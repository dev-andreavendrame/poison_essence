import PoisonEssenceToken from '../ABI/PoisonEssenceToken.json';
import PoisonExtractorToken from '../ABI/PlaceholderExtractor.json';
import PoisonEssenceExtractorLogic from '../ABI/PoisonEssenceExtractor.json';
import AssetMarketLogic from '../ABI/PoisonEssenceAssets.json';

// Polygon smart contract addresses
export const OPENSEA_EXTRACTOR_ADDRESS = "0x2953399124F0cBB46d2CbACD8A89cF0599974963";
export const PE_TOKEN_ADDRESS = "0xa05ECF4Eb962591979Bb3F936c0B8201524660E8";
export const EXTRACTOR_LOGIC_ADDRESS = "0x44bdE93242A7E194679449fE5858D95b5Cc5ca34";
export const ASSET_MARKET_LOGIC_ADDRESS = "0xcce8c462fbfbc7e46a0761db954495afb6757396";

// Smart Contract ABIs
const PE_TOKEN_ABI = PoisonEssenceToken['abi'];
const EXTRACTOR_TOKEN_ABI = PoisonExtractorToken['abi'];
const EXTRACTOR_LOGIC_ABI = PoisonEssenceExtractorLogic['abi'];
const ASSET_MARKET_ABI = AssetMarketLogic['abi'];

// 1. Import ethers
const ethers = require('ethers');

// 2. Define network configurations
const providerRPC = {
  polygon: {
    name: 'Polygon',
    rpc: 'https://polygon-mainnet.blastapi.io/51597bed-7bab-4ff0-b412-cbb3febf9803',
    chainId: 137,
  },
};
// 3. Create ethers provider
export const polygonProvider = new ethers.providers.StaticJsonRpcProvider(
  providerRPC.polygon.rpc, 
  {
    chainId: providerRPC.polygon.chainId,
    name: providerRPC.polygon.name,
  }
);

// Metamask provider
export const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);

// ---------------------------------- //
// ---------- SC instances ---------- //
// ---------------------------------- //

// Poison Essence token
export const peTokenReadable = new ethers.Contract(PE_TOKEN_ADDRESS, PE_TOKEN_ABI, polygonProvider);
export const peTokenWritable = new ethers.Contract(PE_TOKEN_ADDRESS, PE_TOKEN_ABI, metamaskProvider.getSigner());

// Placeholder for Poison Extractor
export const extractorTokenReadable = new ethers.Contract(OPENSEA_EXTRACTOR_ADDRESS, EXTRACTOR_TOKEN_ABI, polygonProvider);
export const extractorTokenWritable = new ethers.Contract(OPENSEA_EXTRACTOR_ADDRESS, EXTRACTOR_TOKEN_ABI, metamaskProvider.getSigner());

// Poison Extractor logic
export const extractorLogicReadable = new ethers.Contract(EXTRACTOR_LOGIC_ADDRESS, EXTRACTOR_LOGIC_ABI, polygonProvider);
export const extractorLogicWritable = new ethers.Contract(EXTRACTOR_LOGIC_ADDRESS, EXTRACTOR_LOGIC_ABI, metamaskProvider.getSigner());

// Asset market logic
export const assetMarketLogicReadable = new ethers.Contract(ASSET_MARKET_LOGIC_ADDRESS, ASSET_MARKET_ABI, polygonProvider);
export const assetMarketLogicWritable = new ethers.Contract(ASSET_MARKET_LOGIC_ADDRESS, ASSET_MARKET_ABI, metamaskProvider.getSigner());