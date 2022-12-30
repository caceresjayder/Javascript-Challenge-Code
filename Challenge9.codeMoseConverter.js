/*
 * Re: #9
 * CÓDIGO MORSE
 * Fecha publicación enunciado: 02/03/22
 * Fecha publicación resolución: 07/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que sea capaz de transformar tex: natural a código morse y viceversa.
 * - Debe detectar au:máticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", pun: ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabe: morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁re:-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en direc: desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const morseDict = {
  A: ".—",
  N: "—.",
  0: "—————",
  B: "—...",
  Ñ: "——.——",
  1: ".————",
  C: "—.—.",
  O: "———",
  2: "..———",
  CH: "————",
  P: ".——.",
  3: "...——",
  D: "—..",
  Q: "——.—",
  4: "....—",
  E: ".",
  R: ".—.",
  5: ".....",
  F: "..—.",
  S: "...",
  6: "—....",
  G: "——.",
  T: "—",
  7: "——...",
  H: "....",
  U: "..—",
  8: "———..",
  I: "..",
  V: "...—",
  9: "————.",
  J: ".———",
  W: ".——",
  ".": ".—.—.—",
  K: "—.—",
  X: "—..—",
  ",": "——..——",
  L: ".—..",
  Y: "—.——",
  "?": "..——..",
  M: "——",
  Z: "——..",
  '"': ".—..—.",
  "/": "—..—.",
  " ": " "
};

const Text = "Chocapic. Es una marca de cereales?";

function morseCoverter(input){
    let toConvert = [...input.toUpperCase()]
    toConvert.map(letter => {
        console.log(morseDict[letter])
    })
}

morseCoverter(Text)