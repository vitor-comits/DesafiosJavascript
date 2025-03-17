// OBS: Fiz os desafios todos aqui.Deixei eles como comentarios.


//1)Somar Todos os Elementos de um Array Unidimensional

//let array = []
//let total = 0

//while(true){
//let  numero = Number(prompt('Digite um número ou algo diferente para parar : '))
 //if (!isNaN(numero)){
    //console.log('Valor digitado é: ' + numero)
   // array.push(numero)
    
  // }
  // else {
   // console.log('Valor invalido')
   // break
//}
//}

//for( i=0; i<array.length; i++){
    // total += array[i] ;
//}
 

 //console.log(array)
 // console.log(total)

//2)Verificar se um Número é Primo

//Primo = undefined
//let  numero = Number(prompt('Digite um número: '))

// if (!isNaN(numero)){
   /// console.log('Valor digitado é: ' + numero)
//} else {
    //console.log('Valor invalido') 
//}
//if (numero <=1){
// console.log('False não é primo')
//}

//for (let i = 2; i < numero; i++) {
//    if (numero % i === 0) {
//     console.log('false'); // Se for divisível, não é primo
  //  }
//else{
  //  console.log('true')
//}
//}

//3)Verificar se uma String é um Palíndromo

//function Palindromo(str) {
//  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//  const strInvertida = str.split('').reverse().join('');
//  return str === strInvertida;
//}

//console.log(Palindromo("A man a plan a canal Panama"));
//console.log(Palindromo("Socorram-me subi no onibus em marrocos")); // true
//console.log(Palindromo("Olá mundo"))






//4)Codificar o Jogo "Pedra, Papel, Tesoura

//escolhas = ['Pedra', 'Papel', 'Tesoura'];
//let escolhaUsuario = prompt('Pedra, Papel ou Tesoura').toLowerCase();

//console.log('Usuario: ' + escolhaUsuario);

//opcoes = ["Pedra", 'Papel', 'Tesoura'];
//opcoesCpu = ["Pedra", 'Papel', 'Tesoura']; 

//const escolhaCpu = Math.floor(Math.random() * opcoesCpu.length);

//console.log('Cpu: ' + opcoesCpu[escolhaCpu]);

//function determinarVencedor(escolhaUsuario, escolhaCpu) {
//  if (escolhaUsuario === opcoesCpu[escolhaCpu].toLowerCase()) { 
//    return "Empate";
//  } else if (
//    (escolhaUsuario === "pedra" && opcoesCpu[escolhaCpu].toLowerCase() === "tesoura") ||
//    (escolhaUsuario === "papel" && opcoesCpu[escolhaCpu].toLowerCase() === "pedra") ||
//    (escolhaUsuario === "tesoura" && opcoesCpu[escolhaCpu].toLowerCase() === "papel")
//  ) {
//    return "Você ganhou!";
//  } else {
//    return "CPU ganhou!";
//  }
//}

//const resultado = determinarVencedor(escolhaUsuario, escolhaCpu);
//console.log(resultado);
