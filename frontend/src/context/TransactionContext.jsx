import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import React from "react";

import { contractABI, contactAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contactAddress,
    contractABI,
    signer
  );

  console.table(provider, signer, transactionContract);
};

export const TransactionProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState();

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install a wallet");
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if(accounts.length){
        setCurrentAccount(accounts[0]);
        
    }

    console.log(accounts);
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install a wallet");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);

    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum Object.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  });

  return (
    <TransactionContext.Provider value={{ connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
