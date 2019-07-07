/*
* Logic Challenge - Faktor Persekutuan Terbesar
* Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka.
* Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar).
* FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.
*/

function fpb(angka1, angka2) {

    if (angka1 < 1) {
        return "angka 1 harus lebih besar dari 0";
    }

    if (angka2 < 1) {
        return "angka 2 harus lebih besar dari 0";
    }

    // Menggunakan algoritma Euklidean
    while (angka1 != angka2) {
        if (angka1 > angka2) {
            angka1 = angka1 - angka2;
        } else {
            angka2 = angka2 - angka1;
        }
    }

    return angka1;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1