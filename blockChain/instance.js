import { ethers } from "ethers";

// https://etherscan.io/address/0xcc1b5e2ac4D61cab2755287DB5fc3330F36E0687

// function to Connect Wallet
let provider = null;
const connectButton = async () => {
  const { ethereum } = window;
  if (ethereum.isMetaMask) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);

    const { name, chainId } = await provider.getNetwork();

    var name = name;
    var chainId = chainId;
    var accounts = accounts;
    // var Balance = await provider.getBalance();
    var balance = 0.0001;
    // var balance = (await provider.getBalance()).toString();
    console.log("balance", balance);
    return { name, chainId, accounts, balance };
  } else {
    return { success: false, msg: "Install MetaMask" };
  }
};

//  function to diConnect Wallet

const diConnectWallet = () => {
  provider = null;
  var name = "";
  var chainId = "";
  var accounts = "";
  var Balance = 0;
  return { name, chainId, accounts, Balance };
};
export { connectButton, diConnectWallet };
