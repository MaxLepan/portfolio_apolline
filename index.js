const express = require('express');
const dotenv = require('dotenv').config();
const axios = require('axios');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors())

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

const requestDribbbleAPI = async (key, link, path) => {

    const response = await axios.get(`https://api.dribbble.com/v2/${path}${key}`)
    try {
        app.get(link, (req, res) => {
            res.send(response.data)
        })
    } catch (err) {
        console.log(err)
    }

}


requestDribbbleAPI(`?access_token=${process.env["API_KEY"]}`, '/getProjects', 'user/shots');

requestDribbbleAPI(`?access_token=${process.env['API_KEY']}`, '/getUser', 'user');
