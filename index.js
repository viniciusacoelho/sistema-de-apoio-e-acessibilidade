require('dotenv').config();

const express = require('express');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;
const MONGODB_URI = (process.env.MONGODB_URI || '').trim();
const DB_NAME = (process.env.MONGODB_DB || 'cesmac_blog').trim();

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI não definida no .env");
}

app.use(express.urlencoded({ extended: true }));
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/', (req, res) => {
    const ok = req.query.ok === '1';
    res.render('cadastre-se', { error: null, ok, values: null });
})

app.post('/cadastre-se', async (req, res) => {
    const nome = (req.body.nome || '').trim();
    const email = (req.body.email || '').trim().toLowerCase();
    const senha = req.body.senha || '';
    const confirmarSenha = req.body.senha2 || '';

    const values = { nome, email };

    if (!nome || !email || !senha) {
        return res.status(400).render('cadastre-se', {
            error: 'Preencha nome, e-mail e senha.',
            ok: false,
            values,
        });
    }

    if (senha !== confirmarSenha) {
        return res.status(400).render('cadastre-se', {
            error: 'As senhas não coincidem.',
            ok: false,
            values,
        });
    }
    
    if (senha.length < 6) {
        return res.status(400).render('cadastre-se', {
            error: 'A senha deve ter pelo menos 6 caracteres.',
            ok: false,
            values,
        });
    }

    try {
        const passwordHash = await bcrypt.hash(senha, 10);
        await db.collection('users').insertOne({
            nome,
            email,
            passwordHash,
            createdAt: new Date(),
        });
        return res.redirect('/cadastre-se?ok=1');
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).render('cadastre-se', {
                error: 'Este e-mail já está cadastrado.',
                ok: false,
                values,
            });
        }
        console.error(err);
        return res.status(500).render('cadastre-se', {
            error: 'Não foi possível concluir o cadastro. Tente novamente.',
            ok: false,
            values,
        });
    }
});

// app.get('/', (req, res) => {
//     res.render('index');
// });

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

app.get('/deficiente-auditivo', (req, res) => {
    res.render('deficiente-auditivo')
})

app.get('/deficiente-fisico-ou-motoro', (req, res) => {
    res.render('deficiente-fisico-ou-motoro')
})

async function main() {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db(DB_NAME);
    await db.collection('users').createIndex({ email: 1 }, { unique: true }); // Não pode existir 2 usuários com mesmo e-mail

    app.listen(port, () => {
    console.log("Running at http://localhost:" + port);
});
}

main().catch((err) => {
    console.error('Falha ao iniciar:', err);
    process.exit(1);
});
