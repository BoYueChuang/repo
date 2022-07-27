const contactUSbtn = document.getElementById('contactUSbtn');
const contactUS = document.getElementById('form');    
contactUSbtn.addEventListener('click', () => {
if (contactUS.style.display === 'none') {
    // 👇️ this SHOWS the form
    contactUS.style.display = 'block';
} else {
    // 👇️ this HIDES the form
    contactUS.style.display = 'none';
}
});
const closeContactUSbtn = document.getElementById('closeContactUSbtn');
closeContactUSbtn.addEventListener('click', () => {
const contactUS = document.getElementById('form'); 
if (contactUS.style.display === 'none') {
    // 👇️ this SHOWS the form
    contactUS.style.display = 'block';
} else {
    // 👇️ this HIDES the form
    contactUS.style.display = 'none';
}
});
const contactUSInner = document.getElementById('contactUSInner');
contactUSInner.addEventListener('click', () => {
// const contactUS = document.getElementById('contactUS');
const contactUS = document.getElementById('form'); 
if (contactUS.style.display === 'block') {
    // 👇️ this SHOWS the form
    contactUS.style.display = 'none';
} else {
    // 👇️ this HIDES the form
    contactUS.style.display = 'block';
}
});

const searchbtn = document.getElementById('searchbtn');
const search = document.getElementById('search');    
searchbtn.addEventListener('click', () => {
if (search.style.display === 'none') {
    // 👇️ this SHOWS the form
    search.style.display = 'block';
} else {
    // 👇️ this HIDES the form
    search.style.display = 'none';
}
});
const closeSearchbtn = document.getElementById('closeSearchbtn');
closeSearchbtn.addEventListener('click', () => {
const search = document.getElementById('search'); 
if (search.style.display === 'none') {
    // 👇️ this SHOWS the form
    search.style.display = 'block';
} else {
    // 👇️ this HIDES the form
    search.style.display = 'none';
}
});
const searchInner = document.getElementById('searchInner');
searchInner.addEventListener('click', () => {
// const contactUS = document.getElementById('contactUS');
const search = document.getElementById('search'); 
if (search.style.display === 'block') {
    // 👇️ this SHOWS the form
    search.style.display = 'none';
} else {
    // 👇️ this HIDES the form
    search.style.display = 'block';
}
});



const cart = document.getElementById('cart');
cart.addEventListener('click', () => {
const cartWrapper = document.getElementById('cartWrapper');

if (cartWrapper.style.display === 'none') {
    cartWrapper.style.display = 'block';
} else {
    cartWrapper.style.display = 'none';
}
});

const cartInner = document.getElementById('cartInner');
cartInner.addEventListener('click', () => {
    console.log("123");
const cartWrapper = document.getElementById('cartWrapper');
if (cartWrapper.style.display === 'block') {
    cartWrapper.style.display = 'none';
} else {
    cartWrapper.style.display = 'block';
}
});

const closeCart = document.getElementById('closeCart');
closeCart.addEventListener('click', () => {
const cartWrapper = document.getElementById('cartWrapper');

if (cartWrapper.style.display === 'none') {
    cartWrapper.style.display = 'block';
} else {
    cartWrapper.style.display = 'none';
}
});


const navBar = document.getElementById('navBar');
navBar.addEventListener('click', () => {
const headerMenu = document.getElementById('headerMenu');
if (headerMenu.style.display === 'block') {
    headerMenu.style.display = 'none';
} else {
    headerMenu.style.display = 'block';
}
});

const sideInner = document.getElementById('sideInner');
sideInner.addEventListener('click', () => {
const headerMenu = document.getElementById('headerMenu');
if (headerMenu.style.display === 'block') {
    headerMenu.style.display = 'none';
} else {
    headerMenu.style.display = 'block';
}
});

