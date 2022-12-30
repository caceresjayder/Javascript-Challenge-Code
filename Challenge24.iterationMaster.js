/*
 * Reto #24
 * ITERATION MASTER
 * Fecha publicación enunciado: 13/06/22
 * Fecha publicación resolución: 20/06/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno). ¿De cuántas maneras eres capaz de hacerlo? Crea el código para cada una de ellas.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function iterationMaster(){
    let forArr = []
    let whileArr = []
    let aux = 0
    let forOfArr = []
    let forInArr = []
    let mapArr = []

    for(let i = 1; i <= 100; i++){
        forArr.push(i)
    }

    do{
        aux += 1
        whileArr.push(aux)
    }while(aux < 100)
    
    for(let int of forArr){
        forOfArr.push(int)
    }
    
    for(let int in forArr){
        forInArr.push(int)
    }
    forArr.map(int => {
        mapArr.push(int)
    })

    console.log(`For iterator based : \n ${forArr.toString()}`)
    console.log(`Do While iterator based : \n ${whileArr.toString()}`)
    console.log(`For of iterator based : \n ${forOfArr.toString()}`)
    console.log(`For in iterator based : \n ${forInArr.toString()}`)
    console.log(`Map iterator based : \n ${mapArr.toString()}`)


}

iterationMaster()