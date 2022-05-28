//1
let header1 = document.createElement('h1');
header1.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(header1);


//2
let createMain = document.createElement('main');
createMain.classList = 'main-content';
document.body.appendChild(createMain);

//3
function createSection (classe){
    let section = document.createElement('section');
    section.classList = classe;
    document.getElementsByClassName('main-content')[0].appendChild(section);
}

createSection('center-content');

//4
let paragraph1 = document.createElement('p');
paragraph1.innerText = "Buscar, Criar, Remover e Editar elementos com DOM"
document.getElementsByClassName('center-content')[0].appendChild(paragraph1);

//5
createSection('left-content');

//6
createSection('right-content');

//7
let image1 = document.createElement('img');
image1.src = "https://picsum.photos/200";
image1.classList = "small-image";
document.getElementsByClassName('left-content')[0].appendChild(image1);

//8
let lista = document.createElement('ul');
let numeros = ['Um','Dois','Tres','Quatro','Cinco','Seis','Sete','Oito','Nove','Dez'];

document.getElementsByClassName('right-content')[0].appendChild(lista);

for (i = 0; i < numeros.length; i += 1){
    let itens = document.createElement('li');
    itens.innerText = numeros[i];
    document.getElementsByClassName('right-content')[0].firstElementChild.appendChild(itens);
}

//9
for (i = 0; i < 3; i += 1) {
    let header3 = document.createElement('h3');
    document.getElementsByClassName('main-content')[0].appendChild(header3)
}

//10
header1.classList = "title";    

//11
let header3 = document.getElementsByTagName('h3')
for (i = 0; i < header3.length; i += 1){
;
    header3[i].classList = 'description';
}

//12
let leftContent = document.getElementsByClassName('left-content')[0];
let main = document.getElementsByClassName('main-content')[0];
main.removeChild(leftContent);

//13
let rightContent = document.getElementsByClassName('right-content')[0];
rightContent.style.marginRight = 'auto';

//14
let centerContent = document.getElementsByClassName('center-content')[0];
centerContent.parentElement.style.backgroundColor = 'green';

//15
rightContent.firstChild.id = "ul";
let ul = document.getElementById("ul");
ul.removeChild(ul.lastElementChild);
ul.removeChild(ul.lastElementChild);
