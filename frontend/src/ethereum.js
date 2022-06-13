import PredictionMarket from './contracts/PredictionMarket.json';
import { ethers, Contract } from 'ethers';

//very idiotic explanation
// explain later
//
const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      //check metamask is install it will inject a metamask object
      if (window.ethereum) {
        //approve from metamask pop up
        //await from confirmation
        await window.ethereum.enable();
        // a connection to the ethereum blockchain
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // sign the transactions
        const signer = provider.getSigner();
        // signer address
        const signerAddress = await signer.getAddress();

        // a JSObject abstraction to communicate with the smart contract on the blockchain
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
