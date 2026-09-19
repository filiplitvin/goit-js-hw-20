const randomDelay = (value) => {
  const delay = Math.floor(Math.random() * (5000 - 1000)) + 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${value} (затримка: ${delay}мс)`);
    }, delay);
  });
};

const promises = [
  randomDelay("promise1"),
  randomDelay("promise2"),
  randomDelay("promise3"),
  randomDelay("promise4"),
  randomDelay("promise5"),
];

Promise.race(promises).then((result) => {
  console.log(`Найшвидший проміс: ${result}`);
});
