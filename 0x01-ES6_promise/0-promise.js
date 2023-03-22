function getResponseFromAPI() {
    return new Promise((resolve) => {
        let userInput = new Response();
        resolve("Hey there, great to see you today!");
    }).then((resolvedValue) => {
        return resolvedValue;
    });
}

getResponseFromAPI().then((response) => {
    console.log(response);
});
