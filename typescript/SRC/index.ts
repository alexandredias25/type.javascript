// String, boolean, number
let x:number = 30;  //annotation

//x = "ale" - a variavel não aceita o tipo string

console.log(x);

let b = 12;  //inferencia

//tipos basicos 
let nome: string = "Alexandre";
let idade: number = 22;
let administrador: boolean = true;

//String != string -> no ty  ira usar tudo em minusculo 
  
console.log(typeof nome);
console.log(nome);

//objeto
const meunumero:number [] =  [1,2,3,5,9];

console.log(meunumero);
console.log(meunumero.length);
meunumero.push(6);

console.log(meunumero);

//tuplas -> padroniza um Array
let mtuple: [number, string, string[]];

mtuple = [10, "teste", ["a", "b"]];

//mtuple = [true,false,true]; -> errado a tupla tem que ser exatamente oque foi sitado no Array

console.log(mtuple);

//object literals -> {proriedade: vaolor}
const user: {nome:string, idade:number} = {
    nome: "Pedro",
    idade: 18 
};

console.log(user);
console.log(user.idade); //-> mostra so a idade
//user.job = "programador" -> Não e possivel acrescentar, somente mudar os valores que estão na tipagem

// any
let a:any = 2;
a ="teste";
a = true;
a = [];


//union types
let id: string|number = "alex";
id = 200;
//aceita somentes os tipos  descretados 
//id = true; -> ex erro
// solução para o any


//type alias
type meuid = number | string

const xx: meuid = 10;
const yy: meuid = "xandy";
//const zz: meuid = true;

//enum 
//tamanho de roupas (size: Medio, size: Grande)

enum tamanho {
    P = "pequeno",
    M = "medio",
    G = "grande"
};

const camisa = { 
    nome: "terno",
    tamanho:tamanho.M
};

console.log(camisa);

//literal types
let teste: "valor" | null
//teste = "outrovalor";
teste = null;

//funçoes

function soma(a:number,b:number) {
    return a + b
}
console.log(soma(15,42));

function ola(nome:string):string {
    return`Ola ${nome}`
}
 console.log(ola("Alexandre"));

 function login(msg:string):void // -> fuction que nao tem return 
{
console.log(msg);
 }
 login("teste");

 function saudação(nome:string, saudar?:string) {
    if(saudar){
        console.log(`ola ${saudar} ${nome}`)
    } else{
        console.log(`Ola ${nome}`)
    }
// o "?" e usado para function opcional
 }
 saudação("ana");
 saudação( "Santa", "senhora");

 //interfaces
