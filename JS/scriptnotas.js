function calcularMedia(notas) {
    var soma = 0;
    for (c = 0; c < notas.length; c++) {
        soma += notas[c];

    }
    media = soma / notas.length;

    return media;
}

function aprovacao(notas) {
    let media = calcularMedia(notas);
    let condicao = media >= 7 ? 'aprovado' : 'reprovado';
    return 'Média: ' + media + '- Resultado: ' + condicao;
}

//console.log('Media: ' + calcularMedia([9, 6]))
//console.log(aprovacao(calcularMedia([9, 6])))

console.log(aprovacao([8, 8, 7]));

//console.log('Media: ' + calcularMedia([10, 8]))
//console.log(aprovacao(calcularMedia([10, 8])))

//console.log('Media: ' + calcularMedia([8, 5]))
//console.log(aprovacao(calcularMedia([8, 5])))



function contagemRegressiva(numero) {

    console.log(numero);

    let proximoNumero = numero - 1;

    if (numero > 0)
        contagemRegressiva(proximoNumero);

}


contagemRegressiva(10);


document.addEventListener('submit', function(evento) {

    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()){
        objeto[key] = dados.get(key);

        notas.push(parseInt(dados.get(key)));
        
    }

    console.log(notas);
    console.log(objeto);

    document.getElementById('resultados').innerHTML = aprovacao(notas);

    aprovacao(notas);

});