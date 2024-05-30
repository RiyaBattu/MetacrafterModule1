// Create a variable to hold NFTs
let nftCollection = [];

// Function to mint NFT
function mintNFT(id, name, eyeColor, trouserType, bling, height, weight) {
    // Create NFT object with metadata
    let newNFT = {
        id: id,
        name: name,
        eyeColor: eyeColor,
        trouserType: trouserType,
        bling: bling,
        height: height,
        weight: weight
    };
    // Store NFT in collection
    nftCollection.push(newNFT);
}

// Function to list NFTs

function listNFTs() {
    // Iterate through collection and print metadata using a for loop
    for (let i = 0; i < nftCollection.length; i++) {
        let nft = nftCollection[i];
        console.log("ID: " + nft.id);
        console.log("Name: " + nft.name);
        console.log("Eye Color: " + nft.eyeColor);
        console.log("Trouser Type: " + nft.trouserType);
        console.log("Bling: " + nft.bling);
        console.log("Height: " + nft.height);
        console.log("Weight: " + nft.weight);
        console.log("-----------------------");
    }
}


// Function to get total supply
function getTotalSupply() {
    // Return the length of the collection
    return nftCollection.length;
}

// Mint some NFTs
mintNFT(1, "CoolNFT1", "blue", "jeans", "diamond", "5'10", "160 lbs");
mintNFT(2, "AwesomeNFT2", "green", "shorts", "gold", "6'2", "180 lbs");
mintNFT(3, "EpicNFT3", "brown", "slacks", "platinum", "5'8", "150 lbs");

// List NFTs
console.log("Listing NFTs:");
listNFTs();

// Print total supply
console.log("Total NFTs minted: " + getTotalSupply());

