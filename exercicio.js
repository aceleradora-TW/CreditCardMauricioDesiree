

function check_card(cartao){

total1 = "";
total2 = 0
numero1 = 0
total3 = 0

for (let i=0; i <= 18; i++){

if(cartao.charAt(i)!= " "){

  if (i == 0 || i == 2 || i == 5 || i ==7 || i == 10 || i == 12 || i == 15 || i == 17){
     numero1 = (cartao.charAt(i) * 2).toString()
     total1 = total1 + numero1
   }

  else{
    numero2 = parseInt (cartao.charAt(i))
    total2 = total2 + numero2

  }}}

for(j=0;j <= 10;j++){
  numero3 = parseInt(total1.charAt(j))
  total3 =  total3 + (numero3)
}

  if ((total3 + total2) % 10 == 0){
    console.log(cartao)
    console.log(total3+total2)
    console.log("Cartão válido\n")
  }
  else {
    console.log(cartao)
    console.log(total3+total2)
    console.log("Cartão inválido\n")
  }
}

console.log("\n---- Validar cartao ----\n")
check_card("4408 0412 3456 7893") //Teste cartao valido
console.log("------------------------")
check_card("4417 1234 5678 9112") //Teste cartao invalido
