const products = [
    // cat Items
    { imageURL: "https://img.freepik.com/free-photo/men-rsquo-s-black-short-sleeve-shirt-casual-apparel_53876-106019.jpg?t=st=1716520765~exp=1716524365~hmac=d9187b1317760acc43896b4d0b43fed3bbcf6bf927aef49ad7e4b6fd46005537&w=740", name: "Polo", category: "T-Shirt", price: 20 },
    { imageURL: "https://img.freepik.com/free-photo/man-wearing-beige-shorts-close-up_53876-125260.jpg", name: "Men Short", category: "Short", price: 30 },
    { imageURL: "https://img.freepik.com/free-photo/denims_1303-4488.jpg?t=st=1716521170~exp=1716524770~hmac=ba7d76334a67175b56a3242a2e9024442e09bb59dde146afadf5ec4c65dc0785&w=360", name: "Jeans", category: "Pants", price: 50 },
    { imageURL: "https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?t=st=1716521260~exp=1716524860~hmac=f0105e3e1ee544e84103ccb321f8a0f6a82b88931e9937a725877137d34c7835&w=740", name: "Sneakers", category: "Shoes", price: 70 },
    { imageURL: "https://img.freepik.com/free-psd/mens-ringers-t-shirt-mockup-02_126278-116.jpg", name: "Shirt", category: "T-Shirt", price: 40 },
    { imageURL: "https://img.freepik.com/premium-photo/vibrant-hues-adorn-her-flowing-maxi-skirt-burst-colour-style_891936-2931.jpg?w=740", name: "Skirt", category: "Short", price: 25 },
    { imageURL: "https://img.freepik.com/free-photo/hand-holding-light-brown-beige-pants_23-2150756278.jpg", name: "Chinos", category: "Pants", price: 45 },
    { imageURL: "https://img.freepik.com/free-psd/cowboy-accessory-isolated_23-2151385183.jpg", name: "Boots", category: "Shoes", price: 80 },
    { imageURL: "https://m.media-amazon.com/images/I/81b1i-o-LhL._AC_SL1500_.jpg", name: "Jecket", category: "Jecket", price: 87 },
    { imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-JB11P65S0oj2EJYxIeO7txwORSvUmQsyQ&s", name: "Jecket", category: "Jecket", price: 86 },
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