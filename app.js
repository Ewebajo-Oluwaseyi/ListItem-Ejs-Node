const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const Port = process.env.PORT || 5000;

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use(bodyParser.urlencoded({ extended: false }))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', { text: 'This is EJS'})
})

//post request
app.post('/add-item', (req, res, next) => {
    let quantities = [];
    quantities.push(req.body.quantity);
    res.render('index', {
        quantities,
        topicHead: ''
    });
});

//  Listen on port 3000
app.listen(Port, () => console.info(`Listening on port ${Port}`))