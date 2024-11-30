const products = [
    // cat Items
    { imageURL: "assets/dress/01.jpg", name: "D101", category: "dress", price: 500 },
    { imageURL: "assets/dress/02.jpg", name: "D102", category: "dress", price: 550 },
    { imageURL: "assets/dress/03.jpg", name: "D103", category: "dress", price: 400 },
    { imageURL: "assets/dress/04.jpg", name: "D104", category: "dress", price: 250 },
    { imageURL: "assets/dress/05.jpg", name: "D105", category: "dress", price: 400 },
    { imageURL: "assets/dress/06.jpg", name: "D106", category: "dress", price: 400 },
    { imageURL: "assets/dress/07.jpg", name: "D107", category: "dress", price: 300 },
    { imageURL: "assets/dress/08.jpg", name: "D108", category: "dress", price: 400 },
    { imageURL: "assets/dress/09.jpg", name: "D109", category: "dress", price: 380 },
    { imageURL: "assets/dress/10.jpg", name: "D110", category: "dress", price: 400 },
    { imageURL: "assets/dress/11.jpg", name: "D111", category: "dress", price: 350 },
    { imageURL: "assets/dress/12.jpg", name: "D112", category: "dress", price: 400 },
    { imageURL: "assets/dress/13.jpg", name: "D113", category: "dress", price: 350 },
    { imageURL: "assets/dress/14.jpg", name: "D114", category: "dress", price: 400 },
    { imageURL: "assets/dress/15.jpg", name: "D115", category: "dress", price: 450 },
    { imageURL: "assets/dress/16.jpg", name: "D116", category: "dress", price: 250 },
    { imageURL: "assets/dress/17.jpg", name: "D117", category: "dress", price: 450 },
    
];

const productsContainer = document.querySelector('.products');
const searchInput = document.getElementById('searchProduct');
const sortOrderSelect = document.getElementById('sortOrder');
const filterButtons = document.querySelectorAll('.filters button');

function displayProducts(productsArray) {
    productsContainer.innerHTML = "";
    productsArray.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.imageURL}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>Category: ${product.category}</p>
            <p>Price: ${product.price}tk</p>
            <a href="contact.html">Order Now<a/>
        `;
        productsContainer.appendChild(productElement);
    });
}

function filterProducts(category) {
    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    filteredProducts = searchProducts(filteredProducts);
    filteredProducts = sortProducts(filteredProducts);
    displayProducts(filteredProducts);
}

function searchProducts(productsArray) {
    const searchText = searchInput.value.toLowerCase();
    return productsArray.filter(product => product.name.toLowerCase().includes(searchText));
}

function sortProducts(productsArray) {
    const sortOrder = sortOrderSelect.value;
    if (sortOrder === 'lowest') {
        return productsArray.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highest') {
        return productsArray.sort((a, b) => b.price - a.price);
    }
    return productsArray;
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterProducts(button.dataset.category);
    });
});

searchInput.addEventListener('input', () => {
    filterProducts(document.querySelector('.filters button.active')?.dataset.category || 'all');
});

sortOrderSelect.addEventListener('change', () => {
    filterProducts(document.querySelector('.filters button.active')?.dataset.category || 'all');
});

displayProducts(products);
