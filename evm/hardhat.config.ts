import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    moonbeam: {
      url: 'RPC-API-ENDPOINT-HERE', // Insert your RPC URL here
      chainId: 1284, // (hex: 0x504),
      accounts: [process.env['MOONBEAM_SK']!]
    },
    moonriver: {
      url: 'RPC-API-ENDPOINT-HERE', // Insert your RPC URL here
      chainId: 1285, // (hex: 0x505),
      accounts: [process.env['MOONRIVER_SK']!]
    },
    moonbase: {
      url: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287, // (hex: 0x507),
      accounts: [process.env['MOONBASE_SK']!]
    },
    dev: {
      url: 'http://127.0.0.1:9944',
      chainId: 1281, // (hex: 0x501),
      accounts: [process.env['DEV_SK']!]
    },
    mumbai: {
      url: process.env['MUMBAI_API'],
      accounts: [process.env['MUMBAI_SK']!],
      chainId: 80001,
    }
  },
  etherscan: {
    apiKey: process.env['POLYGONSCAN_MUMBAI_API_KEY'],
  },
};

export default config;
