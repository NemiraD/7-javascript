console.log(2019);

console.log('jgfjfk');

console.log('jgfjfk 2019', 20156, 'kzjvbzkv', 4587);

console.log(true);

console.log(false);

console.log('------------');

var vardas = 'Nemira';
console.log(vardas);

var amzius = 15;
console.log(amzius);

var arAmziusTikras = false;
console.log(arAmziusTikras);

let svecioVardas = 'Adomas';
console.log(svecioVardas);

svecioVardas = 'Ieva';
console.log(svecioVardas);

//type:array
const laimingiSkaiciuSarasas = [1, 5, 7, 8, 9];
console.log(laimingiSkaiciuSarasas);

const raides = ['a', 'b', 'Ą'];
console.log(raides);

const randomArray = [0, 'a', true, false, 5, 'asd', [1, 2, 3]];
console.log(randomArray);

console.log('------------');

let lygtis = 2 + 2 * 2 + 1;
console.log(lygtis);

const pirmasSkaicius = 0;
const antrasSkaicius = 2;
const treciasSkaicius = 14;
const suma = pirmasSkaicius + antrasSkaicius + treciasSkaicius;
console.log(suma);

const asmensVardas = 'Vardenis';
const asmensPavarde = 'Pavardenis';
console.log(asmensVardas, asmensPavarde);

const asmensVardas1 = 'Vardenis';
const asmensPavarde1 = 'Pavardenis';
const asmensPilnasVardas = asmensVardas1 + ' ' + asmensPavarde1;
console.log(asmensPilnasVardas);

const asmensInfo = [asmensVardas, asmensPavarde];
console.log(asmensInfo);

console.log('------------');

// s-array of numbers
const s = [14, -28, 3, 36, 3.14];
const sSuma = 14 - (-28) + 3 - 36 +3.14;
const sUltimate = s[0] - s[1] + s[2] - s[3] + s[4];
console.log(s);
console.log(sSuma);
console.log(sUltimate);
console.log(s[2]);

console.log('------------');

console.log(raides);
const abc = raides[0] + ', ' + raides[1]
                      + ', ' + raides[2];
console.log(abc);

console.log('------------');

console.log('As sakau "labas rytas" :)');
console.log("O tu man atsakai: 'ka tu?..'");
console.log('kabuciu yra tokiu: ", \'');
console.log("kabuciu yra tokiu: \", '");

console.log('------------');
console.log('PALYGINIMAS');
console.log('------------');

if (2 > 4) {
    console.log('pirmas IF\'as yra teisingas');
}
if (2 < 4) {
    console.log('antras IF\'as yra teisingas');
}
//atitinka lygu zenkla
if (2 === 4) {
    console.log('trecias IF\'as yra teisingas');
}
//atitinka nelygu
if (2 !== 4) {
    console.log('ketvirtas IF\'as yra teisingas');
}
//atitinka daugiau arba lygu
if (2 >= 4) {
    console.log('penktas IF\'as yra teisingas');
}
if (2 <= 4) {
    console.log('sestas IF\'as yra teisingas');
}

if (2 > 4) {
    console.log('2 daugiau uz 4');
    //jeigu teisinga salyga
} else {
    console.log('2 nera daugiau uz 4');
    //jeigu salyga neteisinga
}

const pilnametis = true;
if (pilnametis === true) {
    console.log('jam galima parduoti...');
} else {
    console.log('tegul kviecia drauga...');
}

const diena = 'antradienis';
if (diena === 'pirmadienis') {
    console.log('Linkejimai ir uzuojauta!...');
} else {
    console.log('Sveikinu, savaite beveik baigta...');
}

if (diena === 'pirmadienis') {
    console.log('Linkejimai ir uzuojauta!...');
} else if (diena === 'ketvirtadienis') {
    console.log('tau pradejo sektis');
}

switch (diena) {
    case 'pirmadienis':
        console.log('Sekmes!');
        break;
    case 'antradienis':
        console.log('yeye');
        break;
    case 'treciadiens':
        console.log('i srum');
        break; 
    case 'ketvirtadienis':
        console.log('luck day');
        break;
    case 'penktadienis':
        console.log('beveik savaitgalis');
        break; 

    default:
        console.log('savaitgalis, kuri pamirsi');
    break;
}

const tekstas = 'Vardenis Pavardenis';
const ilgis = tekstas.length; //teksto ilgio paskaiciavimas
console.log('Tavo teksto "kakuaurar" ilgis yra 5');
console.log( ilgis );
console.log('Tavo teksto "'+tekstas+'" ilgis yra ' + ilgis);


console.log(18 * 2 + 5 + 8 * 2 + 'abc');
console.log('adb' - 'adb');

const asmuo1 = ['Rimantas', 31];
const asmuo2 = ['Paulius', 33];

console.log('Asmuo vardu "vardenis" yra 25 metu.');
console.log('Asmuo vardu "'+asmuo1[0]+'" yra '+asmuo1[1]+' metu.');
console.log('Asmuo vardu "'+asmuo2[0]+'" yra '+asmuo2[1]+' metu.');

const a = 'alkfalkfa';
const b = 'asfaihl';
if (a.length > b.length) {
    console.log('pirmas ilgesnis');
    } else {
        console.log('pirmas nera ilgesnis');
}

const s1 = [];
const s2 = [1, 2, 3];
console.log(s1.length);
console.log(s2.length);

console.log('------------');

if ( 2 == '2' ) {
    console.log('TRUE');
    } else {
    console.log("FALSE");
    
} //ne zymimas !
// lygina tik reiksme ==, grieztas lygu tikrina ir tipa ===

console.log('------------');
console.log('CIKLAS');
console.log('------------');
