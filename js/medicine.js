const products = [
    // cat Items
    { imageURL: "assets/medicine/01.jpeg", name: "Star coat", category: "medicine", price: 950 },
    { imageURL: "assets/medicine/02.jpeg", name: "Cat star", category: "medicine", price: 480 },
    { imageURL: "assets/medicine/03.jpeg", name: "Pet up drop", category: "medicine", price: 450 },
    { imageURL: "assets/medicine/04.jpeg", name: "Easy breath cat", category: "medicine", price: 450 },
    { imageURL: "assets/medicine/05.jpeg", name: "breath Easy dog", category: "medicine", price: 650 },
    { imageURL: "assets/medicine/06.jpeg", name: "Feli-D", category: "medicine", price: 320 },
    { imageURL: "assets/medicine/07.jpeg", name: "Kiwof", category: "medicine", price: 100 },
    { imageURL: "assets/medicine/08.jpeg", name: "Helmenticide-L", category: "medicine", price: 80 },
    { imageURL: "assets/medicine/09.jpeg", name: "Liv-52 drops", category: "medicine", price: 270 },
    { imageURL: "assets/medicine/10.jpeg", name: "Digyton drop", category: "medicine", price: 350 },
    { imageURL: "assets/medicine/11.jpeg", name: "Lime sulphar dip", category: "medicine", price: 950 },
    { imageURL: "assets/medicine/12.jpeg", name: "Virbac ear cleaner", category: "medicine", price: 400 },
    { imageURL: "assets/medicine/13.jpeg", name: "My mine ear cleaner", category: "medicine", price: 400 },
    { imageURL: "assets/medicine/14.jpeg", name: "Frontline spot on", category: "medicine", price: 550 },
    { imageURL: "assets/medicine/15.jpeg", name: "China spot on", category: "medicine", price: 220 },
    { imageURL: "assets/medicine/16.jpeg", name: "Selamec spot on", category: "medicine", price: 750 },
    { imageURL: "assets/medicine/17.jpeg", name: "Revulation spot on", category: "medicine", price: 1200 },
    { imageURL: "assets/medicine/18.jpeg", name: "Himobest pro", category: "medicine", price: 600 },
    { imageURL: "assets/medicine/19.jpeg", name: "Pet me plus gel", category: "medicine", price: 400 },
    { imageURL: "assets/medicine/20.jpeg", name: "Frontline spray", category: "medicine", price: 750 },
    { imageURL: "assets/medicine/21.png", name: "Scavon cream", category: "medicine", price: 300 },
    { imageURL: "assets/medicine/22.jpeg", name: "Scavon spray", category: "medicine", price: 450 },
    { imageURL: "assets/medicine/23.jpeg", name: "Topicure spray", category: "medicine", price: 450 },
    { imageURL: "assets/medicine/24.jpeg", name: "Trizon vet 500gm - 1pc", category: "medicine", price: 98 },
    { imageURL: "assets/medicine/25.jpeg", name: "Eye drop Civodex vet", category: "medicine", price: 80 },
    { imageURL: "assets/medicine/26.jpeg", name: "Eye drop Visio tears", category: "medicine", price: 200 },
    { imageURL: "assets/medicine/27.jpeg", name: "Kiskin cream", category: "medicine", price: 300 },
    { imageURL: "assets/medicine/28.jpeg", name: "Kiskin lotion", category: "medicine", price: 500 },
    { imageURL: "assets/medicine/29.jpeg", name: "Nutrich tablet 30pc", category: "medicine", price: 500 },
    
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
