// 1. memfilter nilai object berdasarkan kondisi tertentu

var exercise1 = [
  { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
  { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
]

// Release 1 => coba ambil nama-nama yang nilainya diatas 30
/* 
  [ 
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/
let scoreGreaters30 = [];
for (let i = 0; i < exercise1.length; i++) {
  if (exercise1[i].score > 30) {
    scoreGreaters30.push(exercise1[i]);
  }
}
console.log('Skor lebih besar dari 30', scoreGreaters30);

// Release 2 => coba ambil nama-nama yang nilainya diantara 70 dan 90
/* 
  [ 
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/
let scoreBetween70and80 = [];
for (let i = 0; i < exercise1.length; i++) {
  if (exercise1[i].score >= 70 && exercise1[i].score <= 90) {
    scoreBetween70and80.push(exercise1[i]);
  }
}
console.log('\n Skor diantara 70 dan 90', scoreBetween70and80);

// 2. mensorting array of object berdasarkan value dari objectnya

// Release 1 => sorting isi ascending
/* 
  [ 
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100}
  ]
*/
let sortAscending = true;
while (sortAscending) {
  sortAscending = false;

  for (let i = 1; i < exercise1.length; i++) {
    let tmp = [];
    if (exercise1[i-1].score > exercise1[i].score) {
      tmp.push(exercise1[i]);
      exercise1[i] = exercise1[i-1];
      exercise1[i-1] = tmp.pop();

      sortAscending = true;
    }
  }
}
console.log('Sorting ascending', exercise1);

// Release 2 => sorting isi descending
/* 
  [ 
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 }
  ]
*/
let sortDescending = true;
while (sortDescending) {
  sortDescending = false;

  for (let i = 1; i < exercise1.length; i++) {
    let tmp = [];
    if (exercise1[i-1].score < exercise1[i].score) {
      tmp.push(exercise1[i]);
      exercise1[i] = exercise1[i-1];
      exercise1[i-1] = tmp.pop();

      sortDescending = true;
    }
  }
}
console.log('Sorting descending', exercise1);