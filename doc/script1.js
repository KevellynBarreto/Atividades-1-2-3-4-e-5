function Mostrar1(){

var tab = parseInt(document.querySelector('.caixa').value)
document.querySelector('.tata'). innerHTML = ""

for(caixa = 1; caixa <= 10; caixa++){
    var resultado = tab * caixa;
    document.querySelector('.tata').innerHTML += `${tab} x ${caixa} = ${resultado}<br>`
}

}

  


