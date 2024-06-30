const images = [
  "room2.avif",
  "room4.jpg",
  "room5.jpg",
  "room6.jpg",
  "room7.jpg",
  "room8.jpg",
  "rain9.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);
