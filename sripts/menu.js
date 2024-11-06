import {products} from "./products.js";

const bestDishes = document.querySelector('.dishes');
let displayElement='';

products.forEach((product) => {

    displayElement +=`
    <div class="dish-container product${product.id}">
        <div class="dish-image"><img src="${product.url}" alt=""></div>

        <div class="dish-content">
            <p class="dish-text">${product.discription}</p>
            <div class="like-unlike"><img class="like-unlike-image" src="images/likeAndUnlike/unlike.png" alt=""></div>
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

const likeElements = document.querySelectorAll('.like-unlike-image');

likeElements.forEach((element) => {
    element.addEventListener('click', () => {
        function like_unlike() {

            if (element.getAttribute("src") === 'images/likeAndUnlike/like.png') {
                element.setAttribute('src', 'images/likeAndUnlike/unlike.png');
            } else {
                element.setAttribute('src', 'images/likeAndUnlike/like.png');
            }
        }

        like_unlike();
    });
});

//
const sidebar = document.querySelector('.side-bar-list');

sidebar.addEventListener('click', (event)=>{
    const target = event.target
    if(target.matches('li')){
        const select = target.innerText;
        console.log(select);
        target.style.backgroundColor="lightgrey"
    }

})