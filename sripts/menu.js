import {products} from "./products.js";

const bestDishes = document.querySelector('.dishes');
let displayElement='';

products.forEach((product) => {

    displayElement +=`
    <div class="dish-container product${product.id}">
        <div class="dish-image"><img src="${product.url}" alt=""></div>

        <div class="dish-content">
            <p class="dish-text">${product.discription}</p>
            <div class="like-unlike"><img src="images/likeAndUnlike/unlike.png" alt=""></div>
        </div>

        <div class="price-details">
            <p class="dish-price">KSH.${product.price}</p>
            <button class="buy-btn"><a href="">BUY</a></button>
        </div>

    </div>
    `
    console.log(displayElement)

    bestDishes.innerHTML= displayElement;   
})
