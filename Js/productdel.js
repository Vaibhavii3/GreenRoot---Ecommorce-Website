fetch('Js/products.json')

// $(document).ready(function() {
//     let cartCount = 0;

    
//     $(document).on('click', '.add-to-cart-btn', function(event) {
//         event.preventDefault();

//         console.log("Add to Cart button clicked"); 
//         cartCount++;
//         console.log("Cart Count: " + cartCount); 
//         $('#cartIcon').text(cartCount);

//         let productName = $(this).closest('.product').find('h5').text();
//         let productPrice = $(this).closest('.product').find('small').text();
//         console.log("Product Name: " + productName); 
//         console.log("Product Price: " + productPrice); 

//         $('#cartItems').append(`<li>${productName} - ${productPrice}</li>`);
//         console.log("Product added to cart"); 
//     });
// });

// var btns = document.querySelectorAll(".new-arrival-view-details-button");
//     var modals = document.querySelectorAll(".modal");
//     var spans = document.querySelectorAll(".close");

//     btns.forEach((btn, index) => {
//         btn.onclick = function() {
//             modals[index].style.display = "block";
//         }
//     });

//     spans.forEach((span, index) => {
//         span.onclick = function() {
//             modals[index].style.display = "none";
//         }
//     });

//     window.onclick = function(event) {
//         modals.forEach((modal, index) => {
//             if (event.target == modal) {
//                 modal.style.display = "none";
//             }
//         });
//     }


// share 

document.addEventListener('DOMContentLoaded', function() {
    
    const productsContainer = document.getElementById('products-container');

    productsContainer.addEventListener('click', function(event) {
        
        const shareBtn = event.target.closest('.share-btn');
        if (shareBtn) {
            if (navigator.share) {
                navigator.share({
                    
                    url: "https://www.google.com",
                }).then(() => {
                    console.log("Thanks for sharing");
                }).catch((err) => {
                    console.log("Error using web share API:", err);
                });
            } else {
                alert("Browser doesn't support this web API");
            }
        }
    });
});


//filter

// $(document).ready(function(){
//     $('.filter-item').click(function(){
//         const value = $(this).attr('data-filter');
//         if(value == 'all') {
//             $(".post-box").show("1000");
//         } else {
//             $(".post-box").not("." + value).hide("1000");
//             $(".post-box").filter("." + value).show("1000");
//         }
//     });

//     $(".filter-item").click(function(){
//         $(this).addClass("active-filter").siblings().removeClass("active-filter");
//     }); 
// });

