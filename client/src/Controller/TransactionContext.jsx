import React, { useEffect, useState } from 'react';

import { ethers } from "ethers";

import { contractABI, contractAddress} from '../utils/constants';

// Creating react context
export const TransactionContext = React.createContext();

// To get access to the ethereum object in metamask
const { ethereum } = window;


const getEthereumContract = () => {
    // Passing ethereum window object; provider
    const provider = new ethers.providers.Web3Provider(ethereum);
    
    const signer = provider.getSigner();
   // contractAddress from constants.js file ; contractABI is fron TransactionContext.json file
   // signer from this section is passed as parameters
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    // Calling the above function will get this console log
    // console.log({
    //     provider,
    //     signer,
    //     transactionContract
    // });

    return transactionContract;


}

export const TransactionProvider = ({ children }) => {
    
    
    const [currentAccount, setCurrentAccount] = useState("");
    // State Variables are created here
    //New Implementation
    const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));


    // This handle change will dynamically update the form data
    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }

//------------------------------------------------------------------------------
// # THIS FUNCTION IS FOR CHECKING IF THE WALLET IS CONNECTED AT THE START
//------------------------------------------------------------------------------

    const checkIfWalletIsConnected = async () => {

        try {
            if(!ethereum) return alert("Error! Please install Metamask");
             // getting Metamask connected account
             const accounts = await ethereum.request({method: 'eth_accounts'});

            if (accounts.length){
                setCurrentAccount(accounts[0]);

                // getAllTransactions();
            }

            else{
                console.log('No accounts found');
            }

        console.log(accounts);
            
        } catch (error) {

            console.log(error);
            throw new Error("No ethereum object");
        }
             
    }
//------------------------------------------------------------------------------
 // THIS FUNCTION IS FOR CONNECTING THE ACCOUNT
//------------------------------------------------------------------------------
    const connectWallet = async () => {
        try {
          if (!ethereum) return alert("Please install MetaMask.");
    
          const accounts = await ethereum.request({ method: "eth_requestAccounts", });
    
          setCurrentAccount(accounts[0]);
          window.location.reload();
        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      };

//------------------------------------------------------------------------------
// THIS FUNCTION IS FOR SENDING TRANSACTION
//------------------------------------------------------------------------------
    

// New implementation
    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");
            
            // To establish access to the formData varables
            const { addressTo, amount, keyword, message } = formData;

            // This transactionContract variable can be used to call all of the contract related functions
            const transactionContract = getEthereumContract();
            // Here, the ethers package provides us utility functions to call, one of them is parse
            // parse generally parses decimal amount into grey hexadecimal amount
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5280', 
                    // (0x5280)hex = (21120)dec = 17664; gwei = 0.00002112; ether = 0.00000000000002112
                    value: parsedAmount._hex, 
                }]
            });
            
            // This is an asynchronous action
            const transactionHash = await transactionContract.addToBlockchain( addressTo, parsedAmount, message, keyword );

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();
            
            setTransactionCount(transactionCount.toNumber());


        } catch (error) {
            console.log(error);
    
          throw new Error("No ethereum object");
        }
    }
//------------------------------------------------------------------------------

    useEffect(() =>{
        checkIfWalletIsConnected();
    }, []);
        
    
    // State variables are passed through the context value here.
    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}
















