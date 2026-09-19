const delayedPromise = (value, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

const promises = [
  delayedPromise("promise1", 5000),
  delayedPromise("promise2", 3000),
  delayedPromise("promise3", 4000),
  delayedPromise("promise4", 2000),
  delayedPromise("promise5", 1000),
];

Promise.all(promises).then((results) => {
  console.log(results);
});
