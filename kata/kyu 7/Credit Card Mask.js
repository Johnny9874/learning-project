/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
*/


// Solution apporté :
/*
  We need to mask off all caracter but the last four characters into #
  
  Quand user rentre string dans maskify:
    - Convertir chaque caractère en #
    - Si on arrive a longueur de la chaine - 4 s'arreter
*/
function maskify(cc) {
    cc = cc.split('');
    for (let i = 0; i < cc.length - 4; i++) cc[i] = '#';
    return cc.join("");
  }

/*
  Key take away :

  - Utilisation de boucle for on-line, 
  - Utilisation de la méthode split('') pour convertir le string en tableau,
  - Utilisation de join('') pour reconvertir le tableau en string
*/