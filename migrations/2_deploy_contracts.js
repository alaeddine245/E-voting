var Election = artifacts.require("./Election.sol") ;
// we add it to the manifest of deployed contracts to ensure that it gets deployed when we run the migrations .
module.exports = function (deployer) {
deployer.deploy ( Election );
};