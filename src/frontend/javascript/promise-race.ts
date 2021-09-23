function race(promises) {
  let isSettled = false;

  return new Promise((resolve, reject) => {
    promises.forEach(promise => promise.then((data) => {
      if (!isSettled) {
        resolve(data);
        isSettled = true;
      }
    }, (error) => {
      if (!isSettled) {
        reject(error);
        isSettled = true;
      }
    }));
  });
}
