/*
* Logic Challenge - Tukar Besar Kecil
* Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string.
*  Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.
*/

function tukarBesarKecil(kalimat) {
    let small = 'abcdefghijklmnopqrstuvwxyz';
    let capital  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let isSymbol = false;
    let newWord = '';

    for (let i = 0; i < kalimat.length; i++) {
        for (let j = 0; j < 26; j++) {
            if (kalimat[i] === small[j]) {
                newWord += capital[j];
                break;
            } else if (kalimat[i] === capital[j]) {
                newWord += small[j];
                break;
            } else {
                if (j === 25) {
                    isSymbol = true;
                }
            }
        }

        if (isSymbol) {
            newWord += kalimat[i];
            isSymbol = false;
        }
    }

    return newWord;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"