function checkingCard(cartao){

let numero = 0;
let restoInt = 0;
let restoSoma = 0;
let numeroInt = 0;
let numeroSoma = 0;

for (let i=0; i <= cartao.length; i++){
  let restoContador = i % 2

  if(restoContador == 0){
    if(cartao.charAt(i) != 0){
      numero = (cartao.charAt(i) * 2)
      if (numero > 9){
        numero = numero - 9
      }
      numeroInt = parseInt(numero)
      numeroSoma = numeroSoma + numeroInt
    }
   }
   else{
     restoInt = parseInt(cartao.charAt(i))
     restoSoma = restoSoma + restoInt
   }
}
if ((restoSoma + numeroSoma) % 10 == 0){
  console.log(cartao)
  console.log("Cartão válido\n")
}
else {
  console.log(cartao)
  console.log("Cartão inválido\n")
}
}

function checkingFlag(cartao){

if(cartao.charAt(0) === "4"){
  console.log("VISA!")
  if(cartao.length == 13 || cartao.length == 16){
    checkingCard(cartao)
  }
}
else if(cartao.charAt(0) === "3"){
  console.log("AMEX!")
  if(cartao.length == 15){
    checkingCard(cartao)
  }
}
else if(cartao.charAt(0) === "6"){
  console.log("DISCOVER!")
  if(cartao.length == 16){
    checkingCard(cartao)
  }
}
else if(cartao.charAt(0) === "5"){
  console.log("MASTERCARD!")
  if(cartao.length == 16){
    checkingCard(cartao)
  }
}

else{
  console.log("Cartao invalido!!");
}

}

checkingFlag("4408041234567893")
checkingFlag("340440808656642")
checkingFlag("6114080865664927")
checkingFlag("5204408086566492")
