
let subtract = document.getElementsByClassName('subtract')[0];
subtract.addEventListener('click', function(e){
    console.log('123');
    let text = document.getElementById('text')

    console.log(text);
    let one = 1
    let count =  text.innerText
    count = count -  one

    console.log(count);

    text.innerText = count
    // console.log(typeof(count));

    if( text.innerText < 1){
        text.innerText = 1
        swal("單位數量不能小於 1", "You clicked the button!", "warning");
    }
    console.log(text.innerText);

    let money = document.getElementById('money')
    console.log(money);

    let moneyCount = Number(money.innerText)
    console.log( typeof(moneyCount));
    
    let two =  22000
    moneyCount -= two
    console.log(moneyCount);
    money.innerHTML = `${moneyCount}`


    console.log(moneyCount);
    console.log(money);

    if( money.innerText < 22000){
        money.innerText = 22000
    }



})

let plus = document.getElementsByClassName('plus')[0];
plus.addEventListener('click', function(e){
    console.log('123');
    let text = document.getElementById('text')

    console.log(text);
    let one = 1
    let count =  Number(text.innerText)
    count = count +  one
    
    console.log(count);

    text.innerText = count
    console.log(text.innerText);

    if( count > 5){
        count = 5
        text.innerText = 5
        swal("單位數量已超過庫存", "You clicked the button!", "warning");
    }

    let money = document.getElementById('money')
    console.log(money);

    let moneyCount = Number(money.innerText)
    console.log( typeof(moneyCount));
    
    let two =  22000
    moneyCount += two
    console.log(moneyCount);
    money.innerHTML = `${moneyCount}`
    
    if( money.innerText >= 110000){
        money.innerText = 110000
    }
    


    console.log(moneyCount);
    console.log(money);
    
})
let content_main_img = document.getElementsByClassName("cart-modal-content-main-img")[0];
let content_main_information = document.getElementsByClassName("cart-modal-content-main-information")[0];
let content_main_cancel= document.getElementsByClassName("cart-modal-content-main-cancel")[0];
let content_main_total= document.getElementsByClassName("cart-modal-content-total")[0];

let content_main = document.getElementsByClassName("cart-modal-content-main")[0];


let xmark = document.getElementById('xmark')
xmark.addEventListener('click', function(){
    console.log('123');
    if(confirm('確定要刪除')){
        content_main_img.style.display = 'none'
        content_main_information.style.display = 'none'
        content_main_cancel.style.display = 'none'
        content_main_total.style.display = 'none'
        content_main.style.borderBottom = 0
    }else{

    }
    
    
})