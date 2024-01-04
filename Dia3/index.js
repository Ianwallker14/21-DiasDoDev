let nome = prompt('Insira seu nome');
let idade = prompt('Insira sua idade');
let altura = prompt('Insira sua altura');
let peso = prompt('Insira o seu peso');
let anoNascimento = 2024 - idade;
let IMC = Number(peso/(altura*altura));


console.log('Olá '+nome+', '+'nasceu em '+anoNascimento+', '+'tem '+altura+' de altura'+', '+'pesa '+peso+'kg'+' seu IMC é '+IMC+'Kg/m2')