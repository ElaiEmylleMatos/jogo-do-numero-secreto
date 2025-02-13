//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
/*
let altura = prompt('Altura em metros: ');

let peso = prompt('Peso em quilogramas: ');

let imcResultado = parseFloat(imc(altura, peso).toFixed(2));

alert(imcResultado);
function imc(altura, peso) {
    return peso / (altura * altura);
}
*/
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
/*
let num = prompt('Digite um número para calcular o fatorial: ');

alert(`O fatorial de ${num} é ${calcularFatorial(num)}`);
function calcularFatorial(num) {
    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }
    return fatorial;
}
*/
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
/*
let valorDolar = prompt('Digite o valor em dólar: ');

alert(`O valor equivalente em reais é ${converterDolarParaReais(valorDolar)}`);

function converterDolarParaReais(valorDolar) {
    return parseFloat(valorDolar) * 6.05;
}
*/
//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
/*
let altura = prompt('Altura da sala: ');
let largura = prompt('Largura da sala: ');

mostrarDados();

function mostrarDados() {
    let area = parseFloat(altura) * parseFloat(largura);

    let perimetro = 2 * (parseFloat(altura) + parseFloat(largura));
    alert(`Área da sala: ${area}\nPerímetro da sala: ${perimetro}`);
}
*/

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
/*
let raio = prompt('Raio da sala: ');

mostrarDados();

function mostrarDados() {
    let area = 3.14 * parseFloat(raio) * parseFloat(raio);
    let perimetro = 2 * 3.14 * parseFloat(raio);
    alert(`Área da sala: ${area.toFixed(2)}\nPerímetro da sala: ${perimetro.toFixed(2)}`);
}
*/
// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
let numero = prompt('Digite um número para ver a tabuada: ');

mostrarTabuada();

function mostrarTabuada() {
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
        tabuada = tabuada + `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(tabuada);
}