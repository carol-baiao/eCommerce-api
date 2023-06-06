// Obter os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);

// Verificar se o parâmetro 'tipo' está presente na URL e obter seu valor
if (urlParams.has('tipo')) {
    const tipoProduto = urlParams.get('tipo');
    // Faça o que você precisa com o valor do parâmetro 'tipo'
    console.log('Tipo de produto:', tipoProduto);
}

// Verificar se o parâmetro 'marca' está presente na URL e obter seu valor
if (urlParams.has('marca')) {
    const marcaProduto = urlParams.get('marca');
    // Faça o que você precisa com o valor do parâmetro 'marca'
    console.log('Marca do produto:', marcaProduto);
}

// Verificar se o parâmetro 'genero' está presente na URL e obter seu valor
if (urlParams.has('genero')) {
    const generoProduto = urlParams.get('genero');
    // Faça o que você precisa com o valor do parâmetro 'genero'
    console.log('Gênero do produto:', generoProduto);
}

// Verificar se o parâmetro 'avaliacao' está presente na URL e obter seu valor
if (urlParams.has('avaliacao')) {
    const avaliacaoProduto = urlParams.get('avaliacao');
    // Faça o que você precisa com o valor do parâmetro 'avaliacao'
    console.log('Avaliação do produto:', avaliacaoProduto);
}
