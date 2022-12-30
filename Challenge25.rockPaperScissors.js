/*
 * Reto #25
 * PIEDRA, PAPEL, TIJERA
 * Fecha publicación enunciado: 20/06/22
 * Fecha publicación resolución: 27/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
rockScissorsPaper(['ROCK', 'ROCK'])
rockScissorsPaper(['ROCK', 'SCISSORS'])
rockScissorsPaper(['PAPER', 'SCISSORS'])
rockScissorsPaper([
        ['ROCK', 'ROCK'],
        ['SCISSORS', 'SCISSORS'],
        ['PAPER', 'PAPER']])
rockScissorsPaper([
        ['ROCK', 'SCISSORS'],
        ['SCISSORS', 'PAPER'],
        ['SCISSORS', 'ROCK']])
rockScissorsPaper([
        ['ROCK', 'PAPER'],
        ['SCISSORS', 'ROCK'],
        ['PAPER', 'SCISSORS']])


function checker(a, b){
    let bar = [0,0]
    if(a == "ROCK" && b == "SCISSORS" && b !== "ROCK"){bar[0] += 1}
    else if(a == "PAPER" && b == "ROCK" && b !== "PAPER"){bar[0] += 1}
    else if(a == "SCISSORS" && b == "ROCK" && b !== "SCISSORS"){bar[0] += 1}
    else if(a == b){
        null
    }
    else{
        bar[1] += 1
    }
    return bar
    


}
function rockScissorsPaper(arr){
    arr = arr.flat()
    let foo = [1,3,5]
    let pOne = 0
    let pTwo = 0
    for(let int of foo){
        let [a,b] = checker(arr[int-1],arr[int])
        pOne += a
        pTwo += b
    }
    if(pOne > pTwo){
        console.log("Player 1 Win")
    }
    else if(pOne == pTwo){
        console.log("Tie")
    }
    else{
        console.log("Player 2 Win")
    }

}