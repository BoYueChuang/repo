const btn = document.querySelector('.btn');
const contactUS = document.querySelector('#contactUS');    
btn.addEventListener('click', () => {
if (contactUS.style.display === 'none') {
    // 👇️ this SHOWS the form
    contactUS.style.display = 'block';
} else {
    // 👇️ this HIDES the form
    contactUS.style.display = 'none';
}
});

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
// const contactUS = document.getElementById('contactUS');

if (contactUS.style.display === 'none') {
    // 👇️ this SHOWS the form
    contactUS.style.display = 'block';
} else {
    // 👇️ this HIDES the form
    contactUS.style.display = 'none';
}
});

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
const search = document.getElementById('search');

if (search.style.display === 'none') {
    search.style.display = 'block';
} else {

    search.style.display = 'none';
}
});

const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
const search = document.getElementById('search');

if (search.style.display === 'none') {
    search.style.display = 'block';
} else {

    search.style.display = 'none';
}
});




const navBar = document.getElementById('navBar');
    navBar.addEventListener('click', () => {
    const headerMenu = document.getElementById('headerMenu');
    if (headerMenu.style.display === 'none') {
        headerMenu.style.display = 'block';
    } else {

        headerMenu.style.display = 'none';
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