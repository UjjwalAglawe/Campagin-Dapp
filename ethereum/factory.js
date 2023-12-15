import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xe6B9F9aA26427e5f7C01F0375b8ac497da73374C"
);

export default instance;
