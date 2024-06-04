
// // document.addEventListener('DOMContentLoaded', function() {
// //     const productId = getProductIdFromURL(); 
// //     fetch(`Js/products.json`)
// //         .then(response => response.json())
// //         .then(products => {
// //             const product = products.find(p => p.id === productId);
// //             if (product) {
// //                 displayProductDetails(product);
// //             } else {
// //                 console.error('Product not found');
// //             }
// //         });
// // });

// // function displayProductDetails(product) {
// //     document.getElementById('product-image').src = product.image;
// //     document.getElementById('product-image').alt = product.name;
// //     document.getElementById('product-name').textContent = product.name;
// //     document.getElementById('product-price').textContent = `Price: $${product.price}`;
// //     document.getElementById('product-color').textContent = `Color: ${product.color}`;

// //     const reviewsContainer = document.getElementById('product-reviews');
// //     product.reviews.forEach(review => {
// //         const reviewElement = document.createElement('p');
// //         reviewElement.textContent = review;
// //         reviewsContainer.appendChild(reviewElement);
// //     });
// // }

// // document.addEventListener('DOMContentLoaded', function() {
// //     const productId = getProductIdFromURL();
// //     fetch(`Js/products.json`) 
// //         .then(response => response.json())
// //         .then(products => {
// //             const product = products.find(p => p.id === productId);
// //             if (product) {
// //                 displayProductDetails(product);
// //                 displayProductReviews(product.reviews);
// //             } else {
// //                 console.error('Product not found');
// //             }
// //         })
// //         .catch(error => {
// //             console.error('Error fetching product details:', error);
// //         });
// // });

// // //review

document.addEventListener('DOMContentLoaded', function() {
    fetch('Js/reviews.json') 
        .then(response => response.json())
        .then(data => {
            displayProductReviews(data.reviews);
        })
        .catch(error => {
            console.error('Error fetching reviews:', error);
        });
});

