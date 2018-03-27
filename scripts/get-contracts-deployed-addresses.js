var Genbby_Token = artifacts.require('GenbbyToken');
var Crowdsale_Phase_1 = artifacts.require('CrowdsalePhase1');
var Versus_Beta = artifacts.require('VersusBeta');

module.exports = function callback() {

    console.log('Owner of the contracts:')
    console.log(web3.eth.coinbase);

    console.log('Address of the deployed token:')
    console.log(Genbby_Token.address);

    console.log('Address of the deployed crowdsale:');
    console.log(Crowdsale_Phase_1.address);

    console.log('Address of the deployed versus beta:');
    console.log(Versus_Beta.address);   

}