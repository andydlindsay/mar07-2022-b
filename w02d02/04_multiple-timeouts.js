const delays = [1000, 2000, 570, 908, 1234, 700, 1];

for (const delay of delays) {
  setTimeout(() => {
    console.log('the timeout has fired', delay);
  }, delay);
}

// const delay = 2000;