let shopList = [
    {
        id: 0,
        name: "Estojo",
        price: 20.00,
    },
    {
        id: 1,
        name: "Caderno",
        price: 30.00,
    },
    {
        id: 2,
        name: "Pincéis",
        price: 25.00,
    },
    {
        id: 3,
        name: "Lousa 120x90 cm",
        price: 80.00,
    },
    {
        id: 4,
        name: "Backpack",
        price: 125.00,
    },
    {
        id: 5,
        name: "Cabo Samsung",
        price: 68.99,
    },
]

let seletor = document.querySelector('body')
/*------------- HEADER ----------------*/

let header = document.createElement('header')
let headerTitle = document.createElement('h1')
headerTitle.innerText = "Virtual Market"
header.appendChild(headerTitle)
seletor.appendChild(header)


/*--------------  Main  ----------------*/

let main = document.createElement('main')
let productList = document.createElement('ul')
main.appendChild(productList)
seletor.append(main)


let buttonEnd = document.createElement('button')
buttonEnd.innerText = "FINALIZAR COMPRA"
buttonEnd.classList.add("finalizarCompra")
main.appendChild(buttonEnd)


//------------- Legenda --------------- //
let liLegenda = document.createElement('li')
let itemPlaceHolder = document.createElement('h2')
let pricePlaceHolder = document.createElement('p')
liLegenda.appendChild(itemPlaceHolder)
liLegenda.appendChild(pricePlaceHolder)
productList.appendChild(liLegenda)
liLegenda.classList.add("Legenda")
itemPlaceHolder.innerText = "Item"
pricePlaceHolder.innerText = "Preço"

liLegenda.classList.add("liLegenda")

//--------------- Itens -----------------//

function groupItems(parameter) {
    for (let i = 0; i < parameter.length; i++) {
        let productDetails = document.createElement('li')
        let productTitlePrice = document.createElement('h2')
        let productParagraph = document.createElement('p')
        productTitlePrice.innerText = `${parameter[i].name}`
        productParagraph.innerText = `R$${parameter[i].price}`
        productDetails.appendChild(productTitlePrice)
        productDetails.appendChild(productParagraph)
        productList.appendChild(productDetails)
    }
}
groupItems(shopList)

function somarPrecos(carrinho) {
    let soma = 0
    let aux = 0

    for (let i = 0; i < carrinho.length; i++) {
        aux = carrinho[i].price
        soma += aux
    }

    return soma
}
let sumLi = document.createElement('li')
let sumTitle = document.createElement('h2')
let sumP = document.createElement('p')
productList.appendChild(sumLi)
sumLi.appendChild(sumTitle)
sumLi.appendChild(sumP)
sumTitle.innerText = "Soma dos preços"
sumP.innerText = somarPrecos(shopList)
console.log(sumP.innerText = somarPrecos(shopList))

//--------------------------------//