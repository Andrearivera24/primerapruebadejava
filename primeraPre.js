
// //pedir un numero mediante el prompt y si es mayor a 1000 mostrar un alert

// let unNumero = prompt ("Dime un número")
// if (parseInt (unNumero) > 1000){
//   alert ("El número que ingresaste es mayor a 1000")
// }


// // pedir un texto mediante el promt y si es igual a "Hola" mostrar un alerta por consola

// let saludo = prompt ("Dime Hola");

// if (saludo .toLowerCase() == "hola"){
//   console.log( "Hola bienvenido");
// }
// else (
//   alert ("Por favor dime hola ")
// )

// //pedir un número por promt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert

// let otroNumero = prompt ("Dime otro número")

// if ((parseInt (otroNumero) >= 10) && (parseInt (otroNumero) <=50) ){
//   alert ("El número que ingresaste está entre 10 y 50")
// }
// else {
//   alert ("El número no está dentro de los parámetros")
// }



// Pedirle nombre y devolverle el bienvenido. 

// let suNombre = prompt ("Hello there! What´s your name");


// if (suNombre == ""){
//   alert ("Please enter your name")
// }
// else (alert ("Welcome to SpanishByHispanics "+ suNombre))

// let cara = parseInt (prompt ("Dime el número de la cara de un dado de 6 lados"));

// switch (cara) {
//   case 1:
//     console.log("La cara opuesta del dado es 6");
    
//     break;
//   case 2:
//       console.log("La cara opuesta del dado es 5");
      
//       break;
//   case 3:
//     console.log("La cara opuesta del dado es 4");
    
//     break;
//   case 4:
//       console.log("La cara opuesta del dado es 3");
      
//       break;
//   case 5:
//     console.log("La cara opuesta del dado es 2");
    
//     break; 
//   case 6:
//       console.log("La cara opuesta del dado es 1");
      
//       break;

//   default:
//     console.log("El dado solo tiene caras del 1 al 6");
//     break;
// }

// let suNombre = prompt ("Hello there! What´s your name?")

// if (suNombre == ""){
// alert("Please enter your name")
// }

// else (alert ("Welcome to SpanishByHispanics " + suNombre )

// )





//  let suNombre = prompt ("Hello there! What´s your name");

//  if (suNombre == ""){
//   alert ("Please enter your name") }
//  else (alert ("Welcome to SpanishByHispanics "+ suNombre + " let´s start by translating some words"))





//  let toBelieve= prompt ("transale the verb TO BELIEVE in spanish");

//  if (toBelieve.toLowerCase() == "creer"){
//    alert( "Good job");
  
//  }
//  else (  alert ("Keep Trying!") )


//  let toRun= prompt ("Translate the verb TO RUN in spanish"); 

//  if (toRun.toLowerCase() == correr) {
//   alert ("Excelent!")
  
//  } else (alert ("Keep trying!"))


//  let toTravel= prompt ("Translate the verb TO TRAVEL in spanish"); 

//  if (toTravel.toLowerCase() == viajar) {
//   alert ("Excelent!")
  
//  } else (alert ("Keep trying!"))



    

    let suNombre = prompt ("Hello there! What´s your name");

    alert ("Welcome to SpanishByHispanics "+ suNombre + " let´s start by translating some verbs from English to Spanish!")


    let pClave = prompt("Enter *Yes*  if you´re ready");
     if(pClave.toLowerCase() == "yes"){
    ejecutarTraducciones();
     }else{

    alert("Thank You! see you next time.");
}




function ejecutarTraducciones(){

    let toBe1= prompt ("Transalte the verb *To Be* as a TEMPORARY STATE in spanish");

    if (toBe1.toLowerCase() == "estar")
    {
        alert( "Good job!");
  
    } else { alert ("Keep Trying! The right answer is *Estar*")}


    let toLearn= prompt ("Translate the verb *To Learn* in spanish"); 

        if (toLearn.toLowerCase() == "aprender") {
            alert ("Excelent!")
  
            } else {alert ("Keep trying! The right answer is *Aprender*")}



 let toLive= prompt ("Translate the verb *To Live* in spanish"); 

   if (toLive.toLowerCase() == "vivir") {
  alert ("Excelent!")
  
   } else {alert ("Keep trying! The right answer is *Vivir*" )}



 let toUnderstand = prompt ("Translate the verb *To Understand* in spanish")

   if (toUnderstand.toLowerCase() == "entender" ){
  alert ("Such a nice job! " + suNombre)

   } else { alert ("Keep trying! The right answer is *Entender*")}


 let toRepeat= prompt ("Translate the verb *To Repeat* in spanish"); 

   if (toRepeat.toLowerCase() == "repetir") {
   alert ("Tha´s correct!")
  
   } else {alert ("Keep trying! The right answer is *Repetir*")}

 let toListen= prompt ("Translate the verb *To Listen* in spanish"); 

   if (toListen.toLowerCase() == "escuchar") {
   alert ("Such a nice job!")
  
   } else (alert ("Keep trying! The right answer is *Escuchar*"))  


let toBe2= prompt ("Translate the verb *to Be* as a PERMANENT STATE in spanish"); 

   if (toBe2.toLowerCase() == "ser") {
   alert ("Excelent!")
  
   } else {alert ("Keep trying! The right answer is *Ser*")}
   
   
let like= prompt ("Translate the expression *I like to ... * in spanish"); 

   if (like.toLowerCase() == "me gusta") {
   alert ("You´re doing it great!")
  
   } else {alert ("Keep trying! The right answer is *Me gusta ...*")}


let toWakeup= prompt ("Translate the expression *To Wake Up* in spanish"); 

   if ( (toWakeup.toLowerCase() == "despertar") || (toWakeup.toLowerCase() == "despertarse")){

   alert ("Well done!")
  
   } else {alert ("Keep trying! The right answer is *Despertar* o *Despertarse*")}  

}

alert ("You did an excelent job " + suNombre + ", Keep going!")


//------------------------------------algoritmo para asignar 3 clases en la semana -----

let agendarClase = prompt ("Enter *Yes* if you Would like to book a class with any of our teachers?")
if (agendarClase.toLowerCase() == "yes"){
  for (let i= 1; i <= 3; i++) {
    let profesor = prompt ("Enter the name of the teacher that you want to book with in the day : "+  i.toString ());
    alert ("You have the day N° " + i.toString() + " With " + profesor + ". Thank you!" );
    }  ;
} else {alert ("Thanks for participating")} 





















///------- While------tiene que estar armada de modo de en algun momento se corte
//todo ciclo for se puede convertir en sun ciclo while. 



