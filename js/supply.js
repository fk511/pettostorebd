const products = [
    // cat Items
    { imageURL: "assets/supply/01.jpeg", name: "Cat Collar 01", category: "dacoration", price: 90 },
    { imageURL: "assets/supply/02.jpeg", name: "Cat Collar 02", category: "dacoration", price: 180 },
    { imageURL: "assets/supply/03.jpeg", name: "Cat Collar 03", category: "dacoration", price: 180 },
    { imageURL: "assets/supply/04.jpeg", name: "Cat Harness", category: "dacoration", price: 100 },
    { imageURL: "assets/supply/05.jpeg", name: "small size cat stick", category: "toy", price: 120 },
    { imageURL: "assets/supply/05.jpeg", name: "Large size cat stick", category: "toy", price: 200 },
    { imageURL: "assets/supply/06.jpeg", name: "smail size cat ball", category: "toy", price: 50 },
    { imageURL: "assets/supply/06.jpeg", name: "Large size cat ball", category: "toy", price: 100 },
    { imageURL: "assets/supply/07.jpeg", name: "Cat Carry Bag - 01", category: "equipment", price: 2300 },
    { imageURL: "assets/supply/08.jpeg", name: "Cat Carry Bag - 02", category: "equipment", price: 2300 },
    { imageURL: "assets/supply/09.jpeg", name: "Cat Carry Bag - 03", category: "equipment", price: 1500 },
    { imageURL: "assets/supply/10.jpeg", name: "Ball Rounder", category: "toy", price: 800 },
    { imageURL: "assets/supply/11.jpeg", name: "Cat Collar bell - 1pcs", category: "dacoration", price: 40 },
    { imageURL: "assets/supply/12.jpeg", name: "Self Portrait", category: "equipment", price: 250 },
    { imageURL: "assets/supply/13.jpeg", name: "Food Plate", category: "equipment", price: 70 },
    { imageURL: "assets/supply/14.jpeg", name: "Doable Food Plate", category: "equipment", price: 100 },
    { imageURL: "assets/supply/15.jpeg", name: "Cat Collar 04", category: "dacoration", price: 250 },
    { imageURL: "assets/supply/16.jpeg", name: "Moving Mouse", category: "toy", price: 850 },
    { imageURL: "assets/supply/17.jpeg", name: "Hair Trimmer", category: "equipment", price: 1000 },
    { imageURL: "assets/supply/18.jpeg", name: "Cat Basket Large", category: "equipment", price: 2500 },
    { imageURL: "assets/supply/19.jpeg", name: "Cat Basket Small", category: "equipment", price: 2200 },
    { imageURL: "assets/supply/20.jpeg", name: "Cat Bed Small", category: "equipment", price: 700 },
    { imageURL: "assets/supply/20.jpeg", name: "Cat Bed Large", category: "equipment", price: 800 },
    
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
