const qutu = document.getElementById('jsdata')
let db;

async function getProducts() {

    const response = await axios.get("https://655c844f25b76d9884fd70a7.mockapi.io/products")
    const data = await response.data
    db = data
    db.map(item => {
        const box = document.createElement('div')
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.title}</p>
        <h1>${item.price}</h1>
        <button class="childbtn" onclick ="addToCard(${item.id})"> Add to card</button>`
        qutu.appendChild(box)
    })
}

function addToCard(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == index))
    localStorage.setItem('cart', JSON.stringify(cart))
}

getProducts()