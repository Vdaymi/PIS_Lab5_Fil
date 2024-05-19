const express = require('express');
const request = require('request');

const PORT = 3000;

const app = express();

app.use(express.static('public'));

app.get('/user', (req, res) => {
    request(`https://randomuser.me/api/`, function (error, response, body) {
        try {
            const data = JSON.parse(body);
            res.json(data);
        } catch (error) {
            console.error('error:', error);
        }       
    });
});

app.use('/is-21fiot-22-055', (req, res) => {
    const name = 'Vadym';
    const lastName = 'Fil';
    const year = '2';
    const group = 'IS-21';

    res.send(
        `<table style = 'border: 1px solid black'>
        <tr border: 1px solid black;>
            <th style = 'border: 1px solid black'>Name</th>
            <th style = 'border: 1px solid black'>Last Name</th>
            <th style = 'border: 1px solid black'>Year</th>
            <th style = 'border: 1px solid black'>Group</th>
        </tr>
        <tr>
            <td style = 'border: 1px solid black'>${name}</td>
            <td style = 'border: 1px solid black'>${lastName}</td>
            <td style = 'border: 1px solid black'>${year}</td>
            <td style = 'border: 1px solid black'>${group}</td>
    </table>
    `
    );
});
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});