var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');
var FlatPricing = artifacts.require('./FlatPricing.sol');
var MultiSigWalletWithDailyLimit = artifacts.require('./MultiSigWalletWithDailyLimit.sol');
var AllocatedCrowdsale = artifacts.require('./AllocatedCrowdsale.sol');

const moment = require('moment');

module.exports = function (deployer, network) {
  if (network == 'development') {
    const token = CentrallyIssuedToken.address;
    const pricing = FlatPricing.address;
    const wallet = MultiSigWalletWithDailyLimit.address;
    const start = moment.utc('2018-01-01 18:00').toDate().getTime() / 1000;
    const end = moment.utc('2018-01-05 18:00').toDate().getTime() / 1000;
    const min = 0;
    const beneficiary = '0xbba0127bd50e4a01f2f9159ac3ac97dc9dbf70a2';
    const baseEthCap = 15 * Math.pow(10,18);
    const maxEthPerAddress = 65 * Math.pow(10,18);
    deployer.deploy(AllocatedCrowdsale, token, pricing, wallet, start, end, min, beneficiary, baseEthCap, maxEthPerAddress);
  }
  if(network == 'ropsten' || network == 'infuraropsten'){
    //beneficiary account (same as token owner)
    //password = p@ssw0rd123
    //private key = 0c7af007392e513dab6bdefe69fc354565b9581fc3dbd41944099c085b76c16f
    //address = 0x8e3e2Ae91926146a932acb242Fc8D3041dA97E73
    const token = CentrallyIssuedToken.address;
    const pricing = FlatPricing.address;
    const wallet = MultiSigWalletWithDailyLimit.address;
    const start = 1514847600;
    const end = 1516402800;
    const min = 0;
    const beneficiary = '0xbba0127bd50e4a01f2f9159ac3ac97dc9dbf70a2';
    const baseEthCap = 1 * Math.pow(10,18);
    const maxEthPerAddress = 65 * Math.pow(10,18);
    deployer.deploy(AllocatedCrowdsale, token, pricing, wallet, start, end, min, beneficiary, baseEthCap, maxEthPerAddress);
  }
  if(network == 'mainnet' || network == 'infuramainnet'){
    const token = CentrallyIssuedToken.address;
    const pricing = FlatPricing.address;
    const wallet = MultiSigWalletWithDailyLimit.address;
    const start = 1515625200;
    const end = 1516402800;
    const min = 0;
    const beneficiary = '0x867FD8A26372f0eDb5115FC5Cf3d485870E90983';
    const baseEthCap = 1 * Math.pow(10,18);
    const maxEthPerAddress = 165 * Math.pow(10,18);
    deployer.deploy(AllocatedCrowdsale, token, pricing, wallet, start, end, min, beneficiary, baseEthCap, maxEthPerAddress);
  }
};
