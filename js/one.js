console.log('one');
//               0  1  2   3
const numbers = [1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];
console.log('numbers ===', numbers);
//  3. Sukurkite ir atvaizduokite masyvą su dvigubomis reikšmėmis;
const doubleNumbers = numbers.map((sk) => {
  const dobleValue = sk * 2;
  return dobleValue;
});
console.log('doubleNumbers ===', doubleNumbers);
//  4. Sukurkite ir atvaizduokite masyvą su kvadratu pekltomis reikšmėmis;
// const kvadratuReiksmes = numbers.map((sk) => sk * sk);
const kvadratuReiksmes = numbers.map(makeKvadratu);

function makeKvadratu(num) {
  return num * num;
}
console.log('kvadratuReiksmes ===', kvadratuReiksmes);

//  5. Sukurkite ir atvaizduokite masyvą su reikšmėmis padaugintomis iš jų vietos masyve indekso
const skDaugintasIsIndex = numbers.map((sk, i) => sk * i);
console.log('skDaugintasIsIndex ===', skDaugintasIsIndex);

//  6. Atrinkti tiktai teigimų elementų masyvą
const teigiami = numbers.filter((sk) => sk > 0);
console.log('teigiami ===', teigiami);
//  7. Atrinkti vertes didesnes uz 3
const daugiauNei3 = numbers.filter((sk) => sk > 3);
console.log('daugiauNei3 ===', daugiauNei3);
//  7.1 Parasyti funkcija kuri ima 2 argumentus, masyva ir skaiciu uz kuri didesnes vertes grazina ir atspausdina.

function printAndReturn(arr, daugiauUz) {
  const result = arr.filter((el) => el > daugiauUz);
  console.log('printAndReturn === ', daugiauUz, result);
  return result;
}

// 12. Suapvalinti visas masyvo reikšmes iki sveikų skaičių
const apvalus = numbers.map((sk) => Math.round(sk));
console.log('apvalus ===', apvalus);
// 13. Atrinkti kas antrą elementą į naują masyvą
const kasAntras = numbers.filter((sk, i) => i % 2 === 0);
console.log('kasAntras ===', kasAntras);

// 15. Atspausdinti kiekvieną masyvo reikšmę atskiroje eilutėje: [0] => 64.
numbers.forEach((sk, i) => console.log(`[${i}] => ${sk}`));

// 15.1 Grazinti nauja masyva kuriame yra objektai
// [
//   {index: 0, reiksme: 64}
//   {index: 1, reiksme: 25}
//    ...
// ]

// 16. Suskaičiuoti visų elementų sumą

// 18. Rasti didžiausią skaičių masyve

const daugiau5 = printAndReturn(numbers, 5);
const daugiaum1 = printAndReturn(numbers, -1);

console.log(daugiau5.concat(daugiaum1));
