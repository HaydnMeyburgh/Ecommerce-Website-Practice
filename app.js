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
            img: './Images/air.png'
         },
         {
            code: 'darkblue',
            img: './Images/air2.png'
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
            img: './Images/jordan.png'
         },
         {
            code: 'green',
            img: './Images/jordan2.png'
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
            img: './Images/blazer.png'
         },
         {
            code: 'green',
            img: './Images/blazer2.png'
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
            img: './Images/crater.png'
         },
         {
            code: 'lightgray',
            img: './Images/crater2.png'
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
            img: './Images/hippie.png'
         },
         {
            code: 'black',
            img: './Images/hippie2.png'
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

//Displaying what size has been selected
currentProductSize.forEach((size, index) => {
   size.addEventListener('click', () => {
      currentProductSize.forEach((size) => {
         size.style.backgroundColor = 'white'
         size.style.color = 'black'
      });
      size.style.backgroundColor = 'black'
      size.style.color = 'white'
   });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
   payment.style.display = "flex"
});

close.addEventListener("click", () => {
   payment.style.display = "none"
});
