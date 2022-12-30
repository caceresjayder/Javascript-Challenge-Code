/*
 * Reto #14
 * ¿ES UN NÚMERO DE ARMSTRONG?
 * Fecha publicación enunciado: 04/04/22
 * Fecha publicación resolución: 11/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe una función que calcule si un número dado es un número de Amstrong (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información al respecto.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

isArmstrong(371)
isArmstrong(-371)
isArmstrong(372)
isArmstrong(0)

function isArmstrong(number){
    let aux = [...number.toString()]
    let n = 0
    if(aux.includes('-')){
        console.log('The negatives number are not narcissistic')
    }else{
    for(let i = 0; i < aux.length; i++){
        n += aux[i] ** aux.length
    }
    n == number ? console.log(`The number : ${number} is more narcissistic than Donald Trump`) : console.log(`The number : ${number} is not Narcissistic leave alone`)
}
}
