const express = require('express');

const server = express();

server.get('/', (req, res) => {
    const imgs = [
        'https://c.tenor.com/wvZfA6FeOs0AAAAd/naruto-boruto.gif',
        'https://media3.giphy.com/media/pGlDpwgWTLgBi/giphy.gif',
        'https://c.tenor.com/stGMm1ODsGsAAAAC/anime-vinland-saga.gif',
        'https://i.pinimg.com/originals/ee/8f/ed/ee8fed71f21624f59205460b23820873.gif',
        'https://c.tenor.com/rK3k9EgLkhEAAAAC/steins-gate.gif',
        'https://i.pinimg.com/originals/dd/9d/1b/dd9d1bef17c23fccf6f8224d7a70b766.gif',
    ]

    const randomNum = parseInt(Math.random() * 10000)
    const randomImgIdx = randomNum % imgs.length

    res.send(`
    <html>
        <head>
            <title>Naruto</title>
        </head>
        <body>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #0c112d;
            }

            img {
                border-radius: 10px;
            }
        </style>
        <a href="/" style="width: 50%">
            <img src="${imgs[randomImgIdx]}" style="width: 100%" />
        </a>
        </body>
    </html>
    `);
});


server.listen(4444, () => console.log("Server is listening at http://localhost:4444"))
