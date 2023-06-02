import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";


// contract Detials Variables
const contractAddress = process.env.NEXT_PUBLIC_Contract
import wizStakingABI from '.././contracts/ABIs/wixStaking'

// wixToken Detials
const wixContractAddress = process.env.NEXT_PUBLIC_ContractWIXToken
import wizContractABI from '.././contracts/ABIs/wixToken'




// https://etherscan.io/address/0xcc1b5e2ac4D61cab2755287DB5fc3330F36E0687
const providerOptions = {
  metamask: {
    // Enable MetaMask provider
    package: null, // No package needed as it is injected automatically
    options: {
      rpc: {
        // 5: process.env.NEXT_PUBLIC_INFURA_ID, 
      },
    },
  },
  // coinBase wallet
  coinbasewallet: {
    package: CoinbaseWalletSDK, // Coinbase Wallet package name
    options: {
      rpc: {  5: process.env.NEXT_PUBLIC_INFURA_ID, },
    },
  },
  // wallet Connect wallet
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {  5: process.env.NEXT_PUBLIC_INFURA_ID, },
    },
  },
};

var signer;
// connect wallet
const walletConnectionFun = () => {
  const [web3Modal, setWeb3Modal] = useState({});
  useEffect(() => {
    if (typeof window !== "undefined") {
      const web3modal = new Web3Modal({
        network: "goerli", // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });
      setWeb3Modal(web3modal);
    }
  }, []);

  const connectWlt = async () => {
    try {
      const provider = await web3Modal.connect();
      const instance = new ethers.providers.Web3Provider(provider);
      console.log("this is sinstane", instance);
      var network = await instance.getNetwork();
      network = network.chainId;
      signer = instance.getSigner();
      const address = await signer.getAddress();
      console.log("address ", address);
    
      // var balance = (await signer.getBalance()).toString();
      // balance = ethers.utils.formatEther(balance);
      // console.log("balance ", balance);

     var {wixContract_instance} =  Contract(true)


     var balance = (await wixContract_instance.balanceOf(address)).toString()
     balance = ethers.utils.formatEther(balance);


      return {
        success: true,
        balance,
        account: address,
        network,
      };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  };

  // this function used to diconnect Walelt
  const disConnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    signer = null;
    console.log("you want to dicsonnect Wallet");
    Contract(false)
  };

  return { connectWlt, disConnectWallet };
};







const Contract = (isConnect)=>{
  var contract_instance = null
  var wixContract_instance = null
  if(isConnect === true){
    contract_instance = new ethers.Contract( contractAddress , wizStakingABI , signer )
    wixContract_instance = new ethers.Contract( wixContractAddress , wizContractABI , signer )
  }else{
    contract_instance = null
    wixContract_instance = null
  }


  return {contract_instance , wixContract_instance}
}


export { walletConnectionFun  , Contract , signer};
