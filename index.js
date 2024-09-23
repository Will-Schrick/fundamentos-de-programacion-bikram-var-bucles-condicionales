//
//Variables
let variableSinValor;
let booleano1 = true;
let booleano2 = true;
const PI = 3.14;
const TAU = PI *2;

//Booleanos
let booleanoAnd = booleano1 && booleano2;
let booleanoNot = !booleano2;
let booleanoMix0 = booleano1 || booleano2 && (booleano1 || (!booleano1 &&! booleano2));


//Operadores
let incrementarDesp =2;
let resultadoDesp = incrementarDesp ++;
let incrementarAntes = 2; 
let resultadoAntes = ++incrementarAntes;



//Bucles
let contarHasta10_2 =0
 for (let i = 0; i <10; i++) {
    contarHasta10_2++;
    }
    console.log(contarHasta10_2);  //10


let postI = 0;
let postJ = 0;
for (let i = 0; i <11; i++) {
    postI += postJ++;     // loop 0 - both are 0, so postI(0) + postJ(0) = postI(0) results... 
                         //but then Post-++ is added adver the calc PostJ becomes 1 -- 
                         // so, after iteration 0 = postI=o and postJ=1
                         //
                         //Iteration 1-
                         //postJ is 1, so postI becomes 0 + 1 = 1. // postI += postJ++ //postI= postJ(1) + postI(0) // 1+ 0=1(postI)
                        //After incrementing, postJ becomes 2.
                        //After iteration 1: postI = 1, postJ = 2
    }

//#12
  let sumaPares = 0;
  for (let i = 0; i <10; i++) {
    if (i %2 === 0){
        sumaPares = sumaPares + i;   // Same as sumaPares += i    // Add the even 'i' to sumaPares
    }
  }
  /*
  Iterations:
i (iteration)	Condition (i % 2 === 0)	Action	sumaPares (updated)
0	0 % 2 === 0 (true)	                sumaPares = 0 + 0	0
1	1 % 2 === 0 (false)	                Skip            	0
2	2 % 2 === 0 (true)  	            sumaPares = 0 + 2	2
3	3 % 2 === 0 (false)	                Skip            	2
4	4 % 2 === 0 (true)	                sumaPares = 2 + 4	6
5	5 % 2 === 0 (false)	                Skip            	6
6	6 % 2 === 0 (true)	                sumaPares = 6 + 6	12
7	7 % 2 === 0 (false)             	Skip	            12
8	8 % 2 === 0 (true)	s               sumaPares = 12 + 8	20
9	9 % 2 === 0 (false)	                Skip	            20
*/

//Iteraciones 🏰 proyecto individual 🏰

//#13- #19

let variableValorNumerico = 4;
const  MiNombre = 'Will';
const MiNumeroFav =16;
let booleanoOr = booleano1 || booleano2;
let booleanoMix1  = (booleano1 && (TAU/2 === PI)) || (variableValorNumerico  >= MiNumeroFav);
let seisNoEsNueve  = 6 !== 9;
let booleanoMix2 = (variableValorNumerico > 0) || (variableValorNumerico < -(MiNumeroFav * TAU));
                    // 4 > 0 (True)  OR (4 < -(4*(3.14*2))) this part is 25.12
                    // 4 > 0 (True)   OR 4 <25.12 (True)

//#20-#23
let valorSuma = MiNumeroFav + variableValorNumerico;
let valorResta =MiNumeroFav - variableValorNumerico ;
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
let valorDivision = MiNumeroFav / 3;

//#24
//while bucle
let contarHasta10 = 0;
while (contarHasta10 !==10) {
    contarHasta10++;
}
console.log(contarHasta10);
/*or
let contarHasta10 = 0;
for (let i = 0; i <10; i++) {
    contarHasta10++;
    }
    console.log(contarHasta10_2)
*/

//#25
let preI = 0;
let preJ = 0;
for (let i = 0; i <11; i++) {   //I want this to loop 11 times , not 10 like earlier
    preI += ++preJ; 
 } //I want it increment preJ first, then add it to preI (differnet from earlier above)
console.log(preI);  //66
console.log(preJ);   //11

// the line preI += ++preJ; is the code inside the loop. 
//It gets executed in each iteration, and i helps control how many times the loop runs.
//Inside the loop, the line preI += ++preJ; 
//gets executed once for each iteration of the loop, controlled by the value of i.

//#26
let sumaImpares  = 0;
  for (let i = 0; i <10; i++) {   //loops 10 times
    if (i %2 !== 0){     // remainder other than 0 --- in other word...odd #
        sumaImpares = sumaImpares + i;   // Same as 'sumaImpares += i'    // Add the odd 'i' to sumaPares
    }
  }
  console.log(sumaImpares);  //25  is the answer