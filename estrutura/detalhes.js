// pegando id da url
var url = window.location.href;
var id = url.match(/id=(\d+)/)[1];

console.log(url);
console.log(id);

// inserido elementos da api na tela
function inserindoElementos(imagemUrl, titulo, descricao, preco, ano, avaliacao) {
    const secao1 = document.getElementById('secao1');
    const imagem = document.createElement('img');
    imagem.src = imagemUrl;
    imagem.classList.add('col-8');
    secao1.appendChild(imagem);

    const secao2 = document.getElementById('secao2');
    const elementoTitulo = document.createElement('h1');
    const elementoDescricao = document.createElement('p');
    const elementoPreco = document.createElement('p');
    const elementoAno = document.createElement('p');
    const elementoAvaliacao = document.createElement('p');

    elementoTitulo.textContent = titulo;
    elementoDescricao.textContent = descricao;
    elementoPreco.textContent = `Preço: ${preco}`;
    elementoAno.textContent = `Ano de lançamento: ${ano}`;
    elementoAvaliacao.textContent = `Nota de avaliação: ${avaliacao}`;

    secao2.appendChild(elementoTitulo);
    secao2.appendChild(elementoDescricao);
    secao2.appendChild(elementoPreco);
    secao2.appendChild(elementoAno);
    secao2.appendChild(elementoAvaliacao);
}

// chamando api
async function carregarConteudo() {
    const apiUrl = `http://diwserver.vps.webdock.cloud:8765/products/${id}`;
    console.log(apiUrl);

    await fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const imagemUrl = data.image;
            const titulo = data.title;
            const descricao = data.description;
            const preco = data.price;
            const ano = data.year;
            const avaliacao = data.rating.rate;

            inserindoElementos(imagemUrl, titulo, descricao, preco, ano, avaliacao);
        })
        .catch(error => {
            console.error(error);
        })
}
carregarConteudo();

