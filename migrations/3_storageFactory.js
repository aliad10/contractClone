const Storage = artifacts.require("Storage.sol");
const StorageFactory = artifacts.require("StorageFactory.sol");

module.exports = async function (deployer, network, accounts) {
  let storageAddress = Storage.address;

  await deployer.deploy(StorageFactory, storageAddress);
  const storageInstance = await Storage.deployed();
  await storageInstance.setData("data from main contract");
  console.log("data: ", await storageInstance.data());
  const factoryInstance = await StorageFactory.deployed();
  await factoryInstance.createStorage();
  const cloneAddress = await factoryInstance.getAddress(0);
  const cloneInstance = await Storage.at(cloneAddress);
  await cloneInstance.setData("data from clone contract");
  console.log("data:", await cloneInstance.data());
};
