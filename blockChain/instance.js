import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

const providerOptions = {
  metamask: {
    // Enable MetaMask provider
    package: null, // No package needed as it is injected automatically
    options: {
      rpc: {},
    },
  },
  // coinBase wallet
  coinbasewallet: {
    package: CoinbaseWalletSDK, // Coinbase Wallet package name
    options: {
      rpc: {},
    },
  },
  // wallet Connect wallet
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {},
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
      var balance = (await signer.getBalance()).toString();
      balance = ethers.utils.formatEther(balance);
      console.log("balance ", balance);

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
  };

  return { connectWlt, disConnectWallet };
};

export { walletConnectionFun };
