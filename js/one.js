console.log('one');

const numbers = [1, 2, 3, 5.3, 8, -8, -5.5, -6, -16, -5, -9, 4.2, 5, 12, -6, 45];
console.log('numbers ===', numbers);
//  3. Sukurkite ir atvaizduokite masyvą su dvigubomis reikšmėmis;
const doubleNumbers = numbers.map((sk) => {
  const dobleValue = sk * 2;
  return dobleValue;
});
console.log('doubleNumbers ===', doubleNumbers);
//  4. Sukurkite ir atvaizduokite masyvą su kvadratu pekltomis reikšmėmis;

//  5. Sukurkite ir atvaizduokite masyvą su reikšmėmis padaugintomis iš jų vietos masyve indekso

//  6. Atrinkti tiktai teigimų elementų masyvą

//  7. Atrinkti vertes didesnes uz 3
//  7.1 Parasyti funkcija kuri ima 2 argumentus, masyva ir skaiciu uz kuri didesnes vertes grazina ir atspausdina.

// 12. Suapvalinti visas masyvo reikšmes iki sveikų skaičių

// 13. Atrinkti kas antrą elementą į naują masyvą

// 15. Atspausdinti kiekvieną masyvo reikšmę atskiroje eilutėje: [0] => 64.
// 15.1 Grazinti nauja masyva kuriame yra objektai
// [
//   {index: 0, reiksme: 64}
//   {index: 1, reiksme: 25}
//    ...
// ]

// 16. Suskaičiuoti visų elementų sumą

// 18. Rasti didžiausią skaičių masyve
