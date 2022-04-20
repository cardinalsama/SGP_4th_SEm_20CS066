const hre = require("hardhat");

async function main() {
 

  const CharusatNFT = await hre.ethers.getContractFactory("CharusatNFT");
  const charusatNFT = await CharusatNFT.deploy();

  await charusatNFT.deployed();

  console.log("CharusatNFT Deployed to:", charusatNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
