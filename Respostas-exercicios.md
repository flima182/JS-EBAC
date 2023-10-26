# Exercícios

## 1 - Resolva as operações:

<ul>
    <li> 10 + 15 = 25 (number)</li>
    <li> 10 + 15 = 25 (number)</li>
    <li> “10” + 2 = '102' (string)</li>
    <li> “10” _ 2 = 20 (number)</li>
    <li> “10” / 3 = 3.3333333333333335 (float)</li>
    <li> “10” % 3 = 1 (number)</li>
    <li> 10 + true = 11 (number)</li>
    <li> 10 == ”10” = true (boolean)</li>
    <li> 10 === “10” = false (boolean)</li>
    <li> 10 < 11 = true (boolean)</li>
    <li> 10 > 12 = false (boolean)</li>
    <li> 10 <= 10.1 = true (boolean)</li>
    <li> 10 > 9.99 = true (boolean)</li>
    <li> 10 != “dez” = true (boolean)</li>
    <li> 10 + true = 11 (number)</li>
    <li> “dez” + true = 'deztrue' (string)</li>
    <li> 10 + false = 10 (number)</li>
    <li> 10 * false = 0 (number)</li>
    <li> true + true = 2 (number)</li>
    <li> 10++ = 11 (incremento)</li>
    <li> 10-- = 9 (decremento)</li>
    <li> 1 & 1 = 1 (number)</li>
    <li> 1 & 0 = 0 (number)</li>
    <li> 0 & 0 = 0 (number)</li>
    <li> 1 & 0 = 0 (number)</li>
    <li> 0 / 1 = 0 (number)</li>
    <li> 5 + 5 == 10 = true (boolean)</li>
    <li> “5” + ”5” == 10 = false (boolean)</li>
    <li> “5” _ 2 > 9 = true (boolean)</li>
    <li> (10 + 10) _ 2 = 40 (number)</li>
    <li> 10 + 10 * 2 = 30 (number)</li>
</ul>

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

### resposta:
// Valor total do carro <br>
let valorCarro = 15000; // Substitua pelo valor real do carro<br>

// Valor da entrada<br>
let entrada = 3000;<br>

// Valor de cada prestação<br>
let valorPrestacao = 1000; // Substitua pelo valor real de cada prestação<br>

// Cálculo do número de prestações necessárias<br>
let numeroPrestacoes = Math.ceil((valorCarro - entrada) / valorPrestacao);<br>

console.log(`Você precisará de ${numeroPrestacoes} prestações para pagar o carro.`);<br>

f) Somando as variáveis de cores é formada uma string de quantos caracteres?

### resposta:

let cor1 = "vermelho"; // 7 caracteres<br>
let cor2 = "azul"; // 4 caracteres<br>
let cor3 = "verde"; // 5 caracteres<br>

// Somando as variáveis de cores<br>
let stringConcatenada = cor1 + cor2 + cor3;<br>

// Calculando o comprimento da string resultante<br>
let comprimentoDaString = stringConcatenada.length;<br>

console.log(`A string resultante tem ${comprimentoDaString} caracteres.`);<br>
