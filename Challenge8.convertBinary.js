/*
 * Reto #8
 * DECIMAL A BINARIO
 * Fecha publicación enunciado: 18/02/22
 * Fecha publicación resolución: 02/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function convertBinary(number){
    let binary = ''
    let binaryCorrector = ''
    do{
        let aux = Math.floor(number) % 2
        number /= 2
        binary += String(aux)
    }while( Math.floor(number) !== 0)
    binary = [...binary]
    for(let i = binary.length -1; i >= 0; i--){
        binaryCorrector += binary[i]
    }
    console.log(binaryCorrector)
}

convertBinary(45)
convertBinary(10)
convertBinary(25)
convertBinary(398)
