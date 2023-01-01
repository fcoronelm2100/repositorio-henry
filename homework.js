// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  var string="hola"
  string=str 
  return string;
  
  
}

function suma(x, y) {
  var x1=x;
  var x2=y; 
  var sum=x1+x2;
  return sum; 
}

function resta(x, y) {
 var x1=x;
  var x2=y; 
  var rest=x1-x2;
  return rest; 
}

function multiplica(x, y) {
  var x1=x;
  var x2=y; 
  var multi=x1*x2;
  return multi; 
  
}

function divide(x, y) {
  var x1=x;
  var x2=y; 
  var div=x1/x2;
  return div; 
  
}

function sonIguales(x, y) {
  var x1=x;
  var x2=y; 
  var igualdad=x1===x2;
  return igualdad; 
  
}

function tienenMismaLongitud(str1, str2) {
  var st1=str1.length;
  var st2=str2.length;
  var iguales=st1===st2;
  return iguales;

  
}

function menosQueNoventa(num) {
  var x1=num;
  var menornov=x1<90;
  return menornov;
}

function mayorQueCincuenta(num) {
  var x1=num;
  var mayorcinc=x1>50;
  return mayorcinc;
  //15
}

function obtenerResto(x, y) {
  var x1=x;
  var x2=y;
  var resto=x1%x2;
  return resto;
  
}

function esPar(num) {
  var x=num;
  var y=x%2;
  var par=y===0;
  return par;

  
}

function esImpar(num) {
  var x=num;
  var y=x%2;
  var impar=y!==0;
  return impar;
  
}

function elevarAlCuadrado(num) {
  var x1=num;
  var numelev=x1*x1;
  return numelev; 
  //19 
}

function elevarAlCubo(num) {
  var x1=num;
  var numelevcubo=x1*x1*x1;
  return numelevcubo; 
}

function elevar(num, exponent) {
  var n=num;
  var n1=exponent;
  var elev=Math.pow(n,n1);
  return elev;
  
}

function redondearNumero(num) {
 var x1=num;
 var result=Math.round(x1);
  return result;
  //22
}

function redondearHaciaArriba(num) {
   var x1=num;
 var result=Math.ceil(x1);
  return result;
  
}

function numeroRandom() {
  var n=Math.random();
  return n;
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
}

function esPositivo(numero) {
  
var x1=numero;
if (x1>0){
  return  "Es positivo";
}if (x1<0){
  return "Es negativo";
}if (x1===0){
  return false;
}





  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
//25!!!!!  
}

function agregarSimboloExclamacion(str) {
 var que_exclama=str;
 var  palabra=que_exclama+"!";
 return palabra;




  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  
var name=nombre;
var apellido=apellido;
var completo=name+" "+apellido;
return completo;


  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  //27
}


function obtenerSaludo(nombre) {
var name=nombre;
var se_exclama=name+"!";
var saludo="Hola "+se_exclama;
return saludo;



  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
var a=alto;
var b=ancho;
var area=b*a;
return area;
  //29
}


function retornarPerimetro(lado){
  var perimetro=lado*4;
  return perimetro;
  
}


function areaDelTriangulo(base, altura){
  var b=base;
  var a=altura;
  var area=(b*a)/2
  return area;
}


function deEuroAdolar(euro){
  var e=euro;
  var d=1.20;
  var conversion=e*d;
  return conversion;

  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  //32
}


function esVocal(letra){
 
 if(letra.length > 1){
    return "Dato incorrecto"
  }
  if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return "Es vocal"
  }
  return "Dato incorrecto"


















  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje "Es vocal" . 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
