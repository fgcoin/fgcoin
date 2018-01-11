var FlatPricing = artifacts.require('./FlatPricing.sol');

module.exports = function (deployer, network) {
  if (network == 'development') {
    var weiPerToken = 462962962962963;
    deployer.deploy(FlatPricing, weiPerToken);
  }
  if (network == 'ropsten' || network == 'infuraropsten') {
    var weiPerToken = 462962962962963;
    deployer.deploy(FlatPricing, weiPerToken);
  }
  if(network == 'mainnet' || network == 'infuramainnet'){
    var weiPerToken = 462962962962963;
    deployer.deploy(FlatPricing, weiPerToken);
  }
};
