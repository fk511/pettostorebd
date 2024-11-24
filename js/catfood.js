const products = [
    // cat Items
    { imageURL: "assets/cat/01.jpg", name: "Jungle kitten (chicken) 1.5kg", category: "cat-food",  price: 800 },
    { imageURL: "assets/cat/02.webp", name: "Jungle kitten (chicken) 500gm", category: "cat-food",  price: 320 },
    { imageURL: "assets/cat/03.webp", name: "Jungle Adult (chicken & fish) 1.5kg", category: "cat-food",  price: 800 },
    { imageURL: "assets/cat/04.webp", name: "Jungle Adult (chicken & fish) 500gm", category: "cat-food",  price: 320 },
    { imageURL: "assets/cat/05.jpg", name: "Paw Paw Kitten chicken 500gm", category: "cat-food",  price: 270 },
    { imageURL: "assets/cat/06.webp", name: "Paw Paw Kitten chicken 1kg", category: "cat-food",  price: 450 },
    { imageURL: "assets/cat/07.webp", name: "Paw Paw Kitten chicken 1.5kg", category: "cat-food",  price: 690 },
    { imageURL: "assets/cat/08.webp", name: "Paw Paw Kitten chicken 7kg", category: "cat-food",  price: 2550 },
    { imageURL: "assets/cat/09.webp", name: "Paw Paw Adult fish 500gm", category: "cat-food",  price: 270 },
    { imageURL: "assets/cat/10.webp", name: "Paw Paw Adult fish 1kg", category: "cat-food",  price: 450 },
    { imageURL: "assets/cat/11.webp", name: "Paw Paw Adult fish 1.5kg", category: "cat-food",  price: 690 },
    { imageURL: "assets/cat/12.jpeg", name: "Paw Paw Adult fish 7kg", category: "cat-food",  price: 2550 },
    { imageURL: "assets/cat/13.png", name: "Bonacibo Kitten chicken 1.5kg", category: "cat-food",  price: 990 },
    { imageURL: "assets/cat/14.webp", name: "Bonacibo Adult chicken, anchovy, rice 2kg", category: "cat-food",  price: 1190 },
    { imageURL: "assets/cat/15.webp", name: "Haisenpet premium cat food Kitten 450gm", category: "cat-food",  price: 270 },
    { imageURL: "assets/cat/16.webp", name: "Haisenpet premium cat food Kitten 3kg", category: "cat-food",  price: 1290 },
    { imageURL: "assets/cat/17.webp", name: "Haisenpet premium cat food Kitten 7kg", category: "cat-food",  price: 1590 },
    { imageURL: "assets/cat/18.webp", name: "Haisenpet premium cat food adult 450gm", category: "cat-food",  price: 270 },
    { imageURL: "assets/cat/19.webp", name: "Haisenpet premium cat food adult 3kg", category: "cat-food",  price: 1290 },
    { imageURL: "assets/cat/20.webp", name: "Haisenpet premium cat food adult 7kg", category: "cat-food",  price: 1590 },
    { imageURL: "assets/cat/21.webp", name: "Mito adult chicken 1kg", category: "cat-food",  price: 480 },
    { imageURL: "assets/cat/22.webp", name: "Truly cat food 1.5kg", category: "cat-food",  price: 1150 },
    { imageURL: "assets/cat/23.webp", name: "Micho adult chicken 1.5kg", category: "cat-food",  price: 790 },
    { imageURL: "assets/cat/24.webp", name: "Bellota all Flavours Pouch", category: "pouch",  price: 75 },
    { imageURL: "assets/cat/25.webp", name: "Nekko Tuna Mouse with Salmon Kitten Pouch", category: "pouch",  price: 85 },
    { imageURL: "assets/cat/26.webp", name: "Nekko Tuna Mouse with Goat Milk Pouch", category: "pouch",  price: 85 },
    { imageURL: "assets/cat/27.webp", name: "Ciao All Flavours Pouch", category: "pouch",  price: 100 },
    // { imageURL: "", name: "Wanpy 5pc pack Tuna", category: "treat",  price: 220 },
    { imageURL: "assets/cat/28.webp", name: "Wanpy 5pc pack chicken treat", category: "treat",  price: 220 },
    { imageURL: "assets/cat/29.webp", name: "Wanpy 5pc pack tuna & crab treat", category: "treat",  price: 220 },
    { imageURL: "assets/cat/30.webp", name: "Wanpy 5pc pack tuna & scallop treat", category: "treat",  price: 220 },
    { imageURL: "assets/cat/31.webp", name: "Wanpy 5pc pack tuna & salmon treat", category: "treat",  price: 220 },
    // { imageURL: "", name: "Wanpy 25pc pack Tuna", category: "treat",  price: 950 },
    { imageURL: "assets/cat/32.webp", name: "Wanpy 25pc pack chicken treat", category: "treat",  price: 950 },
    { imageURL: "assets/cat/33.webp", name: "Wanpy 25pc pack tuna & crab treat", category: "treat",  price: 950 },
    { imageURL: "assets/cat/34.webp", name: "Wanpy 25pc pack tuna & scallop treat", category: "treat",  price: 950 },
    { imageURL: "assets/cat/35.jpg", name: "Kitty licks 4pc pack treat", category: "treat",  price: 200 },
    { imageURL: "assets/cat/36.jpg", name: "Me-o treat 4pc pack treat", category: "treat",  price: 220 },
    { imageURL: "assets/cat/37.webp", name: "Wanpy 25pc pack tuna & salmon treat", category: "treat",  price: 950 },
    { imageURL: "assets/cat/38.webp", name: "Bellota all flavours 400gm ", category: "wet-food",  price: 190 },
    { imageURL: "assets/cat/39.png", name: "Smart heart tuna", category: "wet-food",  price: 220 },
    
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