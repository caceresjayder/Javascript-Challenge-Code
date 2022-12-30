/*
 * Reto #23
 * MÁXIMO COMÚN DIVISOR Y MÍNIMO COMÚN MÚLTIPLO
 * Fecha publicación enunciado: 07/06/22
 * Fecha publicación resolución: 13/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
mcdMcmCalc(56, 180, "mcd");
mcdMcmCalc(56, 180, "mcm");

function mcdMcmCalc(numberOne, numberTwo, mode) {
  if (mode == "mcd") {
    console.log(`The greatest common divisor of ${numberOne} and ${numberTwo} is: ${mcdCalc(numberOne, numberTwo)}`);
  } else if (mode == "mcm") {
    console.log(`The least common multiple of ${numberOne} and ${numberTwo} is: ${mcmCalc(numberOne, numberTwo)}`);
  } else {
    console.log("Invalid mode");
  }
}

function mcdCalc(a, b) {
    do{
        let aux = b
        b = a % b
        a = aux
    }while(a,b !== 0)
    return a + b
}

function mcmCalc(a, b) {
    return a * b / mcdCalc(a,b) 
}
