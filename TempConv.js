"use strict"

function calculate() {

        var result;
        var original = document.getElementById("original");
        var temp = original.value;
        var regexp = /[+-]?[0-9]+(\.[0-9]+)?[cfCF]/;

        var m = temp.match(regexp);
        m = m[0];       

        if (m) {
                var c = m.lenght;
                var num = m.substr(0, m.length - 1);
                var type = m.substr(m.length - 1, 1);
                num = parseFloat(num);
                type.toUpperCase();
                
                if(type == 'C') {
                        result = (num * 9 / 5) + 32;
                        result += 'F';
                }
                else {
                        result = (num - 32) * 5 / 9;
                        result += 'C';
                }

                converted.innerHTML = result;

        }
        else {
                converted.innerHTML = "ERROR! Try something like '-4.2' instead";
        }
}