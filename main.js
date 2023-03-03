let delBtns = document.querySelectorAll('.del')

    for (let i=0 ; i<delBtns.length ; i++ ){

        let delBtn = delBtns[i]
        
        delBtn.addEventListener('click',function(event) {
            let clicked = event.target
            clicked.parentElement.remove()
        })
    }

let pluss = document.querySelectorAll('.plus') 
let minuss = document.querySelectorAll('.minus')   
let virt = 0
for(let i=0;i<pluss.length;i++){
    let plus = pluss[i];
    plus.addEventListener('click', function(event){
        let quantity = event.target
        let inPlus = plus.previousElementSibling.innerText
        inPlus++
        quantity.previousElementSibling.innerHTML = inPlus
        let price = document.querySelectorAll('.price')
        let num = document.querySelectorAll('.num')
        price[i].innerText *= num[i].innerText
    })
}
for(let i=0;i<minuss.length;i++){
    let minus = minuss[i]
    minus.addEventListener('click', function(event){
        let quantt = event.target
        let inMinus = minus.nextElementSibling.innerText
        if(inMinus>1){
            inMinus--
         quantt.nextElementSibling.innerHTML = inMinus
         let price = document.querySelectorAll('.price')
         let num = document.querySelectorAll('.num')
         price[i].innerText = 10 * num[i].innerText
        }

    })
}
let love = document.querySelectorAll('.cart i')
for(i=0;i<love.length;i++){
    let lov = love[i]
    lov.addEventListener('click', function(event){
        let aim = event.target
        aim.classList.toggle('love')
        
    })
}











