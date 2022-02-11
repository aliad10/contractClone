pragma solidity ^0.8.6;

contract Storage {
    string public data;

    function setData(string memory _data) public {
        data = _data;
    }
}
