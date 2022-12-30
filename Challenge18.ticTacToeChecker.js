/*
 * Reto #18
 * TRES EN RAYA
 * Fecha publicación enunciado: 02/05/22
 * Fecha publicación resolución: 09/05/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta. O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function checker(arr) {
  arr = arr.flat();
  let bar = arr.length;
  for (let i = 0; i <= bar; i++) {
    if (arr[i] == '') {
      console.log("Game not finished yet");
      i = arr.length;
    } else if (arr[i] == arr[4] && arr[i] == arr[8] && arr[i] !== '') {
      console.log(`${arr[i]} Win`);
      i = arr.length;
    } else if (i == 0 && arr[i] == arr[1] && arr[i] == arr[2] && arr[i] !== '') {
      console.log(`${arr[i]} Win`);
      i = arr.length;
    } else if (i == 0 && arr[i] == arr[3] && arr[i] == arr[6] && arr[i] !== '') {
      console.log(`${arr[i]} Win `);
      i = arr.length;
    } else if (i == 0 && arr[i] == arr[4] && arr[i] == arr[8] && arr[i] !== '') {
      console.log(`${arr[i]} Win`);
      i = arr.length;
    } else if (i == 1 && arr[i] == arr[4] && arr[i] == arr[7] && arr[i] !== '') {
      console.log(`${arr[i]} Win`);
      i = arr.length;
    } else if (i == 2 && arr[i] == arr[5] && arr[i] == arr[8] && arr[i] !== '') {
      console.log(`${arr[i]} Win`);
      i = arr.length;
    } else if (i == 3 && arr[i] == arr[4] && arr[i] == arr[5] && arr[i] !== '') {
      console.log(`${arr[i]} Win`);
      i = arr.length;
    } else if (i == 6 && arr[i] == arr[7] && arr[i] == arr[8] && arr[i] !== '') {
      console.log(`${arr[i]} Win`);
      i = arr.length;
    } else console.log("Draw");
  }
}

checker([
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "O", "X"],
]);

checker([
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "O", "X"],
]);

checker([
  ["", "O", "X"],
  ["", "X", "O"],
  ["", "O", "X"],
]);
checker([
  ["O", "O", "O"],
  ["O", "X", "X"],
  ["O", "X", "X"],
]);

checker([
  ["X", "O", "X"],
  ["X", "X", "O"],
  ["X", "X", "X"],
]);
