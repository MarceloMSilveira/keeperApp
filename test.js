//using map

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

console.log(kvArray.map((element)=> `O valor do elemento é: ${element.value} e o índice é: ${element.key}`));