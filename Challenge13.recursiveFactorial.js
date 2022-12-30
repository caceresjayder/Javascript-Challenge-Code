/*
 * Reto #13
 * FACTORIAL RECURSIVO
 * Fecha publicación enunciado: 28/03/22
 * Fecha publicación resolución: 04/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

Factorial(0);
Factorial(7);
Factorial(10)
Factorial(1)
Factorial(-1)

function Factorial(number) {
    let factorial = 1
  if (number < 0) {
    console.log('that number do not have factorial');
  } else if (number <= 1) {
    return 1;
  }
  do{
    factorial = factorial * number
    number--
    console.log(factorial)
  }while( number > 1)
  console.log('\n')
}
