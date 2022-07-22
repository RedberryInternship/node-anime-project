const mongoose = require('mongoose')
const express = require('express');

const mongoConnectionURI = 'mongodb://localhost:27017/anime'

mongoose.connect(mongoConnectionURI)
    .then(() => console.log('connected to database'))
    .catch(e => console.log(e.message))

const imagesSchema = new mongoose.Schema({
    url: String,
})




const Image = mongoose.model('Image', imagesSchema)





const server = express()

server.get('/', async (_, res) => {
    const images = await Image.find()

    if(images.length == 0) {
        res.send(`
    <html>
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
            <h1 style="color: white">There are no Images 😭</h1>
        </body>
    </html>
    `);
    } 
    
    
    else {
        
        
        
        

        
        const randomImgIdx = parseInt(Math.random() * 100) % images.length

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
                <img src="${images[randomImgIdx].url}" style="width: 100%" />
            </a>
            </body>
        </html>
        `);
    }
})

server.get('/delete', async (req, res) => {
    await Image.deleteMany()
    res.send(
        '<h1>Deleted!</h1>'
    )
})


server.get('/reset', (req, res) => {
      [
        'https://c.tenor.com/rK3k9EgLkhEAAAAC/steins-gate.gif',
        'https://c.tenor.com/wvZfA6FeOs0AAAAd/naruto-boruto.gif',
        'https://media3.giphy.com/media/pGlDpwgWTLgBi/giphy.gif',
        'https://c.tenor.com/stGMm1ODsGsAAAAC/anime-vinland-saga.gif',
        'https://i.pinimg.com/originals/ee/8f/ed/ee8fed71f21624f59205460b23820873.gif',
        'https://i.pinimg.com/originals/dd/9d/1b/dd9d1bef17c23fccf6f8224d7a70b766.gif',
    ].forEach(async (el) => await Image.create({url: el}))

    res.send(
        '<h1>Reset!</h1>'
    )
})


server.listen(4444, () => console.log("Server is listening at http://localhost:4444"))
