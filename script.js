var btn1 = document.getElementById('task1');
var btn2 = document.getElementById('task2');
var btn3 = document.getElementById('task3');


//task 1
    function one() {
        var x = 4;
        var y = 9;
        var s = "/";

        if (s == "+") {
            y += x;
        } else if (s == "-") {
            y -= x;
        } else if (s == "*") {
            y *= x;
        } else if (s == "/") {
            y /= x;
        } else if (s == "Abs" || s == "abs" || s == "ABS") {
            y = Math.abs(y);
        } else if (s == "Mod" || s == "MOD") {
            y %= x;
        } else {
            y = x;
        }

        console.log(y);
    }

//task 2
    function two() {
        for (i = 1; i <= 100; i++) {
            // console.log(i);
            if (i % 15 == 0) {
                console.log("FizzBuzz");
            } else if (i % 5 == 0) {
                console.log("Buzz");
            } else if (i % 3 == 0) {
                console.log("Fizz");
            } else {
                console.log(i);
            }
        }
    }

//task 3
    function three() {
            var s0 = 140;
            var p = 20 / 12;
            var sn = 150;
            var f = 1;

            for (i = 0; s0 <= sn; i++) {

                if (f == 1) {
                    var percent = s0 * p / 100;
                    s0 = s0 + percent;
                    console.log("The summ is: " + s0);
                } else if (f == 2) {
                    var percent = s0 * (1 + p / 100);
                    s0 = percent;
                    console.log("The summ is: " + s0);
                } else {
                    break;
                    console.log("Ooops...");
                }
            }
            console.log("The summ will be " + s0 + " in " + i + " month.");
        }

btn1.addEventListener("click", one, false);
btn2.addEventListener("click", two, false);
btn3.addEventListener("click", three, false);