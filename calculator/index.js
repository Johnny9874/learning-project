/*
Quand user appuie sur un bouton de chiffre(ex : 1):
    - Ajout de 1 a displayValue,
    - Affiche displayValue dans display
    - Si user appuie sur un autre boutton de chiffre (ex : 3):
        - Ajout de 3 a displayValue
        - Affiche displayValue dans display (displayValue = 13)

Quand user appuie sur un bouton d'opération (ex : +):
    - Stock l'opérateur dans Operator
    - Stock la valeur de displayValue dans firstNumber
    - Reset displayValue

Quand user appuie sur = :
    - Convertie firstNumber en nombre
    - Convertie displayValue en nombre
    - Selon operator :
        - Si + : additionne firstNumber et displayValue
        - Si - : soustrait displayValue de firstNumber
        - Si * : multiplie firstNumber et displayValue
        - Si / : divise firstNumber par displayValue
    - Affiche le résultat dans display
    - Reset displayValue, firstNumber, operator
*/

const equalsButton = document.getElementById('equals');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.getElementById("clear");

let displayValue = '0';
let operator = null;
let firstNumber = null;

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const number = button.textContent;

        if (displayValue == '0') {
            displayValue = number;
        } else {
            displayValue += number;
        }

        display.textContent = displayValue;
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        firstNumber = displayValue;       
        displayValue = "";
    })
})

equalsButton.addEventListener("click", () => {
    firstNumber = parseFloat(firstNumber);
    displayValue = parseFloat(displayValue);
    if (operator == "+") {
        let result = firstNumber + displayValue;
        display.textContent = result;
        displayValue = result;
    }
    else if (operator == "-") {
        let result = firstNumber - displayValue;
        display.textContent = result;
        displayValue = result;
    }
    else if (operator == "/") {
        let result = firstNumber / displayValue;
        display.textContent = result.toFixed(2);
        displayValue = result;
    }
    else if (operator == "*") {
        let result = firstNumber * displayValue;
        display.textContent = result;
        displayValue = result;
    }

    firstNumber = null;
    operator = null; 
})

clearButton.addEventListener("click", () => {
    displayValue = "0";
    display.textContent = "0";
    operator = null;
    firstNumber = null;
}) 