$(document).ready(function(){
    $('.cat-filter').click(function(){
        const category = $(this).attr('category-filter');
        if(category == 'All') {
            $(".category-box").show("1000");
        } else {
            $(".category-box").not("[data-category='" + category + "']").hide("1000");
            $(".category-box").filter("[data-category='" + category + "']").show("1000");
        }
    });

    $(".cat-filter").click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     fetch('Js/products.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const productsContainer = document.getElementById('products-container');
//             if (!productsContainer) {
//                 throw new Error('Products container not found');
//             }
//             data.forEach(product => {
//                 productsContainer.innerHTML += `
//                     <div class="new-arrival-products post-box tentree category-box" data-category="${product.category}">
//                         <img src="${product.image}" alt="${product.name}">
//                         <h2 class="category pt-2 d-none">tentree</h2>
//                         <h3>${product.name}</h3>
//                         <p>${product.description}</p>
//                         <p>$${product.price}</p>
//                         <div class="product-availability">${product.availability}</div>
//                         <button class="btn btn-outline-success btn1" onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
//                         <button class="btn btn-success new-arrival-view-details-button btn1">View Details</button>
//                         <div class="product-icons">
//                             <button class="share-btn" id="shareBtn"> <i class="bi bi-share"></i> </button>
//                             <a href="#" class="wishlist-icon"><i class="bi bi-heart"></i></a>
//                         </div>
//                     </div>
//                 `;
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching and parsing data:', error);
//         });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     fetch('Js/products.json')
//         .then(response => response.json())
//         .then(data => {
//             const productsContainer = document.getElementById('products-container');
//             if (!productsContainer) {
//                 throw new Error('Products container not found');
//             }
//             data.forEach(product => {
//                 productsContainer.innerHTML += `
//                     <div class="new-arrival-products category-box" data-category="${product.category}">
//                         <img src="${product.image}" alt="${product.name}">
//                         <h3>${product.name}</h3>
//                         <p>${product.description}</p>
//                         <p>${product.price}</p>
//                         // <a href="product.html?id=${product.id}">View Details</a>
//                         <button class="btn btn-outline-success btn1" onclick='addToCart("${encodeURIComponent(JSON.stringify(product))})'>Add to Cart</button>
//                         <button class="btn btn-success new-arrival-view-details-button btn1">View Details</button>
//                             <div class="product-icons">
//                                     <button class="share-btn" id="shareBtn"> <i class="bi bi-share"></i> </button>
//                                     <a href="#" class="wishlist-icon"><i class="bi bi-heart"></i></a>
//                             </div>
//                     </div>
//                 `;
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching and parsing data:', error);
//         });
// });

document.addEventListener('DOMContentLoaded', function() {
    fetch('Js/products.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products-container');
            if (!productsContainer) {
                throw new Error('Products container not found');
            }
            data.forEach(product => {
                console.log(`Generated URL for product ID ${product.id}: product.html?id=${product.id}`); // Log the URL
                productsContainer.innerHTML += `
                    <div class="new-arrival-products category-box" data-category="${product.category}">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p>${product.price}</p>
                        <a href="product.html?id=${product.id}" class="btn btn-success">View Details</a>
                        
                        <button class="btn btn-outline-success btn1" onclick='addToCart("${encodeURIComponent(JSON.stringify(product))}")'><a href="cart.html" class="btn2">Add to Cart</a></button>
                        <div class="product-icons">
                            <button class="share-btn" id="shareBtn"> <i class="bi bi-share"></i> </button>
                            <a href="#" class="wishlist-icon"><i class="bi bi-heart"></i></a>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error('Error fetching and parsing data:', error);
        });
});


let cart = [];

function addToCart(encodedProduct) {
    const product = JSON.parse(decodeURIComponent(encodedProduct));
    cart.push(product);
    updateCartDisplay();
}

//xfuytgiundfychiu
//<button class="btn btn-outline-success btn1" onclick='addToCart("${encodeURIComponent(JSON.stringify(product))}")'>Add to Cart</button>
// function updateCartDisplay() {
//     const cartContainer = document.getElementById('cart-container');
//     if (!cartContainer) {
//         console.error('Cart container element not found in the DOM');
//         return; 
//     }
//     cartContainer.innerHTML = ''; 

//     cart.forEach(product => {
//         cartContainer.innerHTML += `
//             <div class="cart-item">
//                 <img src="${product.image}" alt="${product.name}" style="width: 50px;">
//                 <p>${product.name} - $${product.price}</p>
//             </div>
//         `;
//     });
// }



/*
document.addEventListener('DOMContentLoaded', function() {
    // Assuming products are displayed with a class 'product-item' and have a data attribute 'data-product-id'
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            loadProductDetails(productId);
        });
    });
});

function loadProductDetails(productId) {
    fetch('Js/products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            if (product) {
                populateModal(product);
                showModal();
            }
        })
        .catch(error => console.error('Error loading product details:', error));
}

function populateModal(product) {
    document.querySelector('#view1 .modal-box h5').textContent = product.name;
    document.querySelector('#view1 .modal-box img').src = product.image;
    document.querySelector('#view1 .modal-box p').textContent = `Price: $${product.price}`;
    document.querySelector('#view1 .size-box p').textContent = product.description;
    document.querySelector('#view1 .product-rating').textContent = `Rating: ${product.rating || 'N/A'}`; // Assuming rating might not be available

    // Populate sizes
    const sizeSelect = document.querySelector('#view1 select#size');
    sizeSelect.innerHTML = '';
    product.sizes.forEach(size => {
        sizeSelect.innerHTML += `<option value="${size}">${size}</option>`;
    });

    // Populate colors
    const colorsContainer = document.querySelector('#view1 .colors');
    colorsContainer.innerHTML = ''; // Clear previous colors
    product.colors.forEach(color => {
        colorsContainer.innerHTML += `
            <div class="color-swatch m-1" style="background-color: ${color}; width: 20px; height: 20px; border: 1px solid #000;"></div>
        `;
    });
} */