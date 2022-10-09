const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');


const homeview = (req, res, next) => {
    res.render('home');
}

const generatePdf = async (req, res, next) =>{
    const html = fs.readFileSync(path.join(__dirname, '../views/template.html'), 'utf-8');
    const filename = Math.random() + '_doc' + '.pdf';
}

module.exports = {
    homeview
}
