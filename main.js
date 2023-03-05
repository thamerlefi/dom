let items = [
    {id:1 , src: '1.jpg' ,name: 'Oppo A20', price: '10', quantity: 1, liked: 'unloved'},
    {id:2 , src: '2.jpg' ,name: 'Dell Vostr', price: '20', quantity: 1, liked: 'unloved'},
    {id:3 , src: '3.jpg' ,name: 'MinTablt', price: '30', quantity: 1, liked: 'unloved'},
    {id:4 , src: '4.jpg' ,name: 'Sumsung-', price: '40', quantity: 1, liked: 'unloved'},
]
let container = document.getElementById('root')

let total=0 ;

//-------------------------------------------------- show items
function showData(){
    let table = ''
    for(let i=0;i<items.length;i++){
        table += `
        <div class="cart">
            <img src="./img/${i+1}.jpg" alt="${items[i].name}" title="${items[i].name}" class="img">
            <h5 class="num">${items[i].name}</h5>
            <h5 class="price num">$ ${items[i].price}</h5>
            <h5 class="quant" id="minus" onclick="decrBtn(${i})">-</h5>
            <h5 class="num">${items[i].quantity}</h5>
            <h5 class="quant" id="plus" onclick="incrBtn(${i})">+</h5>
            <h5 class="subTotal"">SubTotal: $ ${items[i].quantity*items[i].price}</h5>
            <button class="del" onclick="deleteItem(${i})">delete</button>
            <i class="fa-regular fa-heart" id="${items[i].liked}"  onclick="loveReact(${i})"></i>
        </div>
        `
        container.innerHTML =`<h1 class ="title">YOUR SHOPPING CART</h1> 
                    ${table} <div class="total"><h4>Total : $ ${getTotal(i)}</h4></div>`
    }
    if (items.length === 0) {
        container.innerHTML = `<h1 class="empty">Your cart is Empty !!</h1>`
    }
}
showData()



//---------------------------------------------------- delete items

function deleteItem(i){
    items.splice(i,1)
    if(items.length<1) {
        container.innerHTML = ''
    }
    total = 0
    showData()
}

//---------------------------------------------------- total price

function getTotal(i){
    
    total += +items[i].price * +items[i].quantity
    return total
}

//--------------------------------------------------- increment quantity btn

function incrBtn(i){
    total = 0
    items[i].quantity ++
    showData()
    
}

//-------------------------------------------------- decrement quantity btn

function decrBtn(i){
    if (items[i].quantity > 0){
        total = 0
        items[i].quantity--
        showData()
    }
}

//--------------------------------------------------- love REACT

function loveReact(i){
    total=0
    if(items[i].liked === 'unloved'){
        items[i].liked = 'loved'
    } else items[i].liked = 'unloved'
    showData()
}
