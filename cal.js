var suma = function() {
    var opera = document.getElementById("operador")
    opera.innerHTML ="+"
    var val1 = parseInt(document.getElementById("val1").value)
    var val2 = parseInt(document.getElementById("val2").value)
    var res = val1 + val2
    document.getElementById("res").value = res   
}
function resta() {
    var opera = document.getElementById("operador")
    opera.innerHTML ="-"
    var val1 = parseInt(document.getElementById("val1").value)
    var val2 = parseInt(document.getElementById("val2").value)
    var res = val1 - val2
    document.getElementById("res").value = res
}
var divi = function() {
    var opera = document.getElementById("operador")
    opera.innerHTML ="/"
    var val1 = parseInt(document.getElementById("val1").value)
    var val2 = parseInt(document.getElementById("val2").value)
    var res = val1 / val2
    document.getElementById("res").value = res 
}
var multi = function() {
    var opera = document.getElementById("operador")
    opera.innerHTML ="*"
    var val1 = parseInt(document.getElementById("val1").value)
    var val2 = parseInt(document.getElementById("val2").value)
    var res = val1 * val2
    document.getElementById("res").value = res 
}
