function Mostrar2(){

    let num = parseFloat(document.querySelector(".numero").value);

    if(num > 0)
     document.querySelector('.result').innerHTML = (num + " é Positivo")
    else
    if(num < 0)
    document.querySelector('.result').innerHTML = (num + " é Negativo")
     else
     document.querySelector('.result').innerHTML = (num + " Nulo")
}