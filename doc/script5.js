function Mostrar5(){

    var n1 = parseInt(document.querySelector('.id1').value)
    var n2 = parseInt(document.querySelector('.id2').value)
    var n3 = parseInt(document.querySelector('.id3').value)
    var cont = n1 - (n2 + n3)
    var viz = [cont]
    viz.sort((a, b) => b - a)
    document.querySelector('.idades').innerHTML = viz + " Anos, tem o seu filho mais velho."

}