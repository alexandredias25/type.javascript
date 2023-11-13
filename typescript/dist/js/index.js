"use strict";
let x = 30;
console.log(x);
let b = 12;
let nome = "Alexandre";
let idade = 22;
let administrador = true;
console.log(typeof nome);
console.log(nome);
const meunumero = [1, 2, 3, 5, 9];
console.log(meunumero);
console.log(meunumero.length);
meunumero.push(6);
console.log(meunumero);
let mtuple;
mtuple = [10, "teste", ["a", "b"]];
console.log(mtuple);
const user = {
    nome: "Pedro",
    idade: 18
};
console.log(user);
console.log(user.idade);
let a = 2;
a = "teste";
a = true;
a = [];
let id = "alex";
id = 200;
const xx = 10;
const yy = "xandy";
var tamanho;
(function (tamanho) {
    tamanho["P"] = "pequeno";
    tamanho["M"] = "medio";
    tamanho["G"] = "grande";
})(tamanho || (tamanho = {}));
;
const camisa = {
    nome: "terno",
    tamanho: tamanho.M
};
console.log(camisa);
let teste;
teste = null;
function soma(a, b) {
    return a + b;
}
console.log(soma(15, 42));
function ola(nome) {
    return `Ola ${nome}`;
}
console.log(ola("Alexandre"));
function login(msg) {
    console.log(msg);
}
login("teste");
function saudação(nome, saudar) {
    if (saudar) {
        console.log(`ola ${saudar} ${nome}`);
    }
    else {
        console.log(`Ola ${nome}`);
    }
}
saudação("ana");
saudação("Santa", "senhora");
