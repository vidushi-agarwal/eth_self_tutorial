var Web3 = require("web3");
var web3 = new Web3("http://127.0.0.1:8545");
var Eth = require("web3-eth");
var eth = new Eth("http://127.0.0.1:8545");
var async = require("async");

var block = "";
var add = "";

async function main() {
  for (var i = 1; i <= 6370589; i++) {
    block = await eth.getBlock(i);
    console.log(block.number);
    if (block && block.transactions.length != 0) {
      for (let txHash of block.transactions) {
        let tx = await eth.getTransaction(txHash);
        console.log(tx);
        if (tx !== null && tx.to) {
          add = block;
          return add;
        }
      }
      if (add != "") {
        console.log(add);
        break;
      }
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
