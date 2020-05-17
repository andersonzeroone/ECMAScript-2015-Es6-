const myPrimise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('ok') }, 2000);
})

// myPrimise().then(Response => ...)

async function execPromises(){
    const response = await myPrimise();

    console.log(response);
}

execPromises();