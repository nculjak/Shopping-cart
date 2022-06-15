let allTotal = 0

function addToCart(gumb){

    let mainElement = gumb.closest('.single-item');

    // price, name, quantity

    let price = mainElement.querySelector('.price')
    price = price.innerText
    let name = mainElement.querySelector('h3').innerText
    let quantity = mainElement.querySelector('input').value 
    quantity = parseInt(quantity)

    let cartItems = document.querySelector('.cart-items')
    

    if (quantity > 0) {
        price = price.substring(3)
        price = parseInt(price)

        let total = price * quantity
        allTotal += total

        cartItems.innerHTML += `<div class= "cart-single-item">
                                    <h3>${name}</h3>
                                    <p>${price}KM x ${quantity} = <span>${total}</span>KM</p>
                                    <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                                </div>`
        // total                   
        document.querySelector('.total').innerText = `Ukupno: ${allTotal}KM`

        // gumb disabled
        gumb.innerText = 'Dodano'
        gumb.setAttribute('disabled', 'disabled')
        
    } else {
        alert('Odaberi količinu!')
    }

}

function removeFromCart(gumb) {
    let mainElement = gumb.closest('.cart-single-item')
    let price = mainElement.querySelector('p span').innerText
    price = parseInt(price)

    allTotal -= price
    document.querySelector('.total').innerText = `Ukupno: ${allTotal}KM`

    mainElement.remove()

}