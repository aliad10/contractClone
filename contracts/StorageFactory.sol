pragma solidity ^0.8.6;
import "./CloneFactory.sol";
import "./Storage.sol";

contract StorageFactory is CloneFactory {
    string public data;
    address public implementation;
    address[] public clonedContracts;
    event ClonedContract(address _clonedContract);

    constructor(address _implementation) public {
        implementation = _implementation;
    }

    function createStorage() public {
        address clone = createClone(implementation);
        emit ClonedContract(clone);
        clonedContracts.push(clone);
    }

    function getAddress(uint256 i) public view returns (address) {
        return clonedContracts[i];
    }
}
