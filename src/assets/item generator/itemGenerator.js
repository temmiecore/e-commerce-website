import image1 from "./clothing images/clothimage1.jpg";
import image2 from "./clothing images/clothimage2.jpg";
import image3 from "./clothing images/clothimage3.jpg";
import image4 from "./clothing images/clothimage4.jpg";
import image5 from "./clothing images/clothimage5.jpg";
import image6 from "./clothing images/clothimage6.jpg";
import image7 from "./clothing images/clothimage7.jpg";
import image8 from "./clothing images/clothimage8.jpg";
import image9 from "./clothing images/clothimage9.jpg";
import image10 from "./clothing images/clothimage10.jpg";
import image11 from "./clothing images/clothimage11.jpg";
import image12 from "./clothing images/clothimage12.jpg";
import image13 from "./clothing images/clothimage13.jpg";

const itemImages = [];
itemImages.push(
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13
);

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
        itemAdjectives[Math.floor(Math.random() * itemAdjectives.length)] +
        " " +
        itemNames[Math.floor(Math.random() * itemNames.length)] +
        ", " +
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
      const itemImage = itemImages[Math.floor(Math.random() * 13)];
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
