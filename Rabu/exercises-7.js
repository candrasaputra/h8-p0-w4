/*
* Logic Challenge - Mengurutkan Abjad
* Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string.
* Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z.
* Contohnya, halo akan menjadi ahlo.
* Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
*/

function urutkanAbjad(str) {
    let alfabet = 'abcdefghijklmnopqrstuvwxyz';
    let strNumber = [];
    let newString = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alfabet.length; j++) {
            if (str[i] === alfabet[j]) {
                strNumber.push(j);
                break;
            }
        }
    }

    strNumber.sort(function (a, b) {return a > b});

    for (let i = 0; i < strNumber.length; i++) {
        for (let j = 0; j < alfabet.length; j++) {
            if (strNumber[i] === j) {
                newString += alfabet[j];
                break;
            }
        }
    }

    return newString;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'