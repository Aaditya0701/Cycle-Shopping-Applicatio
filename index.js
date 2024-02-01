const express = require('express');
const app = express();
const bicycles = require('./data/data.json');

// first change the extension of .html files to ejs n then -> 'npn i ejs' in new ternimal , after add this code to use template of ejs
app.set('view engine', 'ejs');

//getting css and images, but first make a middleware to assign system that files are located in particular location or folder 
app.use(express.static('public'));

app.get('/', (req,res) => {
    return res.render('bicycles' ,{
        bicycles
    });
});

app.get('/bicycle', (req,res) => {
    console.log(req.query.id);
    const bicycle = bicycles.find((b) => b.id === req.query.id);
    return res.render('overview', {
        bicycle
    });
})

app.listen(3000, () => console.log('server is now running'));