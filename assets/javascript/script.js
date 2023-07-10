/*
Autor: Jorge Marcelo
Data de Criação: 10/07/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
*/ 

/*Selecionando todos os elementos que estão com o atributo required*/
const campos = document.querySelectorAll("[required]");

/*Função de validação dos campos com parametro campo*/
function validacaoCampo(campo){

/*Função que verifica se tem erros*/ 
function verificarErros(){
let encotrarErro = false;

/*Loop que vai percorrer as propiedades do objeto validity e valid
Se caso a propiedade do campo for falsa no caso valid
Tudo indica que há um erro no campo
Caso o  erro seja encontrado atribuimos erro a varivel encontrarErro
e retornaremos ela na função*/
for (let erro in campo.validity){
if (campo.validity[erro] && !campo.validity.valid){
encotrarErro = erro;
}
}

return encotrarErro;
}

/*Aqui temos uma função que retorna um erro personalizado
Pegamos o campo a traibuimos  mensagem a ele com o valueMissing
typeMissmatch corresponde ao tipo do campo no caso email para validação
*/ 
function mensagemPersonalizada(tipoDeErro){
const mensagens = {
email: {
valueMissing: "Campo obrigatorio",
typeMissmatch: "Por favor preecha um email valido"
},

password: {
valueMissing: "Campo obrigatorio"

}
}

/*retorno da funçao correspondente ao tipo de erro*/
return mensagens[campo.type][tipoDeErro]
}


/*Função que vai exibir as mensagens de acorddo 
com campo e sua determinada classe*/
function setErroPersonalizado(mensagem){
const inputError = campo.parentNode.querySelector("input.error");
const spanError = campo.parentNode.querySelector("span.error");

/*Se a mensagem de erro for verdadeira*/ 
if (mensagem){
inputError.classList.add("active");
spanError.classList.add("active");
spanError.innerHTML = mensagem;

/*Caso seja falsa*/
} else {
inputError.classList.remove("active");
spanError.classList.remove("active");
spanError.innerHTML = "";


}
}

/*Dentro da função validacao de campo, retornamos uma função anônima.
e chamamos a função que verifica se tem erros
*/
return function (){
const erro = verificarErros()

/*Caso haja erro vamos adicionar o
estilo com a borda vermelha
com a mensagem personalizada
do valueMissing e typeMIssmatch*/
if (erro){
const mensagem = mensagemPersonalizada(erro)
campo.style.borderColor = "red";
setErroPersonalizado(mensagem);

/*Caso contrario estilo com a borda verde*/
} else {
campo.style.borderColor = "#3edf4b";
setErroPersonalizado();
}
}
}


/*Dentro da função validaçãaoCustomizada usamos o target e aramazenamos 
esse valor na varivel campo em seguida chamamos a função validacao de campo
para fazer a validacao de cada campo e retonamos ela*/
function validacaoCustomizada(evento){
const campo = evento.target
const validacao = validacaoCampo(campo)
validacao();
}


/*Percorre todos os campos do formulario vendo se é invalido os campos
caso seja aciona o evento faz a validação com as mensagens customizadas
o invalid e caso a mensage é inalida e blur e quando aquele campo
perde o foco*/ 
for (campo of campos){
campo.addEventListener("invalid" , function (evento){
evento.preventDefault();
validacaoCustomizada(evento)
})
campo.addEventListener("blur", validacaoCustomizada)
}


/*Por fim evento que aciona o envio do formulario 
e não perite o envio automatico do mesmo*/
document.querySelector("form").addEventListener("submit", function (evento){
evento.preventDefault();
})


/*Funções das redes sociais*/ 

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})
