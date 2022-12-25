// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1;

// Crea una variable booleana:
const nuevoBool = true;

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
  var cadena = str;
  return cadena;
  
}

function suma(x, y) {
 var suma= x+y;
 return suma;

  
}

function resta(x, y) {
 var resta =x-y;
 return resta;
}

function multiplica(x, y) {
  var producto =x*y; 
  return producto;
}
function divide(x, y) {
 var dividsion = x/y;
 return dividsion;
  
}

function sonIguales(x, y) {
  var x,y;
  if (x===y){
    return true;
   
  }
  return false 
 
  }
  


function tienenMismaLongitud(str1, str2) {
  var longitud1=str1.length;
  var longitud2=str2.length; 
  if (str1===str2){
    return true;

  }
  return false 
}

function menosQueNoventa(num) {
  var number = num;
  if (number<90){
    return true;
  }
  return false 
  
}

function mayorQueCincuenta(num) {
  var namber=num;
  if (num>50){
    return true;
  
  }
  return false
}

function obtenerResto(x, y) {
  var resto=x%y;
  return resto;
  
}


function esPar(num) {
var par=num%2;
 
if (par===0){
  return true;
  }
return false;
  
}

function esImpar(num) {
  var nopar=num%2;
  if(nopar>0.1){
    return true;
  }
  return false;
  
}

function elevarAlCuadrado(num) {
  var cuad=num*num;
  return cuad;

}

function elevarAlCubo(num) {
  var cubo= (num*num*num);
  return cubo;
  
}

function elevar(num, exponent) {
  var elev= Math.pow (num,exponent);
  return elev;
  
}

function redondearNumero(num) {
  var redondeo= Math.round(num);
  return redondeo;
}

function redondearHaciaArriba(num) {
 var proxentero=Math.ceil(num);
 return proxentero;
}


function numeroRandom() {
var random=Math.random()

return random;
  
}

function esPositivo(numero) {
  if(numero>0){
    return "Es positivo";
    
    
    
  }
  if (numero<0){
    return "Es negativo";
  }
  
  return "cero es neutro ";
  
}

function agregarSimboloExclamacion(str) {
 var exclam=str+"!"
 return exclam;
}

function combinarNombres(nombre, apellido) {
  var completo= nombre+" "+apellido"!";
  return completo;
}

function obtenerSaludo(nombre) {
 var saludo= "hola "+nombre;
 return saludo;
  
}

function obtenerAreaRectangulo(alto, ancho) {
var area=alto*ancho;
return area;
  
}


function retornarPerimetro(lado){
  var perimetro=lado*4;
  return perimetro;
}


function areaDelTriangulo(base, altura){
  var area= (base*altura)/2;
  return area;

}


function deEuroAdolar(euro){
  var conversion=1.20*euro;
  return conversion;
  
}


function esVocal(letra){
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
   return "Es vocal";
   } else if (letra.length !== 1) {
   return 'Dato incorrecto'
   }
   return "no es vocal"
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
