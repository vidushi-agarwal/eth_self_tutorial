const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  it("transfer account to multiple signers", async function () {
    const [owner, acc1, acc2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    const hardhatToken = await Token.deploy();
    const balance = await hardhatToken.balanceOf(owner.address);
    await hardhatToken.transfer(acc1.address, 50);
    expect(await hardhatToken.balanceOf(acc1.address)).to.equal(50);
    await hardhatToken.transfer(acc2.address, 50);
    expect(await hardhatToken.balanceOf(acc2.address)).to.equal(50);
  });
});
