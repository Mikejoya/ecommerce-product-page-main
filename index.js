console.log("hola mundo");
/*------------------------------------dropdown menu-----------------------------------------*/
const dropdownMenu = document.querySelector('.icon__menu');
const menuList = document.querySelector('.container__nav');
const closeList = document.querySelector('.closedList');

dropdownMenu.addEventListener('click', ()=>{
    console.log('conchaaaa');
    closing(menuList);
});

closeList.addEventListener('click', ()=>{
    closing(menuList);
});
/*----------------------------change quantity of articles-----------------------------------*/
const minusBtn = document.querySelector(".minus");
const userInput = document.querySelector(".input__value");
const plusBtn = document.querySelector(".plus");

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});
/*--------------------------add quantity of items by pressing the ADD TO CART button---------------*/
const addToCartBtn = document.querySelector('.button__shopping');
const cartNotification = document.querySelector('.quantityOfProducts');
const multiplierNumber = document.querySelector('.multiplier__number');
const price = document.querySelector('.price__products');
const productContainer = document.querySelector('.cart__content');
const textEmpty = document.querySelector('#emptyCart');
let lastValue = parseInt(cartNotification.innerText);

userInput.addEventListener('input', ()=>{
    userInputNumber = parseInt(userInput.value);
});

addToCartBtn.addEventListener('click', ()=>{
    lastValue = lastValue + userInputNumber;
    if(!lastValue == 0){
        cartNotification.innerText = lastValue;
        cartNotification.style.display = 'block';
        multiplierNumber.innerText = lastValue;
        price.innerText = `${lastValue * 125}`;
        productContainer.style.display = 'block';
        textEmpty.innerText = '';
    }

});
/*---------------------------------show cart details with items------------------------------------*/
const cartIconBtn = document.querySelector('.cart__quantily');
const cartDetails = document.querySelector('.container__product-cart');

cartIconBtn.addEventListener('click', ()=>{
    closing(cartDetails); 
    if(lastValue === 0){
        textEmpty.innerText = 'Your cart is empty';
        productContainer.classList.add('inactive');
    }
});
/*-------------------------------------------cart clear-----------------------------------------------*/
const deleteProductBtn = document.querySelector('.img__deleted');

deleteProductBtn.addEventListener('click', ()=>{
    closed(productContainer);
    textEmpty.innerText = 'Your cart is empty';
    lastValue = 0;
    cartNotification.innerText = lastValue;
});
/*----------------------------------change img arrow principal-----------------------------------------------------*/
const previousPrincipalBtn = document.querySelector('.arrow__img-principalLeft');
const nextPrincipalBtn = document.querySelector('.arrow__img-principalRight');
const imgContainerModal = document.querySelector('#img__products');

nextPrincipalBtn.addEventListener('click', () => {
    changeNextImg(imgContainerModal);
});

previousPrincipalBtn.addEventListener('click', () => {
    changePreviousImg(imgContainerModal);
});

/*-----------------------------------change images with arrows-------------------------------------------*/
const imageContainer = document.querySelector('.product');
const previousBtn = document.querySelector('#arrow__left');
const nextBtn = document.querySelector('#arrow__right');
let indexImg = 1;

nextBtn.addEventListener('click', ()=>{
    changeNextImg(imageContainer);
});

previousBtn.addEventListener('click', ()=>{
    changePreviousImg(imageContainer);
});
/*--------------------------show img modal when parent img is clicked---------------------------------------------*/
const imgModal = document.querySelector('.full__img-mode');
const close = document.querySelector('.close');

imgContainerModal.addEventListener('click', ()=>{
    if (window.matchMedia('(min-width: 1024px)').matches){
        imgModal.style.display = 'flex';
    }
});

close.addEventListener('click', ()=>{
    closed(imgModal);
});

/*------------------------------------show image from a click on small photos---------------------------------*/
let thumnail = document.querySelectorAll('.gallery-thumnail');
thumnail = [...thumnail];
thumnail.forEach(e =>{
    e.addEventListener('click', (event)=>{
        console.log(event.target.id);
        imgContainerModal.src = `./images/image-product-${event.target.id}.jpg`;
    });
});
/*------------------------------------show image from a click on small photos Modal---------------------------------*/
const modalMainImage = document.querySelector('#img__product-modal');
let modalThumnails = document.querySelectorAll('.modal__gallery-thumnail');
modalThumnails = [...modalThumnails];
modalThumnails.forEach(e =>{
    e.addEventListener('click', (event) =>{
        console.log(event.target.id.slice(-1));
        modalMainImage.src = `./images/image-product-${event.target.id.slice(-1)}.jpg`;
    });
});
/*-----------------------------------function-----------------------------------------------------------*/
function changeNextImg (imgContainer){
    if(indexImg === 4){
        indexImg = 1;
    }else{
        indexImg++;
    }
    imgContainer.src = `./images/image-product-${indexImg}.jpg`;
}

function changePreviousImg (imgContainer){
    if(indexImg === 1){
        indexImg = 4;
    }else{
        indexImg--;
    }
    imgContainer.src = `./images/image-product-${indexImg}.jpg`;
}
function closed(element){
    element.style.display = 'none';
}

function closing(elemen){
    elemen.classList.toggle('inactive');
}