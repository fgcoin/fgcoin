var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');

module.exports = function (deployer, network) {
  if (network == 'development') {
    var owner = '0xbba0127bd50e4a01f2f9159ac3ac97dc9dbf70a2';
    var name = 'FutureGameCoin';
    var symbol = 'FGC';
    var totalSupply = 28 * Math.pow(10,6) * Math.pow(10,18);
    var decimals = 18;
    deployer.deploy(CentrallyIssuedToken, owner, name, symbol, totalSupply, decimals);
  }
  if(network == 'ropsten' || network == 'infuraropsten'){
    //owner account
    //password = p@ssw0rd123
    //private key = 0c7af007392e513dab6bdefe69fc354565b9581fc3dbd41944099c085b76c16f
    //address = 0x8e3e2Ae91926146a932acb242Fc8D3041dA97E73
    var owner = '0xbba0127bd50e4a01f2f9159ac3ac97dc9dbf70a2';
    var name = 'FutureGameCoin';
    var symbol = 'FGC';
    var totalSupply = 28 * Math.pow(10,6) * Math.pow(10,18);
    var decimals = 18;
    deployer.deploy(CentrallyIssuedToken, owner, name, symbol, totalSupply, decimals);
  }
  if(network == 'mainnet' || network == 'infuramainnet'){
    var owner = '0x867FD8A26372f0eDb5115FC5Cf3d485870E90983';
    var name = 'FutureGameCoin';
    var symbol = 'FGC';
    var totalSupply = 28 * Math.pow(10,6) * Math.pow(10,18);
    var decimals = 18;
    deployer.deploy(CentrallyIssuedToken, owner, name, symbol, totalSupply, decimals);
  }
};
