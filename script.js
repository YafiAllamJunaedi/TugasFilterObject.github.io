const mobil = [{
    brand: 'Civic',
    bbm: 'Pertalite',
    pintu: '4 Pintu'
},
{
    brand: 'Mercy',
    bbm: 'Pertalite',
    pintu: '4 Pintu'
},
{
    brand: 'Rolls Royce',
    bbm: 'Solar',
    pintu: '4 Pintu'
},
{
    brand: 'Toyota Supra',
    bbm: 'Solar',
    pintu: '2 Pintu'
},
{
    brand: 'Porsche',
    bbm: 'Pertamax Turbo',
    pintu: '2 Pintu'
},
{
    brand: 'Avanza',
    bbm: 'Pertalite',
    pintu: '4 Pintu'
},
];

// const ketPertalite = mobil.filter((mobel) => mobel.bbm === 'Pertalite');
// console.log(ketPertalite);

// var ketSolar = mobil.filter((mobel2) => mobel2.bbm === 'Solar');
// console.log(ketSolar);

// var ketPertamax = mobil.filter((mobel3) => mobel3.bbm === 'Pertamax Turbo');
// console.log(ketPertamax);

// let user = prompt("Ketikkan jenis bensin : (Pertalite/Solar/Pertamax Turbo");
// if (user === 'pertalite'){
//     console.log(ketPertalite);
// }else if(user === 'Solar'){
//     console.log(ketSolar);
// }else if(user === 'Pertamax Turbo'){
//     console.log(ketPertamax);
// }else{
//     console.log("Tidak ada pilihan");
// }

// var inputUser = prompt("Ketikkan Jenis BBM (Pertalite/Solar/Pertamax Turbo) : ");
let hasil = prompt ("Masukkan Jenis BBM : ", "");
const userHasil = mobil.filter((mber) => mber.bbm === hasil);

console.log(userHasil);