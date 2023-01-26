let array = "";

function one(){
    array = document.getElementById("screen").value = array.concat(1);
}

function two(){
    array = document.getElementById("screen").value = array.concat(2);
}

function three(){
    array = document.getElementById("screen").value = array.concat(3);
}

function four(){
    array = document.getElementById("screen").value = array.concat(4);
}

function five(){
    array = document.getElementById("screen").value = array.concat(5);
}

function six(){
    array = document.getElementById("screen").value = array.concat(6);
}

function seven(){
   array = document.getElementById("screen").value = array.concat(7);
}

function eigth(){
    array = document.getElementById("screen").value = array.concat(8);
}

function nine(){
    array = document.getElementById("screen").value = array.concat(9);
}

function cero(){
    array = document.getElementById("screen").value = array.concat(0);
}

function div(){
    array = document.getElementById("screen").value = array.concat("/")
}

function mul(){
    array = document.getElementById("screen").value = array.concat("*");
}

function sub(){
    array = document.getElementById("screen").value = array.concat("-");
}

function add(){
    array = document.getElementById("screen").value = array.concat("+");
}

function clean(){
    document.getElementById("screen").value = 0,array="",stringvalue="";
}

function same(){
    let result = eval(array);
    document.getElementById("screen").value = result;
}

function delet(){
    let valueArray = "";
    for (let i = 0; i < array.length; i++){
        valueArray = array[i];
    }
    array = array.replace(valueArray,"");
    document.getElementById("screen").value = array;
}
