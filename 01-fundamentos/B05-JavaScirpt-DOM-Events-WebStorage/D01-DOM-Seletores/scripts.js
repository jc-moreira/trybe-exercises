//Exercicio 1

function futuro (){
    let previsao = document.getElementsByTagName("p")[1];
    previsao.innerText = "Atingindo a Estabilidade Financeira"
}

futuro();

//Exercicio 2

function mainSide (){
    let sideColor = document.getElementsByClassName("main-content")[0];
    sideColor.style.cssText = "background-color: rgb(76,164,109)"
}

//E possivel usar flag .style.background = "rgb(76,164,109)"

mainSide();

//Exercicio 3

function mainCenter (){
    let centerColor = document.getElementsByClassName("center-content")[0];
    centerColor.style.cssText = "background-color : white"
}

//È possivel usar flag .style.background = "white"

mainCenter ();

//Exercicio 4

function h1Correction (){
    let correction = document.getElementsByTagName("h1")[0];
    correction.innerText = "Exercício 5.1 - JavaScript"
}

h1Correction();

//Exercicio 5

function upperCase (){
    let pUpperCase = document.getElementsByTagName("p");
        pUpperCase[0].style.cssText = "text-transform: uppercase"
    
}
//E possivel usar  paragraph.innerHTML.toUpperCase(); na variavel 

upperCase();

//Exercicio 6


function consoleP (){
    let p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i += 1){
        console.log(p[i].innerHTML);
    }
}

consoleP();

// por algum motivo adicionar .innerHTML ao final