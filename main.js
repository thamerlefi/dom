let items = [
  {id: 1,src: "1.jpg",name: "Oppo A20",price: "100",quantity: 1,liked: "unloved"},
  {id: 2,src: "2.jpg",name: "Dell Vostr",price: "200",quantity: 1,liked: "unloved"},
  {id: 3,src: "3.jpg",name: "MinTablt",price: "100",quantity: 1,liked: "unloved"},
  {id: 4,src: "4.jpg",name: "Sumsung-",price: "100",quantity: 1,liked: "unloved"}
];
let container = document.getElementById("root");

let total = 0; // total price
let adore = 0; // number of total likes

//-------------------------------------------------- show items
function showData() {
  // global function that will appear all of items (body)
  let table = "";
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    table += `
        <div class="cart">
            <img src="./img/${i + 1}.jpg" alt="${item.name}" title="${item.name}" class="img">
            <h5 class="num">${item.name}</h5>
            <h5 class="price num">$ ${item.price}</h5>
            <h5 class="quant minus" id="minus" onclick="decrBtn(${i})">-</h5>
            <h5 class="num">${item.quantity}</h5>
            <h5 class="quant" id="plus" onclick="incrBtn(${i})">+</h5>
            <h5 class="subTotal"">SubTotal: $ ${item.quantity * item.price}</h5>
            <button class="del" onclick="deleteItem(${i})">delete</button>
            <i class="fa-regular fa-heart" id="${item.liked}" onclick="loveReact(${i})"></i>
        </div>
        `;
        // concatenation of all the container (title, items and total price with numbers of likes)
    container.innerHTML = `<h1 class ="title">YOUR SHOPPING CART</h1> 
                            ${table}
                            <div class="total">
                                <h4>Total : $ ${getTotal(i)}</h4>
                                ${numOfLikes(i)}
                            </div>`;
    }
}

showData();

//---------------------------------------------------- delete items

function deleteItem(i) {
  items.splice(i, 1);
  // if there is no items a new paragraph will display
  if (items.length < 1) {
    container.innerHTML = `<h1 class="empty">Your cart is Empty !!</h1>`;
  }
  adore = 0; // we need always to initialize "adore" and "total" (num of likes and total price) 
  total = 0; //     before calling showData
  showData(); // after deleting an item always we need to recal showData to re-show the new update
}

//---------------------------------------------------- total price

function getTotal(i) {
  total += +items[i].price * +items[i].quantity;
  return total;
}

//--------------------------------------------------- increment quantity btn

function incrBtn(i) {
  total = 0; // initialize total and adore before recalling showData
  adore = 0; //
  items[i].quantity++;
  showData(); // after any event we recall showData to reshow the new content
}

//-------------------------------------------------- decrement quantity btn

function decrBtn(i) {
  if (items[i].quantity > 1) {
    total = 0;
    adore = 0;
    items[i].quantity--;
    showData();
  }
}

//--------------------------------------------------- love REACT

function loveReact(i) {
  total = 0;
  adore = 0;
  if (items[i].liked === "unloved") {
    items[i].liked = "loved";   //if liked = "loved" so it will be added to the id of this icon id="loved"
  } else {                      // id="${item.liked}" (show line number 28)
    items[i].liked = "unloved";
  }
  showData();
}
//------------------------------------------------------------------ number of likes
function numOfLikes(i) {
  if (items[i].liked === "loved") {
    adore++; // if true so this item is liked so we need to add 1 the number of likes
  }
  if (adore === 0) return ""; // if there is no like so this element will not displayed 
  return `<h3 class="adore">Like : ${adore}</h3>`;
}
/* 
As far as I know, we must first modify elements in the object, then modify them in document,
and then we must recal the function showData after each event... so what do you think !!
*/
