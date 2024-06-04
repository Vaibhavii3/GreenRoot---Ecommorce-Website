// Retrieve cart data from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="item-details">
                <img src="${product.image}" alt="${product.name}">
                <div class="item-info">
                    <p class="item-name">${product.name}</p>
                    <p class="item-price">$${product.price}</p>
                </div>
            </div>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Update total items count
    document.getElementById('total-items').textContent = cart.length;

    // Calculate total price
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);

    // Calculate total amount including shipping charges
    const shippingCharges = 5.00;
    const totalAmount = totalPrice + shippingCharges;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

// Function to add a product to the cart
function addProductToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

// Function to remove an item from the cart
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

// Sample product data for Product 1 and Product 2
const product1 = { name: 'Product 1', price: 10, image: './img/p12.jpg' };
const product2 = { name: 'Product 2', price: 15, image: './img/p11.jpg' };

// Add Product 1 and Product 2 to the cart
addProductToCart(product1);
addProductToCart(product2);