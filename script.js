//OPCIONS dels desplegables///////////////////////////////////////////////////////////////////////////////
var desplegable1 = document.getElementById("tipologia");
var desplegable2 = document.getElementById("assignatura");

var basiquesOpcions = ["Fonaments de programació",
                          "Pràctiques de programació",
                          "Administració i gestió d'organitzacions",
                          "Àlgebra", 
                          "Anàlisi matemàtica", 
                          "Lògica", 
                          "Estadística", 
                          "Treball en equip a la xarxa", 
                          "Fonaments de computadors", 
                          "Fonaments físics de la informàtica"];
                          
var obligatoriesOpcions = ["Disseny i programació orientada a objectes", 
                                "Enginyeria del programari", 
                                "Interacció persona ordinador", 
                                "Ús de bases de dades", 
                                "Disseny de bases de dades", 
                                "Administració de xarxes i sistemes operatius", 
                                "Competència comunicativa per a professionals de les TIC", 
                                "Grafs i complexitat", 
                                "Gestió de projectes", 
                                "Estructura de computadors", 
                                "Xarxes i aplicacions Internet", 
                                "Sistemes distribuïts", 
                                "Sistemes operatius", 
                                "Intel·ligència artificial", 
                                "Idioma modern I: anglès", 
                                "Idioma modern II: anglès"];
                                
var computadorsOpcions = ["Sistemes encastats",
                              "Estructura de xarxes de computadors", 
                              "Disseny de sistemes operatius", 
                              "Seguretat en xarxes de computadors", 
                              "Arquitectura de computadors", 
                              "Arquitectures de computadors avançades"];
                              
var programariOpcions = ["Disseny d'estructures de dades",	
                              "Enginyeria de requisits",	
                              "Anàlisi i disseny amb patrons",	
                              "Enginyeria del programari components i sist. distribuïts",	
                              "Projecte de desenvolupament del programari"];
                            
var computacioOpcions = ["Autòmats i gramàtiques",
                              "Compiladors", 
                              "Aprenentatge computacional", 
                              "Representació del coneixement", 
                              "Mineria de dades", 
                              "Disseny d'estructures de dades"];
                            
var tecnologiesOpcions = ["Disseny de xarxes de computadors",	
                              "Fonaments de sistemes d'informació",	
                              "Comerç electrònic",	
                              "Integració de sistemes d'informació",	
                              "Seguretat en xarxes de computadors",
                              "Arquitectura de bases de dades"];

var sistemesOpcions = ["Fonaments de sistemes d'informació",	
                            "Iniciativa emprenedora i direcció d'organitzacions",
                            "Integració de sistemes d'informació",
                            "Ús de sistemes d'informació en les organitzacions",
                            "Gestió funcional de serveis de SI/TI",
                            "Planificació i ús estratègic de SI/TI"];


var totesOpcions = basiquesOpcions.concat(obligatoriesOpcions)
                                  .concat(computadorsOpcions)
                                  .concat(programariOpcions)
                                  .concat(computacioOpcions)
                                  .concat(tecnologiesOpcions)
                                  .concat(sistemesOpcions).sort();
                     
var opcions_arr = [totesOpcions,
                    basiquesOpcions,
                    obligatoriesOpcions,
                    computadorsOpcions,
                    programariOpcions,
                    computacioOpcions,
                    tecnologiesOpcions,
                    sistemesOpcions];


//GUARDAR FORMULARIS//////////////////////////////////////////////////////////////////
//var tags_arr = ["basica", "obligatoria", "computadors", "programari", "computacio", "tecnologies", "sistemes"];

var basiquesForms = [];
var obligatoriesForms = [];
var computadorsForms = [];
var programariForms = [];
var computacioForms = [];
var tecnologiesForms = [];
var sistemesForms = [];

var aux;

