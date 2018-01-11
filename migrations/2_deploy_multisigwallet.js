var MultiSigWalletWithDailyLimit = artifacts.require('./MultiSigWalletWithDailyLimit.sol');

module.exports = function (deployer, network) {
  if (network == 'development') {
    deployer.deploy(MultiSigWalletWithDailyLimit, ['0xbba0127bd50e4a01f2f9159ac3ac97dc9dbf70a2', '0x55B2b129B25a2c938bb140bDcDDd023AaCD9F2AF'], 2, 0);
  }
  
  if (network == 'ropsten' || network == 'infuraropsten') {
    //account1
    //password = p@ssw0rd123
    //private key = aa1136bbb0d606cd96ea94753ca416b0940399c57aa1d66fd6869e9f4b7f3edd
    //address = 0x4F0A6c734AE57998b02aA9f32674Fa5A37988De6

    //account2
    //password = p@ssw0rd123
    //private key = d6741ef2d9807f0ad674c09976b59d12381323b5e7c5af0a4afda8a3281e1dfb
    //address = 0xDEE8ae658dcfbd41E0a03150D4370B3921F96870
    deployer.deploy(MultiSigWalletWithDailyLimit, ['0xbba0127bd50e4a01f2f9159ac3ac97dc9dbf70a2', '0x55B2b129B25a2c938bb140bDcDDd023AaCD9F2AF'], 2, 0);
  }
  if (network == 'mainnet' || network == 'infuramainnet'){
    deployer.deploy(MultiSigWalletWithDailyLimit, [
      '0x867FD8A26372f0eDb5115FC5Cf3d485870E90983',
      '0xe1227852B0Bf3A92C7d2b000F300857E4e84CcA7'
    ], 2, 0);
  }
};