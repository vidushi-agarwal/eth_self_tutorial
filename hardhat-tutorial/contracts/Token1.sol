pragma solidity ^0.7.0;

contract Token1 {
    string public name = "My hardhat Token";
    string public symbol = "MHT";
    uint256 public totalSupply = 100000;
    address public owner;
    mapping(address => uint256) balances;

    constructor() {
        owner = msg.sender;
        balances[msg.sender] = totalSupply;
    }

    function transfer(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] = balances[msg.sender] - amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return (balances[account]);
    }
}
