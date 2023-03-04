let items = [
    {id:1 , name: 'item 1', price: '10', quantity: 0},
    {id:2 , name: 'item 2', price: '20', quantity: 0},
    {id:3 , name: 'item 3', price: '30', quantity: 0},
    {id:4 , name: 'item 4', price: '40', quantity: 0},
]

let container = document.getElementById('root')
for(let i=0;i<items.length;i++){
    container.innerHTML += `
    <div class="cart">
        <h5>${items[i].name}</h5>
        <h5 class="price">${items[i].price}</h5>
        <h5 class="quant minus">-</h5>
        <h5 class="num">${items[i].quantity}</h5>
        <h5 class="quant plus">+</h5>
        <button class="del">delete</button>
        <i class="fa-regular fa-heart"></i>
    </div>
    `
}

// remove element

let deleteItems = document.querySelectorAll('.del')
for(let i=0;i<deleteItems.length;i++){
    let deleteItem = deleteItems[i]
    deleteItem.addEventListener('click', (event) =>{
        let targ = event.target
        targ.parentElement.remove()
    })
}

// like icons
let likes = document.querySelectorAll('.cart i')
for(let i=0;i<likes.length;i++){
    let like = likes[i]
    like.addEventListener('click',(event) =>{
        let liked = event.target
        liked.classList.toggle('love')
    })
}

// increm quant
let total = document.querySelector('.total');

let pluss = document.querySelectorAll('.plus')
let num = document.querySelectorAll('.num')
let price = document.querySelectorAll('.price')
let endTotal = 0
for(let i=0;i<pluss.length;i++){
    let prices = price[i].innerText
    let plus = pluss[i]
    plus.addEventListener('click', (event) =>{
        let inc = event.target
            inc.previousElementSibling.innerText++
            price[i].innerText = prices * +inc.previousElementSibling.innerText
            endTotal +=  +prices
            total.innerText = `Total $${endTotal}`
        })
        
}

// decrem quant

let minuss = document.querySelectorAll('.minus')
for(let i=0;i<minuss.length;i++){
    let prices = price[i].innerText
    let minus = minuss[i]
    minus.addEventListener('click', (event) =>{
       if (minus.nextElementSibling.innerText >0){
        let inc = event.target
            inc.nextElementSibling.innerText--
            price[i].innerText = prices * +inc.nextElementSibling.innerText
            endTotal -=  +prices
            total.innerText = `Total $${endTotal}`
       }
    })
}

//total