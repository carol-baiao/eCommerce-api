const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const products = [];

const DOM = {
    productsContainer: document.getElementById('tela'),

    addProduct(product, index) {
        const element = document.createElement('div')
        element.innerHTML = DOM.innerHTMLProduct(product, index)
        element.dataset.index = index

        DOM.productsContainer.appendChild(element)
    },

    innerHTMLProduct(product, index) {
        console.log(product);
        return `
                
                   <div class="card col-md-4  mb-2 style="width: 18rem;">
                        <img src=${product.image} class="card-img-top"
                            alt="Imagem produto">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text fw-bold">R$ ${product.price}</p>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text">Avaliação: ${product.rating.rate}</p>
                            <p class="card-text">Ano de lançamento: ${product.year}</p>
                            <a href="detalhes.html?id=${product.id}" data-product-id="${product.id}" target="_blank" class="btn btn-primary">Mais detalhes</a>
                        </div>
                   </div>
               
            `
    }
}

async function init() {
    await fetch("http://diwserver.vps.webdock.cloud:8765/products/category/Personal Care - Skin Care?id=${product.i}")
        .then(async function (response) {
            return response.json();
        })
        .then(function (response) {
            products.push(...response.products);
        })
        .catch(function (error) {
            console.log("Error: " + error);
        });

    products.forEach(product => DOM.addProduct(product));
}

init()
