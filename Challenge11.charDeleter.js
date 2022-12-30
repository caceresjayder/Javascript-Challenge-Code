/*
 * Reto #11
 * ELIMINANDO CARACTERES
 * Fecha publicación enunciado: 14/03/22
 * Fecha publicación resolución: 21/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const StringOne = ["brais","moure"]
const StringTwo = ["Me gusta Java","Me gusta Kotlin"]
const StringThree = ["Usa el canal de nuestro discord (https://mouredev.com/discord) \"\uD83D\uDD01reto-semanal\" para preguntas, dudas o prestar ayuda a la comunidad",
        "Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada."]

function charDeleter(input){
    const str1 = [...input[0]]
    const str2 = [...input[1]]
    let newStr1 = ''
    let newStr2 = ''

    str1.some(letter => {
        if(!str2.includes(letter)){
            newStr1 += letter
        }
    })
    str2.some(letter => {
        if(!str1.includes(letter)){
            newStr2 += letter
        }
    })
    console.log(newStr1, newStr2)

}


charDeleter(StringOne)
charDeleter(StringTwo)
charDeleter(StringThree)