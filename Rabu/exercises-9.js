/*
* Logic Challenge - Check AB
* Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string.
* function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
* Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.
*/

function checkAB(num) {
    let status = false;
    let tmpA = [];
    let tmpB = [];
    let jarak;

    for (let i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            tmpA.push(i);
        }

        if (num[i] === 'b') {
            tmpB.push(i);
        }
    }

    for (let i = 0; i < tmpA.length; i++) {
        for (let j = 0; j < tmpB.length; j++) {
            jarak = tmpA[i] - tmpB[j];
            jarak = Math.abs(jarak);
            if (jarak === 4) {
                status = true;
            }
        }
    }
    
    return status;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false