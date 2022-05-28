function palindromo (word) {
    let splitWord = word.split('');
    let reverseWord = splitWord.reverse();
    let joinWorld = reverseWord.join('');
    let palindromo;
    if (joinWorld == word) {
        palindromo = true;
        return palindromo
    }
    else {
        palindromo = false;
        return palindromo;
    }
}
//console.log(palindromo('arara'));


function maiorValor (numeros) {
    let maiorNumero = 0;
    for (index = 0; index < numeros.length; index += 1){
        if (numeros[maiorNumero] < numeros[index+1]) {
            maiorNumero = index+1;
        }
    }
    return maiorNumero;
}
//console.log(maiorValor([2,3,6,7,10,1]));
//Informação: usar o for in em vez do for normal para um array

function menorValor (numeros) {
    let menorNumero = 0;
    for (let index = 0; index < numeros.length; index += 1){
        if (numeros[menorNumero] > numeros[index+1]) {
            menorNumero = index+1 ;
        }
    }
    return menorNumero;
}
//console.log(menorValor([2,4,6,7,10,0,-3]));
//Informação: usar o for in em vez do for normal para um array


function maiorNome (nomes) {
    let maiorNome = 0;
    let index = 0;
    let maiorIndex = 0;
    for (let nome of nomes){
            nome.split('');
            let letras= 0;
            for (let {} in nome){
                letras += 1
            }
            if (letras > maiorNome) {
                maiorNome = letras;
                maiorIndex = index
            }
            index += 1;            
    }
    return nomes[maiorIndex];
}
//console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana',]));
// Informação: Sinais como < ou > podem ser usados em strings, e sera comparado o tamanho da string.



function maiorRepetido(numeros){
    let maiorRepetido = 0; 
    let vezesNumero = 0;
    let index = 0 
    for (let numero in numeros){
        let numeroAtual = numeros[numero] 
        for (let comparador in numeros){ 
            if (numeroAtual == numeros[comparador]){
                vezesNumero += 1;
            }
        }
        if (vezesNumero > maiorRepetido){ 
            maiorRepetido = vezesNumero;
            index = numero;
        }
        vezesNumero = 0
    }
    return numeros[index];

}
//console.log(maiorRepetido([2, 3, 2, 5, 8, 2, 3]));


let a = "Serei a melhor pessoa dev";
let b = "Esse é meu jeito dev de ser!";
let num = 2;
let strings = [a, b];