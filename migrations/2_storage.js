const Storage = artifacts.require("Storage.sol");

module.exports = async function (deployer, network, accounts) {
  deployer.deploy(Storage);
};