function displayProductReviews(reviews) {
    const reviewsContainer = document.getElementById('product-reviews');
    if (!reviewsContainer) {
        console.error('Reviews container not found');
        return;
    }
    reviewsContainer.innerHTML = '<h3>Reviews</h3>';
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
            <p class="reviewer-name"><strong>${review.name}</strong></p>
            <p class="review-comment">${review.comment}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

// // //dgxfiuybtn87dukfc

// // function buyNow() {
// //     event.preventDefault();
// //     addToCart();
// //     window.location.href = 'cart.html'; 
// // }

// // function getProductIdFromURL() {
    
// //     const queryParams = new URLSearchParams(window.location.search);
// //     return queryParams.get('id');
// // }


// // function addToCart() {
// //     const productId = getProductIdFromURL();
// //     fetch(`Js/products.json`)
// //         .then(response => response.json())
// //         .then(products => {
// //             const product = products.find(p => p.id === productId);
// //             if (product) {
// //                 let cart = localStorage.getItem('cart');
// //                 cart = cart ? JSON.parse(cart) : [];
// //                 cart.push(product);
// //                 localStorage.setItem('cart', JSON.stringify(cart));
// //                 alert('Product added to cart!');
// //             } else {
// //                 console.error('Product not found');
// //             }
// //         })
// //         .catch(error => {
// //             console.error('Error fetching product details:', error);
// //         });
// // }

// // document.addEventListener('DOMContentLoaded', function() {
// //     const productId = getProductIdFromURL();
    
// //     fetch('Js/products.json')
// //         .then(response => response.json())
// //         .then(products => {
// //             const product = products.find(p => p.id === productId);
// //             if (product) {
// //                 displayProductDetails(product);
// //                 displayProductReviews(product.reviews);
// //             } else {
// //                 console.error('Product not found');
// //             }
// //         })
// //         .catch(error => {
// //             console.error('Error fetching product details:', error);
// //         });
    
// //     fetch('Js/reviews.json')
// //         .then(response => response.json())
// //         .then(data => {
// //             displayProductReviews(data.reviews);
// //         })
// //         .catch(error => {
// //             console.error('Error fetching reviews:', error);
// //         });
    
// //     const addToCartBtn = document.getElementById('add-to-cart-btn');
// //     addToCartBtn.addEventListener('click', addToCart);
// // });

// // function addToCart() {
// //     const productId = getProductIdFromURL();
    
// //     fetch('Js/products.json')
// //         .then(response => response.json())
// //         .then(products => {
// //             const product = products.find(p => p.id === productId);
// //             if (product) {
// //                 let cart = JSON.parse(localStorage.getItem('cart')) || [];
// //                 cart.push(product);
// //                 localStorage.setItem('cart', JSON.stringify(cart));
// //                 alert('Product added to cart!');
// //             } else {
// //                 console.error('Product not found');
// //             }
// //         })
// //         .catch(error => {
// //             console.error('Error adding product to cart:', error);
// //         });
// // }

// // function getProductIdFromURL() {
// //     const queryParams = new URLSearchParams(window.location.search);
// //     return queryParams.get('id');
// // }

// // // Js/productDetails.js
// // document.addEventListener('DOMContentLoaded', function() {
// //     const productId = getProductIdFromURL();
// //     fetch(`Js/products.json`)
// //         .then(response => response.json())
// //         .then(products => {
// //             const product = products.find(p => p.id === productId);
// //             if (product) {
// //                 displayProductDetails(product);
// //             } else {
// //                 console.error('Product not found');
// //             }
// //         })
// //         .catch(error => {
// //             console.error('Error fetching product details:', error);
// //         });
// // });

// // function displayProductDetails(product) {
// //     document.getElementById('product-image').src = product.image;
// //     document.getElementById('product-image').alt = product.name;
// //     document.getElementById('product-name').textContent = product.name;
// //     document.getElementById('product-price').textContent = `Price: $${product.price}`;
// // }

// // function addToCart() {
    
// //         const productId = getProductIdFromURL();
// //         fetch(`Js/products.json`)
// //             .then(response => response.json())
// //             .then(products => {
// //                 const product = products.find(p => p.id === productId);
// //                 if (product) {
// //                     let cart = localStorage.getItem('cart');
// //                     cart = cart ? JSON.parse(cart) : [];
// //                     cart.push(product);
// //                     localStorage.setItem('cart', JSON.stringify(cart));
// //                     alert('Product added to cart!');
// //                 } else {
// //                     console.error('Product not found');
// //                 }
// //             })
// //             .catch(error => {
// //                 console.error('Error fetching product details:', error);
// //             });
// //     }


// // function buyNow() {
// //     event.preventDefault();
// //     addToCart();
// //     window.location.href = 'cart.html'; // Redirect to the cart page
// // }

// // function getProductIdFromURL() {
// //     const queryParams = new URLSearchParams(window.location.search);
// //     return queryParams.get('id');
// // }


document.addEventListener('DOMContentLoaded', function() {
    const productId = getProductIdFromURL();
    
    fetch('Js/products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            if (product) {
                displayProductDetails(product);
                displayProductReviews(product.reviews);
            } else {
                console.error('Product not found');
            }
        })
        .catch(error => {
            console.error('Error fetching product details:', error);
        });
    
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    addToCartBtn.addEventListener('click', addToCart);
});

function displayProductDetails(product) {
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-image').alt = product.name;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `Price: $${product.price}`;
    document.getElementById('product-color').textContent = `Color: ${product.color}`;
}

function displayProductReviews(reviews) {
    const reviewsContainer = document.getElementById('product-reviews');
    reviewsContainer.innerHTML = '<h3>Reviews</h3>';
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
            <p class="reviewer-name"><strong>${review.name}</strong></p>
            <p class="review-comment">${review.comment}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

// function addToCart() {
//     const productId = getProductIdFromURL();
    
//     fetch('Js/products.json')
//         .then(response => response.json())
//         .then(products => {
//             const product = products.find(p => p.id === productId);
//             if (product) {
//                 let cart = JSON.parse(localStorage.getItem('cart')) || [];
//                 cart.push(product);
//                 localStorage.setItem('cart', JSON.stringify(cart));
//                 alert('Product added to cart!');
//             } else {
//                 console.error('Product not found');
//             }
//         })
//         .catch(error => {
//             console.error('Error adding product to cart:', error);
//         });
// }

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart successfully!');
}

function getProductIdFromURL() {
    const queryParams = new URLSearchParams(window.location.search);
    return queryParams.get('id');
}

function buyNow() {
    event.preventDefault();
    addToCart();
    window.location.href = 'cart.html'; // Redirect to the cart page
}


