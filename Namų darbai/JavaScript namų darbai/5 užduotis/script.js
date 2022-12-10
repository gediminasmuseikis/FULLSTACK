function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  let kiekis1 = 0;
  let kiekis2 = 0;
  let kiekis3 = 0;

  let first = rand(0, 2);
  if (first===0) {
    kiekis1++;
  } else if (first===1) {
    kiekis2++;
  } else {
    kiekis3++;
  }

  let second = rand(0, 2);
  if (second===0) {
    kiekis1++;
  } else if (second===1) {
    kiekis2++;
  } else {
    kiekis3++;
  }

  let third = rand(0, 2);
  if (third===0) {
    kiekis1++;
  } else if (third===1) {
    kiekis2++;
  } else {
    kiekis3++;
  }


  console.log ('Atsitiktiniai skaičiai:', first, second, third);
  console.log ('Iš viso nulių:', kiekis1, 'Iš viso vienetų:', kiekis2, 'Iš viso devejetų:', kiekis3)