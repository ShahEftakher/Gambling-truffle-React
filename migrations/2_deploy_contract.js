const PredictionMarket = artifacts.require('PredictionMarket.sol');

const SIDE = {
  BIDEN: 0,
  TRUMP: 1,
};

module.exports = async function (deployer, _network, addresses) {
  const [admin, oracle, gambler1, gambler2, gambler3, gambler4, _] = addresses;
  const tokenAddress = '0x80A11f32564b80421bE2b5893c88651Ce1963904';
  await deployer.deploy(PredictionMarket, oracle, tokenAddress);
  const predictionMarket = await PredictionMarket.deployed();

  // await predictionMarket.placeBet(SIDE.BIDEN, 2, {
  //   from: gambler1,
  // });
  // await predictionMarket.placeBet(SIDE.BIDEN, 5, {
  //   from: gambler1,
  // });
  // await predictionMarket.placeBet(SIDE.TRUMP, 3, {
  //   from: gambler2,
  // });
  // await predictionMarket.placeBet(SIDE.TRUMP, 10, {
  //   from: gambler3,
  // });
};
