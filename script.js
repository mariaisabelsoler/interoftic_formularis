
//getElementById per guardar un element html en una variable i poder accedir des de JavaScript
var desplegable = document.getElementById("desplegable");

var formulari1 = document.getElementById("1");
var formulari2 = document.getElementById("2");
var formulari3 = document.getElementById("3");
var formulari4 = document.getElementById("4");

var formularis_arr = [formulari1, formulari2, formulari3, formulari4];

//**************************************************************************************************************************

function triarFormulari(){
  for (var i = 0; i < formularis_arr.length; i++){
    formularis_arr[i].style.visibility = "hidden";
  }
  formularis_arr[Number(desplegable.value)-1].style.visibility = "visible";
  console.log(desplegable.value, Number(desplegable.value)-1);
}

function desplegableChange(event) {
  triarFormulari();
}

//EVENTS**********************************************

desplegable.addEventListener("change", desplegableChange);

triarFormulari();
