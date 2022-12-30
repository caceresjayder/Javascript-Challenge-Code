/*
 * Reto #15
 * ¿CUÁNTOS DÍAS?
 * Fecha publicación enunciado: 11/04/22
 * Fecha publicación resolución: 18/04/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
const monthsDict = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

function DaysBetween(date1, date2) {
  const dataPattern = /^\d{2}\/\d{1,2}\/\d{4}$/;
  const year = 2;
  const month = 1;
  const day = 0;
  let daysCount = 0;
    try{if (date1.match(dataPattern) !== null && date2.match(dataPattern) !== null) {
    let date1Reg = date1.split("/");
    let date2Reg = date2.split("/");
    
    ////////same year

    if (date1Reg[year] == date2Reg[year]) {
      ////////////// same year,same month
      if (date1Reg[month] == date2Reg[month]) {
        ///////////same year, same month, same day
        if (date1Reg[day] == date2Reg[day]) {
          console.log(`${daysCount} days has passed`);
          /////////////same year, same month, day1 higher than day2
        } else if (date1Reg[day] > date2Reg[day]) {
          daysCount = date1Reg[day] - date2Reg[day];
          console.log(`${daysCount} days has passed`);
          /////////////same year, same month, day1 lower than day2
        } else if (date1Reg[day] < date2Reg[day]) {
          daysCount = date2Reg[day] - date1Reg[day];
          console.log(`${daysCount} days will pass`);
        }
        /////////////same year, month1 higher than month2///////////////////////////////
      } else if (date1Reg[month] > date2Reg[month]) {
        /////////same day
        if (date1Reg[day] == date2Reg[day]) {
          for (let i = date1Reg[month] - 1; i > date2Reg[month] - 1; i--) {
            daysCount += monthsDict[i];
          }
          console.log(`${daysCount} days has passed`);
          ///////////day1 higher than day2
        } else if (date1Reg[day] > date2Reg[day]) {
          for (let i = date1Reg[month] - 1; i > date2Reg[month] - 1; i--) {
            daysCount += monthsDict[i];
          }
          daysCount += date1Reg[day] - date2Reg[day];
          console.log(`${daysCount} days has passed`);
          /////////////day1 lower than day2
        } else if (date1Reg[day] < date2Reg[day]) {
          for (let i = date1Reg[month] - 1; i > date2Reg[month] - 1; i--) {
            daysCount += monthsDict[i];
          }
          daysCount -= date2Reg[day] - date1Reg[day];
          console.log(`${daysCount} days has passed`);
        }
        /////////////////same year, month1 lower than month2////////////////////////////////////////
      } else if (date1Reg[month] < date2Reg[month]) {
        ///////////////same day
        if (date1Reg[day] == date2Reg[day]) {
          for (let i = parseInt(date1Reg[month]); i < date2Reg[month]; i++) {
            daysCount += monthsDict[i];
          }
          console.log(`${daysCount} days will pass`);
          //////////////day1 higher than day2
        } else if (date1Reg[day] > date2Reg[day]) {
          for (let i = parseInt(date1Reg[month]); i < date2Reg[month]; i++) {
            daysCount += monthsDict[i];
          }
          daysCount -= date1Reg[day] - date2Reg[day];
          console.log(`${daysCount} days will pass`);
          ///////////day1 lower than day2
        } else if (date1Reg[day] < date2Reg[day]) {
          for (let i = parseInt(date1Reg[month]); i < date2Reg[month]; i++) {
            daysCount += monthsDict[i];
          }
          daysCount += date2Reg[day] - date1Reg[day];
          console.log(`${daysCount} days will pass`);
        }
      }
    }
    ////////year1 higher than year2
    else if (date1Reg[year] > date2Reg[year]) {
      for (let i = date1Reg[year] - 1; i > date2Reg[year] - 1; i--) {
        daysCount += 365;
      }
      ////////////// same year,same month
      if (date1Reg[month] == date2Reg[month]) {
        ///////////same year, same month, same day
        if (date1Reg[day] == date2Reg[day]) {
          console.log(` ${daysCount}  days has passed`);
          /////////////same year, same month, day1 higher than day2
        } else if (date1Reg[day] > date2Reg[day]) {
          daysCount -= date1Reg[day] - date2Reg[day];
          console.log(` ${daysCount}  days has passed`);
          /////////////same year, same month, day1 lower than day2
        } else if (date1Reg[day] < date2Reg[day]) {
          daysCount += date2Reg[day] - date1Reg[day];
          console.log(` ${daysCount}  days has passed`);
        }
        /////////////same year, month1 higher than month2///////////////////////////////
      } 
      
      /////////////////////////////////////////////////////////////////
      else if (date1Reg[month] > date2Reg[month]) {
        /////////same day
        if (date1Reg[day] == date2Reg[day]) {
          for (let i = date1Reg[month] - 1; i > date2Reg[month] - 1; i--) {
            daysCount -= monthsDict[i];
          }
          console.log(` ${daysCount}  days has passed`);
          ///////////day1 higher than day2
        } 
        
        else if (date1Reg[day] > date2Reg[day]) {
          for (let i = date1Reg[month] - 1; i > date2Reg[month] - 1; i--) {
            daysCount -= monthsDict[i];
          }
          daysCount += date1Reg[day] - date2Reg[day];
          console.log(` ${daysCount}  days has passed`);
          /////////////day1 lower than day2
        } 
        
        else if (date1Reg[day] < date2Reg[day]) {
          for (let i = date1Reg[month] - 1; i > date2Reg[month] - 1; i--) {
            daysCount -= monthsDict[i];
          }
          daysCount -= date2Reg[day] - date1Reg[day];
          console.log(` ${daysCount}  days has passed`);
        }
        /////////////////same year, month1 lower than month2////////////////////////////////////////
      } 
      
      else if (date1Reg[month] < date2Reg[month]) {
        ///////////////same day
        if (date1Reg[day] == date2Reg[day]) {
          for (let i = parseInt(date1Reg[month]); i < date2Reg[month]; i++) {
            daysCount += monthsDict[i];
          }
          console.log(` ${daysCount}  days has passed`);
          //////////////day1 higher than day2
        } else if (date1Reg[day] > date2Reg[day]) {
          for (let i = parseInt(date1Reg[month]); i < date2Reg[month]; i++) {
            daysCount += monthsDict[i];
          }
          daysCount -= date1Reg[day] - date2Reg[day];
          console.log(` ${daysCount}  days has passed`);
          ///////////day1 lower than day2
        } else if (date1Reg[day] < date2Reg[day]) {
          for (let i = parseInt(date1Reg[month]); i < date2Reg[month]; i++) {
            daysCount += monthsDict[i];
          }
          daysCount += date2Reg[day] - date1Reg[day];
          console.log(` ${daysCount}  days has passed`);
        }
      }
    } 
    else if (date1Reg[year] < date2Reg[year]) {
      for (let i = date1Reg[year]; i < date2Reg[year]; i++) {
        daysCount += 365;
      }
      ////////////// same month
      if (date1Reg[month] == date2Reg[month]) {
        /////////// same month, same day
        if (date1Reg[day] == date2Reg[day]) {
          console.log(` ${daysCount}  days will pass`);
          ///////////// same month, day1 higher than day2
        } else if (date1Reg[day] > date2Reg[day]) {
          daysCount -= date1Reg[day] - date2Reg[day];
          console.log(` ${daysCount}  days will pass`);
          ///////////// same month, day1 lower than day2
        } else if (date1Reg[day] < date2Reg[day]) {
          daysCount += date2Reg[day] - date1Reg[day];
          console.log(` ${daysCount}  days will pass`);
        }
        /////////////month1 higher than month2///////////////////////////////
      } else if (date1Reg[month] > date2Reg[month]) {
        /////////same day
        if (date1Reg[day] == date2Reg[day]) {
          for (let i = date1Reg[month] - 1; i > date2Reg[month] - 1; i--) {
            daysCount -= monthsDict[i];
          }
          console.log(` ${daysCount}  days will pass`);
          ///////////day1 higher than day2
        } 
        
        else if (date1Reg[day] > date2Reg[day]) {
          for (let i = date1Reg[month] - 1; i > date2Reg[month] - 1; i--) {
            daysCount -= monthsDict[i];
          }
          daysCount += date1Reg[day] - date2Reg[day];
          console.log(` ${daysCount}  days will pass`);
          /////////////day1 lower than day2
        } 
        
        else if (date1Reg[day] < date2Reg[day]) {
          for (let i = date1Reg[month] - 1; i > date2Reg[month] - 1; i--) {
            daysCount -= monthsDict[i];
          }
          daysCount -= date2Reg[day] - date1Reg[day];
          console.log(` ${daysCount}  days will pass`);
        }
        /////////////////same year, month1 lower than month2////////////////////////////////////////
      } 
      
      else if (date1Reg[month] < date2Reg[month]) {
        ///////////////same day
        if (date1Reg[day] == date2Reg[day]) {
          for (let i = parseInt(date1Reg[month]); i < date2Reg[month]; i++) {
            daysCount += monthsDict[i];
          }
          console.log(` ${daysCount}  days will pass`);
          //////////////day1 higher than day2
        } else if (date1Reg[day] > date2Reg[day]) {
          for (let i = parseInt(date1Reg[month]); i < date2Reg[month]; i++) {
            daysCount += monthsDict[i];
          }
          daysCount -= date1Reg[day] - date2Reg[day];
          console.log(` ${daysCount}  days will pass`);
          ///////////day1 lower than day2
        } else if (date1Reg[day] < date2Reg[day]) {
          for (let i = parseInt(date1Reg[month]); i < date2Reg[month]; i++) {
            daysCount += monthsDict[i];
          }
          daysCount += date2Reg[day] - date1Reg[day];
          console.log(` ${daysCount}  days will pass`);
        }
      }
    }}else{throw new Error(`${date1} ${date2} Invalid Format`)}}catch(err){console.log(err)}
}

DaysBetween("18/05/2022", "29/05/2022");
DaysBetween("18/5/2022", "29/04/2022");
DaysBetween("mouredev", "29/04/2022");
