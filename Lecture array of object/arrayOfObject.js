/*
  Opening
  Array dan Object adalah tipe data structured
  jadi array bisa menampung object, begitupun sebaliknya
*/

// bentuk normal
var example1 = ['a', 'b'];
var example2 = { name: 'a' };
// tapi kita bisa juga memasukkan object ke dalam array
var example3 = { name: example1 };
var example4 = [{ name: 'c' }, { name: 'a' }];
example4.push(example2);
// silahkan console.log untuk melihat nilai example 3 dan 4

// kenapa dibutuhkan pelajaran array of object. gunanya untuk bisa menggunakan
// kegiatan yang bisa array lakukan seperti sort dan filter. sementara data
// umumnya lebih baik dibentuk dalam bentuk object untuk kondisi tertentu
// seperti nama orang { name: 'adi', age: 10, height: 150 }

/*
  Poin penting yang perlu dipahami:
  1. mengakses nilai di dalam array of object
  2. melooping dan kondisional array dari array of object
  3. melooping dan kodisional object dari array of object
  Latihan:
  1. memfilter nilai object berdasarkan kondisi tertentu
  2. mensorting array of object berdasarkan value dari objectnya
*/

// ------------------
// 1. mengakses nilai
// ------------------
// 1.1 easy
var exercise1 = [
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed' },
  { name: 'ginta', position: 'BF', ability: 'fat' }
]

// release 1 => coba akses object yang berisi ginta 
// { name: 'ginta', position: 'BF', ability: 'fat' }
console.log(exercise1[1]);

// release 2 => coba dapatkan string ginta
// 'ginta'
console.log(exercise1[1].name);

// release 3 => dapatkan key dari isi object
// ['name', 'position', 'ability']
console.log(Object.keys(exercise1[0]));

// release 4 => dapatkan value dari isi object eyeshield
// ['eyeshield', 'RB', 'topSpeed']
console.log(Object.values(exercise1[0]));

// release 5 => coba ambil variable eyeshield apabila name sudah diambil dalam bentuk variable
// akses data apa menggunakan . atau [] ?
var propertyName = 'name';
console.log(exercise1[0][propertyName]);

// 1.2 medium
var exercise2 = [
  { 
    name: 'eyeshield',
    position: 'RB',
    ability: [
      { weakness: [ 'shy' ] , power: [ 'speed', 'nice' ] } ] 
  },
  { name: 'ginta' }
]

// release 1 => coba akses ability eyeshield
// { weakness: [ 'shy' ] , power: [ 'speed', 'nice' ] }
console.log(exercise2[0].ability);

// release 2 => coba akses power eyeshield speed
// 'speed'
console.log(exercise2[0].ability[0].power[0]);

// ----------------------------------
// 2. melooping array dan kondisional
// ----------------------------------
var exercise1 = [
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed' },
  { name: 'ginta', position: 'BF', ability: 'fat' }
]

// release 1 => coba tampilkan
/*
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed' }
  { name: 'ginta', position: 'BF', ability: 'fat' }
*/

for (let i = 0; i < exercise1.length; i++) {
  console.log(exercise1[i]);
}

// release 2 => coba tampilkan yang ganjil atau genap saja
/*
  **GENAP**
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed' }
  **GANJIL**
  { name: 'ginta', position: 'BF', ability: 'fat' }
*/
for (let i = 0; i < exercise1.length; i++) {
  if (i % 2 === 0) {
    console.log('Genap', exercise1[i]);
  } else {
    console.log('Ganjil', exercise1[i]);
  }
}


// -------------------------------------------------------
// 3. melooping dan kodisional object dari array of object
// -------------------------------------------------------
// release 1 => coba tampilkan nama
/*
  **OUTPUT**
  eyeshield
  ginta
*/
for (let i = 0; i < exercise1.length; i++) {
  console.log(exercise1[i].name);
}

// release 2 => coba tampilkan bentukan string seperti ini
/*
  nama eyeshield dia adalah seorang RB dengan kelebihan topSpeed
  nama ginta dia adalah seorang BF dengan kelebihan fat
*/
for (let i = 0; i < exercise1.length; i++) {
  console.log('nama', exercise1[i].name, 'dia adalah seorang', exercise1[i].position, 'dengan kelebihan', exercise1[i].ability);
}

// release 3 => dapatkan array dari name saja
// ['eyeshield', 'ginta']
let name = [];
for (let i = 0; i < exercise1.length; i++) {
  name.push(exercise1[i].name);
}
console.log(name);

// release 4 => coba dapatkan semua pemain dengan posisi RB
// [{ name: 'eyeshield', position: 'RB', ability: 'topSpeed' }]
let nameRb = [];
for (let i = 0; i < exercise1.length; i++) {
  if (exercise1[i].position === 'RB'){
    nameRb.push(exercise1[i]);
  }
}
console.log(nameRb);