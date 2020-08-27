/* AULA - ARRAY */ 

let numeros = [2, 4, 12, 6, 10, 21, 7]

alert (numeros [0] + numeros [numeros.length -1])


/* SOMA */ 

let numeros = [2, 4, 12, 6, 10, 21, 7]
let soma = 0

for (i=0; i < numeros.length; i++) {

    soma += numeros [i]
}

alert (soma)

/* MEDIA */ 

let numeros = [2, 4, 12, 6, 10, 21, 7]
let soma = 0

for (i=0; i < numeros.length; i++) {

    soma += numeros [i]
}

alert (soma / numeros.length).tofixed(3)} 

/* IMPARES*/

let numeros = [2, 4, 12, 6, 10, 21, 7]
let somaimpares= 0

for (i=0; i < numeros.length; i++) {

    if (numeros [i] % 2 == 1) {

        somaimpares += numeros[i]

    }
}

alert (somaimpares) 

/* Pares */ 

let numeros = [2, 4, 12, 6, 10, 21, 7]
let somapares= 0

for (i=0; i < numeros.length; i++) {

    if (numeros [i] % 2 == 0) {

        somapares += numeros[i]

    }
}

alert (somapares) 

/* Atividade aula */ 

let numeros = []
let soma1 = 0
let soma2 = 0 

for (i=0; i < 10; i++){

    numeros[i] = Number (prompt ("Digite um número positivo e inteiro"))

    if (i < 5) {
    
        soma1 = soma1 + numeros[i]
    } else {
        soma2 = soma2 + numeros[i]
    }
}

alert (`O resultado da soma da primeira metade menos a soma da segunda é ${soma1 - soma2}`) 


/* Array push adicionar um elemento no final do array */ 

let numeros = [1, 2, 3]

numeros.push(prompt ("Digite um número:"))

alert (numeros)

/* Prototype */

let numeros = [1, 3, 5]
let numeros2 = [8, 9, 10]

Array.prototype.push.apply (numeros, numeros2)

alert (numeros)

/* Pop - remove o ultimo elemento do array e retorna aquele elemento */ 

let cores = ["verde", "azul", "preto", "amarelo"]

cores.pop()
alert (cores)

let cores = ["verde", "azul", "preto", "amarelo"]

let excluidos = cores.pop()
alert (excluidos)

/* Unshift adiciona um elemento no inicio */ 



/* shift - remove o primeiro elemento do array */

let cores = ["verde", "azul", "preto", "amarelo"]

cores.shift()
alert(cores)

let removidos = cores.shift
alert (cores)

/* Concat() soma valores de array */

let cores = ["verde", "azul", "preto", "amarelo"]
let cores2 = ["roxo", "rosa","cinza"]
let cores3 = ["branco", "vermelho"]

let coresjuntas = cores.concat (cores2, cores3)
alert (coresjuntas)


/* Sort - Ordena os elementos do proprio
 array e retorna o array ordenado */ 

 let numeros = [3, 1, 5, 7, 6, 2]

numeros.sort ();

alert (numeros)

let numeros = [3, 1, 5, 7, 6, 2, 11, 34]
numeros.sort (function (a, b){return a - b}) 
alert (numeros)

let cores = ["verde", "azul", "preto", "amarelo"]
/*Se algumas letras forem maiusculas é necessario utilizar o toUpercase */
cores.sort();
alert (cores)


/* Indexof() para achar o indice do array*/

let numeros = [3, 1, 5, 7, 6, 2, 11, 34]

let indice = numeros.indexOf (7, 4)
alert (indice)

let indice = numeros.indexOf (3)
alert (indice)

let indice = numeros.indexOf (7, -1)
alert (indice)


// 1 fill preenche o array com o valor que você quer //

//             0  1  2  3  4  5  6  7  8  9//  
let numeros = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

numeros.fill (3)
numeros.fill (3, 3)
numeros.fill (4, 7, 9)
// (3) e (4) nesse exemplo são os números que você quer preencher 3, 7 e 9 são as posições. 
alert (numeros)


// 2 Filter retorna um novo array com os elementos que passaram na função // 

let numeros = [55, 82, 15, 6, 9, 11, 12]

function isBigenough(value) {
    return value >= 10;
}

function pares(value) {
    return ((value % 2 == 0) && value > 10);
}

function impares(value) {
    return (value % 2 == 1);
}

var filterd = numeros.filter(isBigenough);
alert (filterd)

// Não precisa criar uma variavel para isso//
alert (numeros.filter(isBigenough))


// 3 Join junta os elementos de array separando com alguma coisa pode ser um -,. etc... //

let elements = [fire, water, rain, hurricane]

let novo = elements.join.('-')
alert(elements.join.())
alert(elements.join.(''))
alert(elements.join.('-'))

// 4  Map - Passa uma função em cada elemento devolve um novo array como resultado//

let numeros = [25, 36, 81, 121]

let raizquadrada = numeros.map(Math.sqrt)

alert (raizquadrada)


let numeros = [25, 36, 81, 121]
var exp = numeros.map(function(num){

    return num **2
})

alert (exp)


// Slice - retorna uma copia de uma parte do array //

let numeros = [1, 2, 3, 4, "uva", "maça", "azul", "verde"]

alert (numeros.slice(5,7))

// Splice altera o conteudo de uma lista adicionando novos elementos removendo os antigos// 

let numeros = [1, 2, 3, 4, "uva", "maça", "azul", "verde"]

let removidos = numeros.splice (6, 2, "Vermelho")

alert(removidos)
alert(numeros)

// Mathmax retorna o maior valor de um vetor //

let numeros = [-20, -10, 1, 2, 3, 4, 10, 19]

let maior = Math.max (...numeros)
let minimo = Math.min (...numeros)

alert (maior)
alert (minimo)

// Ceil vai puxar sempre para o numero maior retorna o proximo numero inteiro maior/ floor é o inverso //

let numeros = [1.88, 10.57, 3.008, 4, 10, 19]

var arredondado = Math.ceil(numeros[1])

alert (arredondado)

let numeros = [1.88, 10.57, 3.008, 4, 10, 19]
let arredondado = []

for (i=0; i < numeros.length; i++) {
   
    arrendondado = arredondado.push(math.ceil(numeros))
  
}

alert (arredondado)

// math.pow eleva ao expoente // 

let numeros = [1, 2, 3, 4, 5]

let elevado = Math.pow(2,numeros [4])

alert (elevado)

// Random // 

let numeros = [1, 2, 3, 4, 5]

let randomico = intervalo(10, 20)


function intervalo (min, max) {
    return Math.random() * (max - min) + min
}

alert(randomico)

// Math.round arrendonda para cima ou para baixo // 

let arredondado = Math.round (200/3)

alert(arredondado)
