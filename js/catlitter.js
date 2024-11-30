const products = [
    // cat Items
    { imageURL: "assets/litter/01.jpg", name: "Alpha Litter 5ltr", category: "Litter", price: 280 },
    { imageURL: "assets/litter/02.jpg", name: "Alpha Litter 10ltr", category: "Litter", price: 550 },
    { imageURL: "assets/litter/03.jpg", name: "Pani Litter 10ltr", category: "Litter", price: 520 },
    { imageURL: "assets/litter/04.jpg", name: "Pani Litter 30ltr", category: "Litter", price: 1450 },
    { imageURL: "assets/litter/05.jpg", name: "Best pet Litter 10ltr", category: "Litter", price: 520 },
    { imageURL: "assets/litter/05.jpg", name: "Best pet Litter 30ltr", category: "Litter", price: 1450 },
    { imageURL: "assets/litter/07.jpg", name: "Kitty choice Litter 25ltr", category: "Litter", price: 1350 },
    { imageURL: "assets/litter/08.png", name: "Cozie cat Litter 5ltr", category: "Litter", price: 350 },
    { imageURL: "assets/litter/09.jpg", name: "Cozie cat Litter 10ltr", category: "Litter", price: 680 },
    { imageURL: "assets/litter/10.avif", name: "Number 1 cat litter 8.6ltr", category: "Litter", price: 950 },
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
