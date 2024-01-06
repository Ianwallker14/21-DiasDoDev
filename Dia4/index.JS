//EXERCICIO 1

//variaveis para solicitação

let estaComFome = prompt('Você está com fome ?')
let possuiDinheiro = prompt('Possui dinheiro ?')
let restauranteAberto = prompt('O Restaurante está aberto ?')


//estruturas condicionais

if(estaComFome === 'Não' || possuiDinheiro == 'Não'){
    console.log('Hoje o jantar é em casa')
}
else if(estaComFome === 'sim' && possuiDinheiro == 'sim' && restauranteAberto == 'sim'){
    console.log('Hoje o jantar será no seu restaurante preferido!')
}
else{
    console.log('Peça um delivery')
}




//EXERCICIO 2

//variaveis para solicitação
let nome = prompt('Qual seu nome ?')
let idade = prompt('Qual sua idade ?')
let cnh = prompt('Possui CNH ?')
let veiculo = prompt('Possui Veiculo ?')


//estruturas condicionais
if(idade >= 18 && cnh === 'Sim' && veiculo == 'Nao'){
    console.log(nome + ' , você pode dirigir mas não possui veiculo')
}
else if(idade >= 18 && cnh === 'Sim' && veiculo == 'Sim'){
    console.log(nome + ' , você será motorista')
}
else{
    console.log(nome+' ,você não pode dirigir!')
}