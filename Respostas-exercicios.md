# Exercícios

## 1 - Resolva as operações:

● 10 + 15 = 25 (number)
● “10” + 2 = '102' (string)
● “10” _ 2 = 20 (number)
● “10” / 3 = 3.3333333333333335 (float)
● “10” % 3 = 1 (number)
● 10 + true = 11 (number)
● 10 == ”10” = true (boolean)
● 10 === “10” = false (boolean)
● 10 < 11 = true (boolean)
● 10 > 12 = false (boolean)
● 10 <= 10.1 = true (boolean)
● 10 > 9.99 = true (boolean)
● 10 != “dez” = true (boolean)
● 10 + true = 11 (number)
● “dez” + true = 'deztrue' (string)
● 10 + false = 10 (number)
● 10 _ false = 0 (number)
● true + true = 2 (number)
● 10++ = 11 (incremento)
● 10-- = 9 (decremento)
● 1 & 1 = 1 (number)
● 1 & 0 = 0 (number)
● 0 & 0 = 0 (number)
● 1 & 0 = 0 (number)
● 0 / 1 = 0 (number)
● 5 + 5 == 10 = true (boolean)
● “5” + ”5” == 10 = false (boolean)
● “5” _ 2 > 9 = true (boolean)
● (10 + 10) _ 2 = 40 (number)
● 10 + 10 * 2 = 30 (number)

## 2. Responda as perguntas de acordo com as variáveis.

let branco = “preto”;
let preto = “cinza”;
let cinza = “branco”;
let carro = “preto”;
let valor = 30000;
let prestacao = 750

a) branco == “branco”
r: false

b) branco == cinza
r: false

c) carro === branco
r: true

d) var cavalo = carro == “preto” ? “cinza” : “marron”;
r: cinza

e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
de 3.000? Demonstre a operação.

// Valor total do carro
let valorCarro = 15000; // Substitua pelo valor real do carro

// Valor da entrada
let entrada = 3000;

// Valor de cada prestação
let valorPrestacao = 1000; // Substitua pelo valor real de cada prestação

// Cálculo do número de prestações necessárias
let numeroPrestacoes = Math.ceil((valorCarro - entrada) / valorPrestacao);

console.log(`Você precisará de ${numeroPrestacoes} prestações para pagar o carro.`);



f) Somando as variáveis de cores é formada uma string de quantos caracteres?

let cor1 = "vermelho";  // 7 caracteres
let cor2 = "azul";     // 4 caracteres
let cor3 = "verde";    // 5 caracteres

// Somando as variáveis de cores
let stringConcatenada = cor1 + cor2 + cor3;

// Calculando o comprimento da string resultante
let comprimentoDaString = stringConcatenada.length;

console.log(`A string resultante tem ${comprimentoDaString} caracteres.`);

