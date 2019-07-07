/*
* Logic Challenge - Angka Prima
* Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka.
* Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.
*/

function angkaPrima(angka) {
    let status = true;

    if (angka <= 1) {
        status = false;
    }

    for (let i = 2; i < angka; i++) {
        if ((angka % i) == 0) {
            status = false;
        }
    }

    return status;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false