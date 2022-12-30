/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function area(polygonType, a, b){
    if(polygonType.toLowerCase() == 'triangle' ){
        console.log(`This ${polygonType} have an area of ${(a * b) / 2}`)
    }
    else if(polygonType.toLowerCase() == 'rectangle' ){
        console.log(`This ${polygonType} have an area of ${(a * b)}`)
    }
    else if(polygonType.toLowerCase() == 'square' ){
        console.log(`This ${polygonType} have an area of ${(a * a)} m^2`)
    }
    else{
        console.log('invalid polygon type')
    }
    }
area( 'Triangle', 10.0, 5.0)
area('Rectangle',5.0, 7.0)
area('square', 4.0)
area('star', 5.0, 5.0)