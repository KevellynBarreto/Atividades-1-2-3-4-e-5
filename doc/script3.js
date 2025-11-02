function Mostrar3(){

    let num1 = parseFloat(document.querySelector(".val").value);
    let divisores=0;

    for(let count=1 ; count<=num1 ; count++)
    if(num1 % count == 0)
           divisores++;
    if(divisores==2)  
           document.querySelector('.primo'). innerHTML = ("SIM")  
    else      
           document.querySelector('.primo'). innerHTML = ("NÃO")  
}