var todo;
var resultado;
var salvar;
function calculadora(numero) {
     salvar = document.formulario.tela.value+=numero;
}
function limpar() {
   document.formulario.tela.value="";
}
function calcular() {
    resultado = eval(salvar);
    document.formulario.tela.value= resultado ;

}