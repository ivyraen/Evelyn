//verificar se é primo ou não utilizando a raiz quadrada
function ehPrimo (n){
    if (n <= 2) return false 
    if (n % 2 == 0) return false

    let limite = Math.floor (Math.sqrt (n))

    for(let c = 3; c <= limite; c++){
        if(n % c ==0) return false
    }

    return true
}

function calcular (){
    //faz uma especia de conversão sem precisar fazer 2 passos.
    let numero = document.getElementById("numero").valueAsNumber

    let resultado = document.getElementById("resultado")

    //apaga tudo antes e depois continua o processo
    resultado. innerHTML = ""

    if(numero < 0){
        let aviso = document.createElement("p")
        aviso.textContent = `Por Favor, introduza um número inteiro positivo`
        resultado.appendChild(aviso)
        //a função para quando apanha um return
        return
        
    }

    //se devolver um numero verdadeiro ele irá devovler isso: 
    let divPrimos = document.createElement("div")
    for(let c = 2; c <= numero; c++)
        if(ehPrimo(c)){
            let spanPrimo = document.createElement("span")
            spanPrimo.className = "primo"
            spanPrimo.textContent = c + "";
            divPrimos.appendChild(spanPrimo)
        }
    
        resultado.appendChild(divPrimos)
     
    //informar quando não é primo    
    if(!ehPrimo(numero)){
        let avisoFinal = document.createElement("p")
        avisoFinal.textContent = `O numero ${numero} não é PRIMO`
        resultado.appendChild(avisoFinal)
    }
}



































/*
//Função que verifica se o numero é primo ou não
function ehPrimo(n) {
    // Numeros menores que dois não são primos, então o if irá retorna falso
    if (n < 2) return false;
    // For para ir de um em um verificando se os numeros são primos
    for (let i = 2; i <= Math.sqrt(n); i++) {
    // if vai validar se o numero escolhido é divisivel pelo i e depois ve se o resultado sobra 0, se sobrar é porque é divisivel por algo alem dele mesmo, portanto retorna falso
        if (n % i === 0) return false;
    }
    return true;
}

//
function veriNumPrim() {
    let numPrimo = document.getElementById("numero");
    let resultadoPrimo = parseInt(document.getElementById("numeroPrimo").value);
 
    numPrimo.innerHTML = "";
 
    if (isNaN(resultadoPrimo) || resultadoPrimo < 1 || resultadoPrimo > 100) {
        numPrimo.textContent = "Escolha um número entre 1 e 100.";
    } else {
        for (let c = 1; c <= resultadoPrimo; c++) {
            if (ehPrimo(c)) {
                let linha = document.createElement("p");
                linha.textContent = `${c}`;
                numPrimo.appendChild(linha);
            }
        }
    }
}
 
let botao = document.getElementById("botao");
botao.addEventListener("click", veriNumPrim);*/