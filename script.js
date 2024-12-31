//Criação de variaveis
const nome = document.getElementById('inputNome')
const numero = document.getElementById('inputNumero')
const formCadastro = document.getElementById('formCadastro')
const tabela = document.getElementById('corpoTabela');
let valorNome
let valorNumero
let linha
let linhas = ''
//Criação de funções

//Função para pegar dados quando der submit
formCadastro.addEventListener("submit", function(e){
    e.preventDefault();
    valorNome = nome.value
    valorNumero = numero.value
})

function prepararTabela(){
    linha = '<tr>'
    linha += '<th>'
    linha += `${valorNome}`
    linha += '</th>'
    linha += '<th>'
    linha += `${valorNumero}`
    linha += '</th>'
    linha += '</tr>'
    linhas += linha;
    tabela.innerHTML = linhas
}
formCadastro.addEventListener("submit", prepararTabela)
