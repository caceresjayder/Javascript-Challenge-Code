/*
 * Reto #12
 * ¿ES UN PALÍNDROMO?
 * Fecha publicación enunciado: 21/03/22
 * Fecha publicación resolución: 28/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const StringOne = "Ana lleva al oso la avellana."
const StringTwo = "Adivina ya te opina, ya ni miles origina, ya ni cetro me domina, ya ni monarcas, a repaso ni mulato carreta, acaso nicotina, ya ni cita vecino, anima cocina, pedazo gallina, cedazo terso nos retoza de canilla goza, de pánico camina, ónice vaticina, ya ni tocino saca, a terracota luminosa pera, sacra nómina y ánimo de mortecina, ya ni giros elimina, ya ni poeta, ya ni vida"
const StringThree = "¿Qué os ha parecido el reto?"

function Regex(input){
    let text = input.toLowerCase()
    text = text.replace(/[áàäâå]/, 'a');
      text = text.replace(/[éèëê]/, 'e');
      text = text.replace(/[íìïî]/, 'i');
      text = text.replace(/[óòöô]/, 'o');
      text = text.replace(/[úùüû]/, 'u');
      text = text.replace(/[ýÿ]/, 'y');
      text = text.replace(/[ñ]/, 'n');
      text = text.replace(/[ç]/, 'c');
      text = text.replace(/['"]/, '');
      text = text.replace(/[^a-zA-Z0-9-]/, ''); 
      text = text.replace(/\s+/, '-');
      text = text.replace(/' '/, '-');
      text = text.replace(/(_)$/, '');
      text = text.replace(/^(_)/, '');
      return text
}

function isPalindrome(input){
     let str = Regex(input)
     str = str.replace(/[., ¿?^-]/g, '')
     str = Regex(str)
     strReversed = ''
     for(let i = str.length -1; i>=0; i-- ){
        strReversed += str[i]
     }
     str === strReversed ? console.log("Is palindrome") : console.log("Is not palindrome")
     console.log(str, strReversed,'\n')
}

isPalindrome(StringOne)
isPalindrome(StringTwo)
isPalindrome(StringThree)




