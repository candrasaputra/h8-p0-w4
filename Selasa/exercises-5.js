/*
* Logic Challenge - Ubah Huruf
* Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
* Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya.
* Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.
*/

function ubahHuruf(kata) {
    let alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let kataBaru = '';

    for (let i = 0; i < kata.length; i++) {
        for (let j = 0; j < alfabet.length; j++) {
            if (kata[i] == alfabet[j]) {
                if (j == 25) {
                    kataBaru += alfabet[0];
                } else {
                    kataBaru += alfabet[j+1];
                }
            }
        }
    }

    return kataBaru;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu