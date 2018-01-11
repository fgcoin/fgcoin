var AllocatedCrowdsale = artifacts.require('./AllocatedCrowdsale.sol');
var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');
var MultiSigWalletWithDailyLimit = artifacts.require('./MultiSigWalletWithDailyLimit.sol');
var NullFinalizeAgent = artifacts.require('./NullFinalizeAgent.sol');
var DefaultFinalizeAgent = artifacts.require('./DefaultFinalizeAgent.sol');

module.exports = function (deployer, network) {
    if (network == 'development') {
        deployer.then(() => {
            Promise.all([CentrallyIssuedToken.deployed(), AllocatedCrowdsale.deployed()]).then(results => {
                var token = results[0];
                var crowdsale = results[1];
                token.approve(AllocatedCrowdsale.address, 1 * Math.pow(10, 6) * Math.pow(10, 18));
                token.setTransferAgent(MultiSigWalletWithDailyLimit.address, true);
                token.setTransferAgent(AllocatedCrowdsale.address, true);
                token.setTransferAgent(DefaultFinalizeAgent.address, true);
                token.setTransferAgent('0xbba0127bd50e4a01f2f9159ac3ac97dc9dbf70a2', true);
                token.setReleaseAgent(DefaultFinalizeAgent.address);
                token.setUpgradeMaster(MultiSigWalletWithDailyLimit.address);
                crowdsale.setFinalizeAgent(DefaultFinalizeAgent.address);
            });
        });
    }
    if (network == 'ropsten' || network == 'infuraropsten') {
        deployer.then(() => {
            Promise.all([CentrallyIssuedToken.deployed(), AllocatedCrowdsale.deployed()]).then(results => {
                var token = results[0];
                var crowdsale = results[1];
                return Promise.all([
                    token.approve(AllocatedCrowdsale.address, 1 * Math.pow(10, 6) * Math.pow(10, 18)),
                    token.setTransferAgent(MultiSigWalletWithDailyLimit.address, true),
                    token.setTransferAgent(AllocatedCrowdsale.address, true),
                    token.setTransferAgent(DefaultFinalizeAgent.address, true),
                    token.setTransferAgent('0xbba0127bd50e4a01f2f9159ac3ac97dc9dbf70a2', true),
                    token.setReleaseAgent(DefaultFinalizeAgent.address),
                    token.setUpgradeMaster(MultiSigWalletWithDailyLimit.address),
                    crowdsale.setFinalizeAgent(DefaultFinalizeAgent.address)
                ]);
            }).then(() => console.log('Deploy Successful')).catch(error => console.log('ERROR', error));
        });
    }
    if (network == 'mainnet' || network == 'infuramainnet') {
        deployer.then(() => {
            Promise.all([CentrallyIssuedToken.deployed(), AllocatedCrowdsale.deployed()]).then(results => {
                var token = results[0];
                var crowdsale = results[1];
                return Promise.all([
                    token.approve(AllocatedCrowdsale.address, 1 * Math.pow(10, 6) * Math.pow(10, 18)),
                    token.setTransferAgent(MultiSigWalletWithDailyLimit.address, true),
                    token.setTransferAgent(AllocatedCrowdsale.address, true),
                    token.setTransferAgent(DefaultFinalizeAgent.address, true),
                    token.setTransferAgent('0x867FD8A26372f0eDb5115FC5Cf3d485870E90983', true),
                    token.setReleaseAgent(DefaultFinalizeAgent.address),
                    token.setUpgradeMaster(MultiSigWalletWithDailyLimit.address),
                    crowdsale.setFinalizeAgent(DefaultFinalizeAgent.address)
                ]);
            }).then(() => console.log('Deploy Successful')).catch(error => console.log('ERROR', error));
        });
    }
}