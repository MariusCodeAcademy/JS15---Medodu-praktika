//Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3
//   index       0  1  2  3
const numbers = [1, 2, 4, 5];
const numbers2 = [5, 6, 8, 9, 10];

function missingNr(arr) {
  const findGraza = arr.find((sk, i, masyvas) => {
    // console.log(sk);
    const dabartineReiksme = masyvas[i];
    const priekineReiksme = masyvas[i + 1];
    // console.log('dabartineReiksme, priekineReiksme ===', dabartineReiksme, priekineReiksme);
    if (dabartineReiksme + 1 !== priekineReiksme) {
      // console.log('blogai dabartineReiksme', dabartineReiksme);
      return true;
    }
  });
  console.log('findGraza ===', findGraza);
  return findGraza + 1;
}

const miss1 = missingNr(numbers);
const miss2 = missingNr(numbers2);
console.log('miss1 ===', miss1);
console.log('miss2 ===', miss2);
