import PredictionMarket from './contracts/PredictionMarket.json';
import { ethers, Contract } from 'ethers';

//everything related to connecting the frontend with blockchain
const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      //check metamask is install it will inject a metamask object
      if (window.ethereum) {
        //approve from metamask pop up
        //await from confirmation
        await window.ethereum.enable();
        // a connection to the ethereum blockchain
        // provider provides a read-only connection to the blockchain
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log(provider);
        // sign the transactions
        // signer provides a way to write on the block
        // like transactions and updating the state
        const signer = provider.getSigner();
        console.log(signer);
        // signer address
        const signerAddress = await signer.getAddress();

        // a JSObject abstraction to communicate with the smart contract on the blockchain
        // consider this a instance of the contract that we can interact with
        // giving us access to all the functions and state variables in the deployed smart contract
        const predictionMarket = new Contract(
          PredictionMarket.networks[window.ethereum.networkVersion].address,
          PredictionMarket.abi,
          signer
        );

        resolve({ signerAddress, predictionMarket });
      }
    });
  });

export { getBlockchain };
