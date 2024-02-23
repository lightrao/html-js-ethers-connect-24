const { ethers } = require("ethers");

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      // metamask will pop up and you can choice which account to connect
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    document.getElementById("connectButton").innerHTML = "Connected";
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please install MetaMask";
  }
}

async function execute() {
  if (typeof window.ethereum !== "undefined") {
    contractAddress = "0x2a8A3337378d988038071E1B0f6a5940D80e3f42"; // SimpleStorage contract which have deployed to sepolia
    // blueprint to interact with contract
    const abi = [
      {
        type: "function",
        name: "addPerson",
        inputs: [
          { name: "_name", type: "string", internalType: "string" },
          {
            name: "_favoriteNumber",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "listOfPeople",
        inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        outputs: [
          {
            name: "favoriteNumber",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "name", type: "string", internalType: "string" },
        ],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "nameToFavoriteNumber",
        inputs: [{ name: "", type: "string", internalType: "string" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "retrieve",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "store",
        inputs: [
          {
            name: "_favoriteNumber",
            type: "uint256",
            internalType: "uint256",
          },
        ],
        outputs: [],
        stateMutability: "nonpayable",
      },
    ];
    const provider = new ethers.providers.Web3Provider(window.ethereum); // blockchain node connection: RPC_URL or MetaMask
    const signer = provider.getSigner(); // a transaction need to be siged by signer(a connected account)
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      await contract.store(42);
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML =
      "Please install MetaMask";
  }
}

module.exports = {
  connect,
  execute,
};
