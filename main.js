// Pegar Lista   
    const lista = document.querySelector(".lista")

// Pegar Botao Mostrar e Botão de Esconder
    const botaoMostrar = document.querySelector(".mostrar")
    const botaoEsconder = document.querySelector(".esconder")

/*  A segunda opção seria criar o botão de mostrar e o botão de esconder pelo js

    //Botão de mostrar
    ------------------
    const botaoMostrar = document.createElement("button");
    botaoMostrar.setAttribute("type", "button");
    botaoMostrar.appendChild(document.createTextNode("Botão Mostrar"));
    document.body.appendChild(botaoMostrar); 

    //Botão de esconder
    -------------------
    const botaoEsconder = document.createElement("button");
    botaoEsconder.setAttribute("type", "button");
    botaoEsconder.appendChild(document.createTextNode("Botão Esconder"));
    document.body.appendChild(botaoEsconder);

*/

// Função que ao clicar no botão mostrar, executa o evento que deixa a lista block
    function mostrarLista() {
        botaoMostrar.onclick = () => {
            lista.style.display = "block";
        }
}

// Função que ao clicar no botão esconder, executa o evento que deixa a lista block
    function esconderLista() {
        botaoEsconder.onclick = () => {
            lista.style.display = "none";
        }
    }

// Chamando funções para fazê-las funcionar.
    mostrarLista();
    esconderLista();
































































































/*
//Cria a constante lista, pegando a classe da <ul>
const lista = document.querySelector(".lista");

//Cria o botão "Mostrar lista", colocando um texto nele e colocando ele no body
let botaoMostrar = document.createElement("button");
let textoMostrar = document.createTextNode("Mostrar lista");
botaoMostrar.appendChild(textoMostrar);
document.body.appendChild(botaoMostrar);

//Cria o botão "Esconder lista", colocando um texto nele e colocando ele no body
let botaoEsconder = document.createElement("button");
let textoEsconder = document.createTextNode("Esconder lista");
botaoEsconder.appendChild(textoEsconder);
document.body.appendChild(botaoEsconder);

//A função mostrarLista é criada. No evento de clique no botão, a <ul> vira display block
function mostrarLista () {
    botaoMostrar.onclick = function () {
        lista.style.display = "block";
    }
}

//A função esconderLista é criada. No evento de clique no botão, a <ul> vira display none
function esconderLista () {
    botaoEsconder.onclick = function () {
        lista.style.display = "none";
    }
}

//Funções são executadas
esconderLista();
mostrarLista();
*/