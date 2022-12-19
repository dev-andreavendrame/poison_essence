import PoisonEssenceToken from './ABI/PoisonEssenceToken.json';
import PoisonExtractorToken from './ABI/PlaceholderExtractor.json';
import PoisonEssenceExtractorLogic from './ABI/PoisonEssenceExtractor.json';
import GiftBoxLogic from './ABI/PoisonGiftBox.json';

// Smart Contract addresses
export const PLACEHOLDER_EXTRACTOR_ADDRESS = "0xB7CC731b4fbE236D3b8dCBcFaF166E7d7726d0a1";
export const TEST_TOKEN_ADDRESS = "0xf21dACf7CF1149917418f886590A1C1CAc535A0D";
export const TEST_EXTRACTOR_LOGIC_ADDRESS = "0x3902c23163Ce790AFB6F53f3DfA56d5731354AE4";
export const TEST_GIFT_BOX_LOGIC = "0x5436b1b1Bea69676f48Ed47DD9D282f5315544dD";

// Smart Contract ABIs
const PE_TOKEN_ABI = PoisonEssenceToken['abi'];
const EXTRACTOR_TOKEN_ABI = PoisonExtractorToken['abi'];
const EXTRACTOR_LOGIC_ABI = PoisonEssenceExtractorLogic['abi'];
const GIFT_BOX_LOGIC_ABI = GiftBoxLogic['abi'];


// 1. Import ethers
const ethers = require('ethers');

// 2. Define network configurations
const providerRPC = {
  moonbase: {
    name: 'moonbase-alpha',
    rpc: 'https://moonbase-alpha.blastapi.io/51597bed-7bab-4ff0-b412-cbb3febf9803',
    chainId: 1287, // 0x507 in hex,
  },
};
// 3. Create ethers provider
export const moonbaseProvider = new ethers.providers.StaticJsonRpcProvider(
  providerRPC.moonbase.rpc, 
  {
    chainId: providerRPC.moonbase.chainId,
    name: providerRPC.moonbase.name,
  }
);

// Metamask provider
export const metamaskProvider = new ethers.providers.Web3Provider(window.ethereum);

// ---------------------------------- //
// ---------- SC instances ---------- //
// ---------------------------------- //

// Poison Essence token
export const peTokenReadable = new ethers.Contract(TEST_TOKEN_ADDRESS, PE_TOKEN_ABI, moonbaseProvider);
export const peTokenWritable = new ethers.Contract(TEST_TOKEN_ADDRESS, PE_TOKEN_ABI, metamaskProvider.getSigner());

// Placeholder for Poison Extractor
export const extractorTokenReadable = new ethers.Contract(PLACEHOLDER_EXTRACTOR_ADDRESS, EXTRACTOR_TOKEN_ABI, moonbaseProvider);
export const extractorTokenWritable = new ethers.Contract(PLACEHOLDER_EXTRACTOR_ADDRESS, EXTRACTOR_TOKEN_ABI, metamaskProvider.getSigner());

// Poison Extractor logic
export const extractorLogicReadable = new ethers.Contract(TEST_EXTRACTOR_LOGIC_ADDRESS, EXTRACTOR_LOGIC_ABI, moonbaseProvider);
export const extractorLogicWritable = new ethers.Contract(TEST_EXTRACTOR_LOGIC_ADDRESS, EXTRACTOR_LOGIC_ABI, metamaskProvider.getSigner());

// Gift box logic
export const giftBoxLogicReadable = new ethers.Contract(TEST_GIFT_BOX_LOGIC, GIFT_BOX_LOGIC_ABI, moonbaseProvider);
export const giftBoxLogicWritable = new ethers.Contract(TEST_GIFT_BOX_LOGIC, GIFT_BOX_LOGIC_ABI, metamaskProvider.getSigner());