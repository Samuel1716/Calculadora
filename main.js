//CHANDO PELA ID:TELA
const tela = document.getElementById("tela")

//função que sera chamada quando digitar um número irá aparecer na tela
function adicionarValor(valor){
    tela.value += valor 
}

//está apagando os numeros da tela
function apagarValor(){
    tela.value = ""
}

function apagarUmNumero(){
    tela.value = tela.value.slice(0,-1)
}

function calcularResultado(){
    try{
         tela.value = eval(tela.value)// Avalia a expressão textual (ex.:"2+3*4") e coloca o resultado na tela
         //ATENÇÃO: eval executa código JavaScript - Funcion para expressões matematicas simples, mas requer cuidado com a entrada do usuario
    }
    catch (erro){
        tela.value = "Erro"
    }
}

//Adicionado evento do teclado

document.addEventListener("keydown", function(evento){
    const tecla = evento.key

    if ("0123456789+-*/.".includes(tecla)){
        adicionarValor(tecla)
    }
    if (tecla === "Enter" || tecla === "="){
        calcularResultado()
    }
    if (tecla === "Backspace") { //se a tecla for Backspace (tecla de apagar para trás)
        apagarValor(); //remove o ultimo caractere da tela
    }
    // Esc para limpar tudo
    if (tecla === "Escape"){ //se a tecla for Escape (Esc)
        apagarUmNumero(); //limpa todo o display
    }
}

)
