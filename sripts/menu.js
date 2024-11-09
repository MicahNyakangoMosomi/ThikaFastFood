import {products} from "./products.js";

const dishes = document.querySelector('.dishes');
let displayElement='';

function uncategorizedFunction(){
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
        likeFunction() 
    })

}
uncategorizedFunction();

//like and Unlike Function
function likeFunction(){
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

}



//
const sidebar = document.querySelector('.side-bar-list');
let select = ''

sidebar.addEventListener('click', (event)=>{
    //Used event Delegation
    const target = event.target
    
    if(target.matches('a')){     //this excutes if the target in the ul has an <a> tag
        select = target.innerText; //declares select which will be initialized the text inside the a tags
        const activeCategory = document.querySelector('.active-category-name')
        activeCategory.innerText = select.toUpperCase();
        console.log(select.toLowerCase()); //coverts in a tag text to lowercase
        target.style.color="green";  //if the a tag is clicked the color changes green

        const pageProduct = [];   //an array that will contain the the matching categories of the product with the clicked cateogory (burgers array.....)
        products.forEach((product) =>{ //loop each object in the array
         
            if (product.category === select.toLowerCase()){
                pageProduct.push(product); //if the product category matches the cliced category, the object is pushed the the new array
                displayElement = ''  //clears the variable displayElemnts that contains the elements currently been displayed on the page

                pageProduct.forEach((product) =>{  //loops through the pageProduct 
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
                })
                dishes.innerHTML= displayElement;  //displays the matching products with a category similar to the one clicked
                likeFunction()
            }
            
          
        })

        if('uncategorized' === select.toLowerCase()){
            displayElement=''
            uncategorizedFunction();
        }
        

    } 
});

