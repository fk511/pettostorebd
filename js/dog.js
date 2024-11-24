const products = [
    // cat Items
    { imageURL: "https://www.pet.com.bd/petvault/uploads/2024/09/Kaniva-Cat-Food-%E2%80%93-Mother-Cat-Kitten-Cat-Formula-1-430x430.jpg", name: "Kaniva", category: "cat-food", price: 2320 },
    { imageURL: "https://www.pet.com.bd/petvault/uploads/2024/09/Kaniva-Cat-Food-%E2%80%93-Mother-Cat-Kitten-Cat-Formula-1-430x430.jpg", name: "jangle", category: "cat-wet-food", price: 2205 },
    { imageURL: "https://www.pet.com.bd/petvault/uploads/2024/09/Kaniva-Cat-Food-%E2%80%93-Mother-Cat-Kitten-Cat-Formula-1-430x430.jpg", name: "riger", category: "treat", price: 202 },
    { imageURL: "https://www.pet.com.bd/petvault/uploads/2024/09/Kaniva-Cat-Food-%E2%80%93-Mother-Cat-Kitten-Cat-Formula-1-430x430.jpg", name: "riger", category: "litter", price: 220 },
    { imageURL: "https://www.pet.com.bd/petvault/uploads/2024/09/Kaniva-Cat-Food-%E2%80%93-Mother-Cat-Kitten-Cat-Formula-1-430x430.jpg", name: "riger", category: "Wet-Food", price: 2250 },
    
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
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <a href="www.google.com">Order Now<a/>
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