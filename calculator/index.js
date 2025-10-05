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

Quand user appuie sur un autre boutton de chiffre (ex : 2):
    - Ajout de 2 a displayValue
    - Affiche displayValue dans display
    - Si user appuie sur un autre boutton de chiffre (ex : 3):
        - Ajout de 3 a displayValue
        - Affiche displayValue dans display (displayValue = 23)

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
let displayValue = "";

document.getElementById('number_buttons').onclick = () => {
    console.log('hi');
}