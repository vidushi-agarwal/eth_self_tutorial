require("@nomiclabs/hardhat-waffle");

const infura_goerli_url =
  "https://goerli.infura.io/v3/b8cdccd184624e938022708762b2c119";

const infura_ropsten_url =
  "https://ropsten.infura.io/v3/b8cdccd184624e938022708762b2c119";

const infura_rinkeby_url =
  "https://rinkeby.infura.io/v3/b8cdccd184624e938022708762b2c119";

const private_key = `318623538b847cb43d35145eac0014efaf7a5f09df220c05c6d5b3548539d30b`;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    goerli: {
      url: infura_goerli_url,
      accounts: [
        `318623538b847cb43d35145eac0014efaf7a5f09df220c05c6d5b3548539d30b`,
      ],
    },
    ropsten: {
      url: infura_ropsten_url,
      accounts: [
        `318623538b847cb43d35145eac0014efaf7a5f09df220c05c6d5b3548539d30b`,
      ],
    },
    rinkeby: {
      url: infura_rinkeby_url,
      accounts: [private_key],
    },
  },
};
