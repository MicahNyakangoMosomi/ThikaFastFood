import {products} from "./products.js";

const dishes = document.querySelector('.dishes');
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
   

    dishes.innerHTML= displayElement;   
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
let select = ''

sidebar.addEventListener('click', (event)=>{
    const target = event.target
    if(target.matches('li')){
        select = target.innerText;
        console.log(select.toLowerCase());
        target.style.backgroundColor="lightgrey"
    }
    
    const pageProduct = [];
    products.forEach((product) =>{
       
        if (product.category === select.toLowerCase()){
            pageProduct.push(product);   
        }
        displayElement = ''

        displayElement +=`
            <div class="dish-container product${pageProduct.id}">
                <div class="dish-image"><img src="${pageProduct.url}" alt=""></div>

                <div class="dish-content">
                    <p class="dish-text">${pageProduct.discription}</p>
                    <div class="like-unlike"><img class="like-unlike-image" src="images/likeAndUnlike/unlike.png" alt=""></div>
                </div>

                <div class="price-details">
                    <p class="dish-price">KSH.${pageProduct.price}</p>
                    <button class="buy-btn"><a href="">BUY</a></button>
                </div>

            </div>
            `

       
          
    })
    console.log (pageProduct);
    dishes.innerHTML= displayElement;

    

});

