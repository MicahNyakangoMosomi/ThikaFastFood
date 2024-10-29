import {products} from "./products.js";
    

console.log('hello there')

const bestDishes = document.querySelector('.best-dishes');
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
            <button class="add"><a href="">+</a></button>
            <button class="delete"><a href="">-</a></button>
        </div>

    </div>
    `
    console.log(displayElement)

    bestDishes.innerHTML= displayElement;   
})
