# JS-EBAC

# Javascript---EBAC

# Operadores

## Aritméticos: retornam o resultado de uma operação

- somar

* subtrair

- multiplicar
  / dividir
  % resto de divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true / false):

< menor que

> maior que
> <= menor ou igual
> = maior ou igual

## Exemplos

a = 5
b = 4

1. a < b false
2. a > b true
3. a <= false
4. a >= true

## Comparadores Lógicos: teste lógico, retorno booleano (true / false)

== igualdade entre sentenças (valor)
!= diferença entre sentenças (valor)
=== igualdade entre sentenças (valor e tipo)
!== diferença entre sentenças (valor e tipo)
Exemplo:
a == b = true
a != b = false
Atribuição
a = b
a = 4

## Operadores de lógica e junção lógica

! NÃO (NOT)
&& E (AND)
|| Ou (OR)
O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

## Exemplos:

a != b // o valor de a é diferente de b
x !== y // o valor e o tipo de x são diferentes de y
!a == b // o valor de a não é igual ao valor de b
As condições lógicas são convertidas em números binários:
true é equivalente a 1 false é equivalente a 0

## Operador lógico de atribuição

Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs

Exemplo:
var cor = "preto"
var meuCarro = cor == "preto" ? "preto" : "branco";

## If

if (...) {
...
}

## Else

else {

}
Exemplo
if (cor == "preto") {
meuCarro = "preto";
} else {
meuCarro = "cinza";
}

## Else if

else if (...) {

}
Exemplo
if (cor == "preto") {
meuCarro = "preto";
} else if (cor == "vermelho"){
meuCarro = "cinza";
} else if (cor == "amarelo"){
meuCarro = "branco";
} else {
meuCarro = "azul";
}

## Switch

switch (cor) {
case 'preto' :
meuCarro = 'preto';
break;
case 'roxo' :
meuCarro = 'roxo';
break;
case 'azul' :
meuCarro = 'azul';
break;
default :
console.log('desculpe, não temos essa opção');
}

## Calcular Media

var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if ( media > 8 ) {
console.log ('aluno aprovado');
} else {
console.log ('aluno em recuperação');
}

## Laços de repetição

exemplo:

for([expressaoinicial]; [condicao]; [incremento])
for( condição ){
execução
}

exercicio:
//fazer a revisão do carro aos 10km

var km;
var revisao = 10

for(km = 0; km <= revisao; km++ ){
console.log('apenas ' + km + 'kms pode rodar')
}

### Calcular a media de todos os alunos

var alunos = [
[6, 7, 8, 6],
[8, 5, 6, 8],
[10, 6, 8, 7]
]

var nota = 0;
for (var i = 0; i < alunos.length; i++){

    nota = 0
    aluno = alunos[i]
    console.log ('Aluno: ' + aluno);

    for( c = 0; c < alunos.length; c++){
        nota +=  alunos[c];
    }

    media = nota / 4;
    if( media >= 7) {
        resultado = 'aprovado';
    } else {
        resultado = 'reprovado';
    }

    console.log('Media: ' + media + '-' + resultado);

}