for (var i = 0; i < basiquesOpcions.length; i++){
  aux = document.getElementById("basica" + String(i + 1));
  if (aux != null) basiquesForms.push([aux, basiquesOpcions[i]]);
  else break;
}

for (var i = 0; i < obligatoriesOpcions.length; i++){
  aux = document.getElementById("obligatoria" + String(i + 1));
  if (aux != null) obligatoriesForms.push([aux, obligatoriesOpcions[i]]);
  else break;
}

for (var i = 0; i < computadorsOpcions.length; i++){
  aux = document.getElementById("computadors" + String(i + 1));
  if (aux != null) computadorsForms.push([aux, computadorsOpcions[i]]);
  else break;
}

for (var i = 0; i < programariOpcions.length; i++){
  aux = document.getElementById("programari" + String(i + 1));
  if (aux != null) programariForms.push([aux, programariOpcions[i]]);
  else break;
}

for (var i = 0; i < computacioOpcions.length; i++){
  aux = document.getElementById("computacio" + String(i + 1));
  if (aux != null) computacioForms.push([aux, computacioOpcions[i]]);
  else break;
}

for (var i = 0; i < tecnologiesOpcions.length; i++){
  aux = document.getElementById("tecnologies" + String(i + 1));
  if (aux != null) tecnologiesForms.push([aux, tecnologiesOpcions[i]]);
  else break;
}

for (var i = 0; i < sistemesOpcions.length; i++){
  aux = document.getElementById("sistemes" + String(i + 1));
  if (aux != null) sistemesForms.push([aux, sistemesOpcions[i]]);
  else break;
}

var auxForms = basiquesForms.concat(obligatoriesForms)
                                  .concat(computadorsForms)
                                  .concat(programariForms)
                                  .concat(computacioForms)
                                  .concat(tecnologiesForms)
                                  .concat(sistemesForms);
      
var totsForms = [];

for (var i = 0; i < totesOpcions.length; i++){
  for (var j = 0; j < auxForms.length; j++) {
    if (totesOpcions[i] == auxForms[j][1]) {
      totsForms[i] = auxForms[j];
    }
  }
}

//totsForms = totsForms.sort((a, b) => a[1] > b[1]);
console.log("TOTS", totsForms);

var forms_arr = [totsForms,
                basiquesForms,
                obligatoriesForms,
                computadorsForms,
                programariForms,
                computacioForms,
                tecnologiesForms,
                sistemesForms];

console.log(forms_arr);

//FI FORMULARIS/////////////////////////////////////////////////////////////////////

//DESPLEGABLE 1 - Selecció tipologia--------------------------------------------
function actualitzarAssignatures(event) {

  while(desplegable2.length > 0) {
    desplegable2.remove(desplegable2.length - 1);    
  }

  var novesOpcions = opcions_arr[Number(desplegable1.value)];

  for (var i = 0; i<novesOpcions.length; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = novesOpcions[i];
    desplegable2.appendChild(opt);
  }
}

function tipologiaChange(event) {
  actualitzarAssignatures();
  triarFormulari();
}


//DESPLEGABLE 2 - Selecció assignatura i formulari--------------------------------------------
function amagarFormularis() {
  for (var i = 0; i < forms_arr.length; i++) {
    for (var j = 0; j < forms_arr[i].length; j++) {
      try {
        forms_arr[i][j][0].style.visibility = "hidden";
      } catch {
        //------
      }
    }
  }
} 

function triarFormulari() {  
  amagarFormularis();
  try {
    forms_arr[Number(desplegable1.value)][Number(desplegable2.value)][0].style.visibility = "visible";
  }catch {
    console.log("Aquest form encara no està al html");
  }
}

function desplegableChange(event) {
  triarFormulari();
}

  
//EVENTS**********************************************
desplegable1.addEventListener("change", tipologiaChange);
desplegable2.addEventListener("change", desplegableChange);

  
//Iniciar**********************************************************************
actualitzarAssignatures();
triarFormulari();
