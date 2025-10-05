/*

In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

Years divisible by 4 are leap years,
but years divisible by 100 are not leap years,
but years divisible by 400 are leap years.
Tested years are in range 1600 ≤ year ≤ 4000.

*/

// Ma solution sans refactorisé :

/*
/*
  Quand user met en argument year compris entre 1600 et 4000:
    - Vérifier si year est divisible par 4 ou par 400:
      - Si oui, year est un leap.
      - Si non, year est pas un leap.
*/

function isLeapYear(year) {
    if (year % 100 == 0) {
      if (year % 400 != 0 && year % 4 == 0) {
        return false;
      }
      else if (year % 400 == 0 && year % 4 == 0) {
          return true;
        }
      } 
      else if (year % 4 != 0 && year % 400 != 0) {
        return false;
      }
      else if (year % 4 == 0) {
        return true;
      }
    }


// Refactoring :

function isLeapYear(year) {
    if (year % 400 === 0) {
      return true;
    }
    
    if (year % 100 === 0) {
      return false;
    }
    
    if (year % 4 === 0) {
      return true;
    }
    
    return false;
  }

/*
  Key Take away :

  Test the exception first and then go down to general rules !
*/