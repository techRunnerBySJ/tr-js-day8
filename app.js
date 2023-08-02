// Handle asynchronous operations in JavaScript using Promise
function asyncFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Async operation complete.');
      }, 2000);
    });
  }
  
  asyncFunction()
    .then(result => console.log(result))
    .catch(error => console.error(error));
  