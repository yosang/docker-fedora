const express = require('express');
const app = express();

app.get('/', (_, res) => {
    res.end('hello from express')
})

app.listen(3030, () => {
    console.log('app is running on port 3030')
})