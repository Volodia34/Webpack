async function start() {
    return await Promise.reject('async is working');
}

start().then(console.log)
