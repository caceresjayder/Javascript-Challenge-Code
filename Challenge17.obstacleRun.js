/*
 * Reto #17
 * LA CARRERA DE OBSTÁCULOS
 * Fecha publicación enunciado: 25/04/22
 * Fecha publicación resolución: 02/05/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo) o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla) será correcto y no
 *        variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
const dict = {
    "run":"_",
    "jump":"|"
}


function checkRace(arr, str){
    let aux = []
    let result = ''
    let distance = 0

    arr.map(item => {
        aux.push(item.toLowerCase())
    })
    arr = aux
    arr.length > str.length ? distance = arr.length : distance = str.length
        for(let i = 0; i < distance; i++){
            if(dict[arr[i]] == str[i]){
                result += `${str[i]}`
            }
            else if(dict[arr[i]] !== str[i] && arr[i] == "jump"){
                result += "x"
            }
            else if(dict[arr[i]] !== str[i] && arr[i] == "run"){
                result += '/'
            }
            else if(arr[i] == null && str[i] == "_"){
                result += "x"
            }
            else if(arr[i] == null && str[i] == "|"){
                result += '/'
            }
        }
        if(result.includes('x') || result.includes('/')){
            console.log(`${result} False`)
        }else console.log(`${result} True`) 
    }
    

checkRace(["RUN", "JUMP", "RUN", "JUMP", "RUN"], "_|_|_")
checkRace(["RUN", "RUN", "RUN", "JUMP", "RUN"], "_|_|_")
checkRace(["RUN", "RUN", "JUMP", "JUMP", "RUN"], "_|_|_")
checkRace(["RUN", "RUN", "JUMP", "JUMP", "RUN"], "_|_|_|_")
checkRace(["RUN", "JUMP", "RUN", "JUMP"], "_|_|_")
checkRace(["RUN", "JUMP", "RUN", "JUMP", "RUN", "JUMP", "RUN"], "_|_|_")
checkRace(["JUMP", "JUMP", "JUMP", "JUMP", "JUMP"], "|||||")
checkRace(["JUMP", "JUMP", "JUMP", "JUMP", "JUMP"], "||?||")