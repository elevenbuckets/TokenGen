module.exports = {
  solc: "/home/liang/bin/solc",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 6400000,
      network_id: "*" // Match any network id
    }
  }
};
