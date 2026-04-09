const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/cadastre-se', (req, res) => {
    res.render('cadastre-se')
})

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/sobre', (req, res) => {
    res.render('sobre')
})

app.get('/servicos', (req, res) => {
    res.render('servicos');
});

app.get('/contato', (req, res) => {
    res.render('contato')
})

app.get('/inclusao', (req, res) => {
    res.render('inclusao')
})

app.get('/notificacao', (req, res) => {
    res.render('notificacao')
})

app.get('/encontre-suporte', (req, res) => {
    res.render('encontre-suporte')
})

app.get('/sessenta-anos-ou-mais', (req, res) => {
    res.render('sessenta-anos-ou-mais')
})

app.get('/acessibilidade', (req, res) => {
    res.render('acessibilidade')
})

app.listen(port, () => {
    console.log("Running at http://localhost:" + port);
});