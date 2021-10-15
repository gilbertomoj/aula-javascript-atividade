var element = document.getElementById('screen')
var valor1;
var valor2;
var op;
function minhafuncao(x){
    element.innerHTML += x 
}

function limpa(){
    element.innerHTML = ''
}

function operacao(x){
    valor1 = parseInt(element.textContent)
    element.innerHTML = ''
    op = x
}
function ibutton(){
    result(op)
}

function result(x){
    if(x == '+'){
        valor2 = parseInt(element.textContent)
        element.innerHTML = valor1 + valor2
    }else if(x == '-'){
        valor2 = parseInt(element.textContent)
        element.innerHTML = valor1 - valor2
    }else if(x == '/'){
        valor2 = parseInt(element.textContent)
        element.innerHTML = valor1 / valor2
    }else if(x == '*'){
        valor2 = parseInt(element.textContent)
        element.innerHTML = valor1 * valor2
    }else if(x == '='){
        valor2 = parseInt(element.textContent)
        element.innerHTML = valor1 + valor2
    }
}