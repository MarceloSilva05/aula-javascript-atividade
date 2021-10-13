
var nome=document.formulario.nome;
var idade=document.formulario.idade;
function login() {
var form=nome.value!=""&& idade.value!="" ?
 alert("Você será direcionado para nossa página principal"):
alert("Usuário e/ou Senha estão inválidos");
 
}