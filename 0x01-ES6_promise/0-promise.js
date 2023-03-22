// export default function getResponseFromAPI() {
//     return new Promise((resolve) => {
//         let userInput = new Response();
//         resolve("Hey there, great to see you today!");
//     }).then((resolvedValue) => {
//         return resolvedValue;
//     });
// }

// getResponseFromAPI().then((response) => {
//     console.log(response);
// });

export default function getResponseFromAPI() {
  const success = true;
  return new Promise((resolve, reject) => {
    if (success) {
      resolve();
    } else {
      reject();
    }
  });
}
