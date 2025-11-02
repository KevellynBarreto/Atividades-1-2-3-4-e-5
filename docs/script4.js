function Mostrar4(){

    var temA = parseInt(document.querySelector(".tempa").value);
    var temB = parseInt(document.querySelector(".tempb").value);
    var temC = parseInt(document.querySelector(".tempc").value);

    
    if(temA > temB && temA > temC){
         document.querySelector('.res'). innerHTML = ("3°")
    } else if(temB > temA && temA > temC){
         document.querySelector('.res'). innerHTML = ("2°")
    } else if(temC > temA && temA > temB){
        document.querySelector('.res'). innerHTML = ("2°")}
        else{
        document.querySelector('.res'). innerHTML = ("1°")
    }

    if(temB > temA && temB > temC){
    document.querySelector('.res2'). innerHTML = ("3°")
    }else if(temA > temB && temB > temC){
        document.querySelector('.res2'). innerHTML = ("2°")}
        else if(temC > temB && temB > temA){
            document.querySelector('.res2'). innerHTML = ("2°")}
        else{
        document.querySelector('.res2'). innerHTML = ("1°")
    }

    if(temC > temA && temC > temB){
    document.querySelector('.res3'). innerHTML = ("3°")
    }else if(temB > temC && temC > temA){
        document.querySelector('.res3'). innerHTML= ("2°")}
        else if(temA > temC && temC > temB){
            document.querySelector('.res3'). innerHTML = ("2°")}
        else{
        document.querySelector('.res3'). innerHTML = ("1°")
    }

}