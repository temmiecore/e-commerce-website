const itemAdjectives = [
  "Baggy",
  "Casual",
  "Formal",
  "Plain",
  "Tasteful",
  "Tight Fit",
  "Skinny",
  "Trendy",
  "Sleeveless",
  "Men's",
  "Women's",
  "Beaded",
  "Stitched",
  "Strapless",
];

const itemNames = [
    "T-Shirt",
    "Cardigan", 
    "Shirt", 
    "Corset", 
    "Crop Top", 
    "Duster", 
    "Hoodie", 
    "Tank Top", 
    "Turtleneck", 
    "Polo Shirt", 
    "Blouse", 
    "Sweater", 
    "V-Neck", 
    "Vest", 
    "Cargo Pants", 
    "Jeans", 
    "Khakis", 
    "Leggins", 
    "Sweatpants", 
    "Shorts",
];

const itemColors = [
  "red",
  "blue",
  "pink",
  "yellow",
  "brown",
  "purple",
  "black",
  "white",
  "gray",
  "green",
  "orange",
  "azure",
  "wheat",
  "bronze",
  "salmon",
  "crimson",
];

//Simulated async

function getItemName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemName = 
      itemAdjectives[Math.floor(Math.random() * itemAdjectives.length)] + " " +
      itemNames[Math.floor(Math.random() * itemNames.length)] + ", " +
      itemColors[Math.floor(Math.random() * itemColors.length)];
      resolve(itemName);
    }, Math.floor(Math.random() * 300));
  });
}

function getItemPrice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemPrice = (Math.floor(Math.random() * 20000) + 10000) / 100;
      resolve(itemPrice);
    }, Math.floor(Math.random() * 300));
  });
}

function getItemImage() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const itemImage = "./clothing images/clothimage" + (Math.floor(Math.random() * 5) + 1) + ".jpg";
        resolve(itemImage);
      }, Math.floor(Math.random() * 600));
    });
}

async function getItem() {
    const name = getItemName();
    const price = getItemPrice();
    const image = getItemImage();
    return Promise.all([name, price, image]);
}

export { getItemName, getItemPrice, getItemImage, getItem };