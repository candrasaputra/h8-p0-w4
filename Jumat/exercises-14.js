/*
* Logic Challenge - Naik Angkot
* Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi.
* Function akan me-return array of object.
* Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.
* Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let tmpObj, totalBayar, naikDari, tujuan, tmpArr = [];

    for (let i = 0; i < arrPenumpang.length; i++) {
        tmpObj = new Object();
        totalBayar = 0

        tmpObj.penumpang = arrPenumpang[i][0];
        tmpObj.naikDari = arrPenumpang[i][1];
        tmpObj.tujuan = arrPenumpang[i][2];
        
        for (let j = 0; j < rute.length; j++) {
            if (rute[j] === arrPenumpang[i][1]) {
                naikDari = j;
            }

            if (rute[j] === arrPenumpang[i][2]) {
                tujuan = j;
            }
        }

        tmpObj.bayar = Math.abs(naikDari - tujuan) * 2000;

        tmpArr.push(tmpObj);
    }
    

    return tmpArr;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]