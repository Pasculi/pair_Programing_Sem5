//Ejercicio 1

function sumaDeDivisores(numero) {
  let suma = 0;
  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) { //Comprobamos que la división sea exacta, de ser así se guarda en la variable suma
      suma = suma + i;
    }
  }
  return suma;//Retornamos la suma de los divisores distintos a numero
}

//Ejercicio 2

function numerosAmigos(num) {
  const listaDeAmigos = [];//Arreglo vacio para guardar nuestros numeros amigos
  let existente = 0;//Variable para almacenar un numero dado, para verificar luego su existencia

  for (let i = 0; i < num; i++) {
    if (existente !== i) { //Aqui comprobamos la existencia de un numero para evitar repetirlo
      let esAmigo = sumaDeDivisores(i);
      let verifica = sumaDeDivisores(esAmigo);
      let confirma = i === verifica ? true : false;
      if (confirma) {
        if (esAmigo !== verifica) {
          listaDeAmigos.push(`${verifica}, ${esAmigo}`);//Se guarda en el arreglo listaDeAmigos
          existente = esAmigo;//Aqui se asigna el nuevo amigo para luego comprobar su existencia
        }
      }
    }
  }
  return listaDeAmigos;
}
let number = parseInt(prompt("Ingrese un número, para calcular las parejas de números amigos menores o iguales que el numero ingresado"),10)
let resultado = numerosAmigos(number);
alert(`Los numero pares de amigos son: ${resultado.join(' || ')}`);