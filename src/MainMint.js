import {useState} from 'react';
import {ethers,BigNumber} from 'ethers';
import CharusatNFT from './CharusatNFT.json';
import{ Box,Button,Flex,Input,Text} from "@chakra-ui/react";

// THIS IS THE MAIN MINTING FUNCTION PAGE MADE WITH REACT JS 

const CharusatNFTAddress = "0x83b62071e30795F81C7d6993D12c0Af6EE3e3ca1";

const MainMint =({accounts,setAccounts}) =>{
const [mintAmount,setMintAmount] = useState(1);
const isConnected =Boolean(accounts[0]);

async function handleMint(){
	if(window.ethereum){
	  const provider = new ethers.providers.Web3Provider(window.ethereum);
	  const signer = provider.getSigner()
	  const contract = new ethers.Contract(
		  CharusatNFTAddress,
		  CharusatNFT.abi,
		  signer,
		  );
		try{
			const response = await contract.mint(BigNumber.from(mintAmount),{
				value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
			});
			console.log('Response:',response);

		}catch (err){
			console.log("Error",err);
		}
		}
	}

const handleDecrement = () => {
	if(mintAmount <= 1) return;
	setMintAmount(mintAmount - 1);
	};
const handleIncrement = () => {
	if(mintAmount >= 3) return;
	setMintAmount(mintAmount+1);

	};
	return (
		<Flex justify="space-between" align="center" padding="30px ">
			<Box width="520px">
			<div>
			<Text fontSize="48px" textShadow="0 5px #000000">Charusat NFT Club</Text>
			<Text letterSpacing="-5.5%" fontFamily="VT323"
			fontSize="30px" textShadow="0 2px 2px #000000"
			>Charusat Welcomes Everybody in an new era of blockchain
			   development . We present to you Charusat Club Membership NFTs
			</Text>
			</div>
			{isConnected ? (
			<div>
				<Flex align="center" justify="center">
					<Button 
					backgroundColor="#D6517D"
					borderRadius="5px"
					boxShadow="0px 2px 2px 1px #0F0F0F"
					fontFamily="inherit"
					padding="15px"
					marginTop="10px"
					onClick={handleDecrement}>-</Button>
					<Input 
					fontFamily="inherit"
					readOnly
					width="100px"
					height="40px"
					textAlign="center"
					paddingLeft="19x"
					marginTop="10px"
					type = "number" 
					value = {mintAmount}/>
					<Button 
					backgroundColor="#D6517D"
					borderRadius="5px"
					boxShadow="0px 2px 2px 1px #0F0F0F"
					fontFamily="inherit"
					padding="15px"
					marginTop="10px"
					onClick={handleIncrement}>+</Button>
	
				</Flex>
				<Button 
				backgroundColor="#D6517D"
				borderRadius="5px"
				boxShadow="0px 2px 2px 1px #0F0F0F"
				fontFamily="inherit"
				padding="15px"
				marginTop="10px"
				onClick={handleMint}>Mint Now</Button>
			</div>
			) :(
				<Text>You must be Connected to wallet to mint</Text>
			
			)}
			</Box>
		</Flex>
	);
}
export default MainMint ;