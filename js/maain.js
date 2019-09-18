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

// eng: loop, ltu: ciklas

const numbers = [0, 5, 8, -17, 87, 125, 56];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
for (let i=0; i<8; i=i+2) {
    console.log('iteracija');
}
for (let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}

console.log('priespaskutinis skaicius: ' + numbers[ numbers.length - 2]);

const txt='abcdef';
let atbulas = '';
for (let i=txt.length-1; i>=0; i--) {
    console.log(txt[i]);
    atbulas= atbulas + txt[i];
}
console.log( atbulas );


const pazymiai = [10, 8, 5, 2, 4, 7];
let sum = 0;
for (let i=0; i<pazymiai.length; i++) {
    sum = sum + pazymiai[i];
}
console.log( sum / pazymiai.length );

const nuo = 0;
const iki = 11;
const daliklis = 5;
let kartai = 0;

for (let i=nuo; i<=iki; i++) {
    if ( i%daliklis === 0 ) {
        kartai++;
    }
}
console.log('Skaičių intervale tarp ' + nuo + ' ir ' +iki+', besidalinančių be liekanos iš ' + daliklis + ' yra ' +kartai+ ' vienetai.')

const nuo1 = 574;
const iki1 = 815;
let sumavimas = 0;
for (let i=nuo1; i<=iki1; i++) {
    sumavimas = sumavimas + i;
}
console.log('-----------');
console.log( sumavimas );
console.log('-----------');



function dalyba(from, untill, divide) {
    let times = 0;

    for (let i=from; i<=untill; i++) {
        if ( i%divide === 0 ) {
            times++;
        }
    }
    return times;
}

console.log( dalyba(0, 11, 3) );
console.log( dalyba(0, 11, 5) );
console.log( dalyba(0, 11, 7) );

console.log( dalyba(0, 11, 3) );
console.log( dalyba(0, 11, 5) );
console.log( dalyba(0, 11, 7) );




function vidurkis(pazymiai) {
    let sum = 0;
    for (let i=0; i<pazymiai.length; i++) {
        sum = sum + pazymiai[i];
    }
    return sum / pazymiai.length;
}

console.log( vidurkis([1, 2, 3]));

console.log('--------------');
console.log('FUNKCIJOS');
console.log('--------------');

function tusciaFunkcija() {
    return false;
}

console.log( tusciaFunkcija() );


console.log('--------------');

// typeof(16165) -> 'number'
// typeof('tekstas') -> 'string'
// typeof(true) -> 'boolean'
// typeof(false) -> 'boolean'

function daugyba( pirmas, antras ) {
    if ( typeof(pirmas) !== 'number' ) {
        console.log('Klaida: pirma reiksme nera skaiciaus tipo.');
        return 'Klaida: pirma reiksme nera skaiciaus tipo.';
    }
    if ( typeof(antras) !== 'number' ) {
        console.log('Klaida: antra reiksme nera skaiciaus tipo.')
        return 'Klaida: antra reiksme nera skaiciaus tipo.';
    }
    if ( typeof(antras) === Infinity ) {
        console.log('Klaida: antra reiksme nera skaicinegali buti begalybe.')
        return 'Klaida: antra reiksme nera skaicinegali buti begalybe.';
    }

    const sandauga = pirmas * antras;
    console.log(pirmas, '*', antras, '=', sandauga)
    return sandauga;
}

const c = 2;
const d = 3;
daugyba(c, d);

daugyba(7, 3);
daugyba('asd', 3);
daugyba(3, 'asd');

console.log('--------------');
console.log('skaitmenu kiekis skaiciuje');

// function skaitmenuKiekisSkaiciuje( skaicius) {
//     if ( typeof(skaicius) !=='number') {
//         console.log('Klaida: reiksme nera skaiciaus tipo.');
//         return 'Klaida: reiksme nera skaiciaus tipo.';
//     }
//     if ( isNaN(skaicius) ) {
//         console.log('Klaida: reiksme nera skaiciaus tipo.');
//         return 'Klaida: reiksme turi buti normalus skaicius.';
//     }
//     if ( isFinite(skaicius) === false ) {
//         console.log('Klaida: reiksme nera skaiciaus tipo.');
//         return 'Klaida: reiksme turi buti normalus skaicius.';
//     }

//     let kiekis1=0;


//     //logika
//     console.log(skaicius, '->', kiekis)
//     return kiekis1;
// }
// skaitmenuKiekisSkaiciuje( 5 );
// skaitmenuKiekisSkaiciuje( 781 );
// skaitmenuKiekisSkaiciuje( 37060123456 );
// skaitmenuKiekisSkaiciuje( true );
// skaitmenuKiekisSkaiciuje( "asd" );




let skaicius1 = 37060123456;
let tekstinisskaicius = '' + skaicius1;
console.log(tekstinisskaicius.length);


console.log('--------------');
console.log('didziausias Skaicius Sarase');

function didziausiasSkaiciusSarase( list ) {
    let didziausias = 0;

    //logika

    return didziausias;
}

console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( "pomidoras" ) );
console.log( didziausiasSkaiciusSarase( [] ) );

console.log('--------------');
console.log('Isrinkti Raides');

function isrinktiRaides( tekstas, zingsnis ) {
    if ( typeof(tekstas !== 'string') ) {
        console.log('Pirmasis kintamasis yra netinkamo tipo.');
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
    if ( tekstas.length === 0 || 
         tekstas.length > 100 ) {
        console.log('Pirmojo kintamojo reiksme yra netinkamo dydzio.');
        return 'Pirmojo kintamojo reiksme yra netinkamo dydzio.';
    }
    if ( typeof(zingsnis) !=='number') {
        console.log('Antrasis kintamasis yra netinkamo tipo.');
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    return;
}

isrinktiRaides( 1561, 2 );
isrinktiRaides( '', 2 );
isrinktiRaides( 'abcdefg', 'ad' );
isrinktiRaides( 'abc', 0 );
isrinktiRaides( 'abc', 4 );

isrinktiRaides( 'abcdefg', 2 );
isrinktiRaides( 'abcdefghijkl', 3 );




