let livros = [];
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI(params) {
    const res = await fetch(endPointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}