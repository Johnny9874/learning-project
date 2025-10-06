/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/


/*
  Quand user entre en argument deux nombre dans l"appel de la fonction getSum:
    - Détermine quel est le min et le max entre a et b,
    - Initialise une variable sum à 0,
    - On utilise une boucle for pour déterminer sum:
      - Chaque itération incrémente i de 1 (i débute à min),
      - sum additionne sa propre valeur à i et dès que i est supérieur à max, on retourne sum.
*/

function getSum(a, b)
{
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = 0;
  
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  
  return sum;
}

// Key Take Away:

/*
    - Utilisation des méthodes min et max de Math.
    - Utilisation de boucle for.
*/