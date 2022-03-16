const wrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem");

//Product array for all the products
const products = [
   {
      id: 1,
      title: 'Air Force',
      price: 2000,
      colors: [
         {
            code: 'black',
            img: './images/air.png'
         },
         {
            code: 'darkblue',
            img: './images/air2.png'
         }
      ]
   },
   {
      id: 2,
      title: 'Air Jordan',
      price: 2400,
      colors: [
         {
            code: 'lightgray',
            img: './images/jordan.png'
         },
         {
            code: 'green',
            img: './images/jordan2.png'
         }
      ]
   },
   {
      id: 3,
      title: 'Blazer',
      price: 1500,
      colors: [
         {
            code: 'lighgray',
            img: './images/blazer.png'
         },
         {
            code: 'green',
            img: './images/blazer2.png'
         }
      ]
   },
   {
      id: 4,
      title: 'Crater',
      price: 1200,
      colors: [
         {
            code: 'black',
            img: './images/crater.png'
         },
         {
            code: 'lightgray',
            img: './images/crater2.png'
         }
      ]
   },
   {
      id: 5,
      title: 'Hippie',
      price: 1000,
      colors: [
         {
            code: 'gray',
            img: './images/hippie.png'
         },
         {
            code: 'black',
            img: './images/hippie2.png'
         }
      ]
   },
]

let chosenProduct = products[0]

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColor = document.querySelectorAll('.color');
const currentProductSize = document.querySelectorAll('.size');

//translating each wrapper item to the left to make it look like a slider 
menuItem.forEach((item, index) =>  {
   item.addEventListener("click", () => {
      //Changing current slider
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
      
      //Changing the chosen product
      chosenProduct = products[index]

      //changing display info of current product
      currentProductTitle.textContent = chosenProduct.title;
      currentProductPrice.textContent = 'R' + chosenProduct.price;
      currentProductImg.src = chosenProduct.colors[0].img;

      //Changing styles for product display color squares
      currentProductColor.forEach((color, index) => {
         color.style.backgroundColor = chosenProduct.colors[index].code
      });
   });
});

//Changing product image based on color selected
currentProductColor.forEach((color, index) => {
   color.addEventListener('click', () => {
      currentProductImg.src = chosenProduct.colors[index].img;
   });
});
