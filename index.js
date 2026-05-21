require('dotenv').config();
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const path = require('path');

const { MongoClient, ObjectId } = require('mongodb');
const connectMongo = require('connect-mongo');
const MongoStore = connectMongo.MongoStore || connectMongo.default;

const multer = require('multer');

const app = express();
const port = 3000;

const MONGODB_URI = (process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017').trim();
const DB_NAME = (process.env.MONGODB_DB || 'sistema-de-apoio-e-acessibilidade   ').trim();

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI não definida no .env");
}

let db;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/uploads');
    },

    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

const upload = multer({ storage });

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'assets')));
app.use('/uploads', express.static(path.join(__dirname, 'assets/uploads')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: process.env.SESSION_SECRET || 'saa_secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: MONGODB_URI,
        dbName: DB_NAME
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

function requireAuth(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    }

    res.redirect('/login');
}

app.get('/login', (req, res) => {
    const ok = req.query.ok === '1';
    res.render('login', { error: null, ok, values: null });
});

app.post('/login', async (req, res) => {
    const email = (req.body.email || '').trim().toLowerCase();
    const senha = req.body.password || '';

    const values = { email, senha };

    if (!email || !senha) {
        return res.render('login', {
            error: 'Preencha email e senha',
            ok: false,
            values
        });
    }

    try {
        const user  = await db.collection('users').findOne({ email });

        if (!user) {
            return res.render('login', {
                error: 'Usuário não encontrado',
                ok: false,
                values
            });
        }

        const senhaCorreta = await bcrypt.compare(senha, user.passwordHash);

        if (!senhaCorreta) {
            return res.render('login', {
                error: 'Senha incorreta',
                ok: false,
                values
            });
        }

        req.session.user = {
            id: user._id,
            nome: user.nome,
            email: user.email
        };

        return res.redirect('/');

    } catch (err) {
        console.error(err);
        return res.render('login', {
            error: 'Erro ao fazer login',
            ok: false,
            values
        });
    }
});

app.get('/cadastre-se', (req, res) => {
    const ok = req.query.ok === '1';
    res.render('cadastre-se', { error: null, ok, values: null });
})

app.post('/cadastre-se', async (req, res) => {
    const nome = (req.body.name || '').trim();
    const email = (req.body.email || '').trim().toLowerCase();
    const senha = req.body.password || '';
    const confirmarSenha = req.body['password-confirmation'] || '';

    const values = { nome, email };

    if (!nome || !email || !senha) {
        return res.status(400).render('cadastre-se', {
            error: 'Preencha nome, e-mail e senha.',
            ok: false,
            values
        });
    }

    if (senha !== confirmarSenha) {
        return res.status(400).render('cadastre-se', {
            error: 'As senhas não coincidem.',
            ok: false,
            values
        });
    }
    
    // if (senha.length < 6) {
    if (senha.length < 8) {
        return res.status(400).render('cadastre-se', {
            error: 'A senha deve ter pelo menos 6 caracteres.',
            ok: false,
            values
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
        return res.redirect('/index?ok=1');
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).render('cadastre-se', {
                error: 'Este e-mail já está cadastrado.',
                ok: false,
                values
            });
        }
        console.error(err);
        return res.status(500).render('cadastre-se', {
            error: 'Não foi possível concluir o cadastro. Tente novamente.',
            ok: false,
            values
        });
    }
});

app.get('/', async (req, res) => {
    try {
        const ok = req.query.ok === '1';
        const inclusoes = await db
            .collection('inclusoes')
            .find()
            .sort({ avaliacao: -1 })
            .limit(6)
            .toArray();
        res.render('index', { ok, inclusoes });
    } catch (err) {
        console.error(err);
        res.send('Erro ao carregar inclusões');
    }
});

app.get('/sobre', (req, res) => {
    res.render('sobre')
})

app.get('/encontre-suporte', (req, res) => {
    res.render('encontre-suporte')
})

app.get('/sessenta-anos-ou-mais', (req, res) => {
    res.render('sessenta-anos-ou-mais')
})

app.get('/deficiente-auditivo', (req, res) => {
    res.render('deficiente-auditivo')
})

app.get('/deficiente-fisico-ou-motoro', (req, res) => {
    res.render('deficiente-fisico-ou-motoro')
})

app.get('/servicos', (req, res) => {
    res.render('servicos');
});

app.get('/inclusao', (req, res) => {
    const ok = req.query.ok === '1';
    res.render('inclusao', { error: null, ok, values: {} });
})

app.post('/inclusao', upload.single('image'), async (req, res) => {
    const imagem = req.file ? `/uploads/${req.file.filename}` : ''; 
    const nome = (req.body.name || '').trim();
    const bairro = (req.body.neighborhood || '');
    const data = (req.body.date || '');
    const avaliacao = (req.body.rating || '');
    const mensagem = (req.body.message || '').trim();
    
    const values = { imagem, nome, bairro, data, avaliacao, mensagem };
    
    if (!req.session.user) {
        return res.status(401).render('inclusao', {
            error: 'Você precisa estar logado para cadastrar um local.',
            ok: false,
            values: req.body
        });
    }

    if (!nome || !bairro || !data || !avaliacao || !mensagem || !imagem) {
        return res.status(400).render('inclusao', {
            error: 'Preencha imagem, nome, data, avaliação e mensagem.',
            ok: false,
            values: req.body,
        });
    }
    
    if (mensagem.length > 1000) {
        return res.status(400).render('inclusao', {
            error: 'Tamanho máximo de 1000 caracteres atingido.',
            ok: false,
            values,
        });
    }

    try {
        await db.collection('inclusoes').insertOne({
            imagem,
            nome,
            bairro,
            data,
            // data.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' }),
            avaliacao,
            mensagem,
            idUsuario: new ObjectId(req.session.user.id),

        });
        return res.redirect('/servicos?ok=1');
    } catch (err) {
        console.error(err);
        return res.status(500).render('inclusao', {
            error: 'Não foi possível concluir o cadastro da inclusão. Tente novamente.',
            ok: false,
            values,
        });
    }
});

app.get('/inclusao/editar/:id', requireAuth, async (req, res) => {
    try {
        const inclusao = await db.collection('inclusoes').findOne({ _id: new ObjectId(req.params.id), idUsuario: new ObjectId(req.session.user.id) });
        if (!inclusao) {
            return res.status(403).send('Sem permissão.');
        }
        res.render('inclusao', {
            values: inclusao,
            error: null 
        });
    } catch {
        res.status(404).send('Inclusão não encontrada.');
    }
});

app.post('/inclusao/editar/:id', requireAuth, upload.single('image'), async (req, res) => {
    const nome = (req.body.name || '').trim();
    const bairro = (req.body.neighborhood || '');
    const data = (req.body.date || '');
    const avaliacao = (req.body.rating || '');
    const mensagem = (req.body.message || '').trim();

    if (!nome || !bairro || !data || !avaliacao || !mensagem) {
        return res.status(400).render('inclusao', {
            error: 'Preencha imagem, nome, data, avaliação e mensagem.',
            ok: false,
            values: req.body,
        });
    }

    const atualizarDados = {
        nome,
        bairro,
        data,
        avaliacao,
        mensagem,
        updatedAt: new Date()
    };

    if (req.file) {
        atualizarDados.imagem = `/uploads/${req.file.filename}`;
    }

    try {
        await db.collection('inclusoes').updateOne(
            { _id: new ObjectId(req.params.id), idUsuario: new ObjectId(req.session.user.id) },
            { $set: atualizarDados }
        );
        // res.redirect(`/inclusao/${req.params.id}`);
        res.redirect(`/listagem-inclusoes/${req.params.id}`);
    } catch {
        res.status(500).send('Erro ao editar inclusão.');
    }
});

app.post('/inclusao/deletar/:id', requireAuth, async (req, res) => {
    try {
        await db.collection('notificacoes').deleteOne({ _id: new ObjectId(req.params.id), idUsuario: new ObjectId(req.session.user.id) });
        res.redirect('/perfil');
    } catch {
        res.status(500).send('Erro ao deletar inclusão.');
    }
});

app.get('/listagem-inclusoes', async (req, res) => {
    try {
        const inclusoes = await db.collection('inclusoes').find().toArray();

        res.render('listagem-inclusoes', { inclusoes });
    } catch (err) {
        console.error(err);
        res.send('Erro ao carregar inclusões');
    }
});

app.get('/listagem-inclusoes/:id', async (req, res) => {
    try {
        const inclusao = await db.collection('inclusoes').findOne({ _id: new ObjectId(req.params.id) });
        if (!inclusao) {
            return res.status(404).send('Inclusão não encontrada.');
        }
        res.render('inclusao-detalhe', { inclusao, id: req.params.id });
    } catch {
        res.status(404).send('Inclusão não encontrada.');
    }
});

app.get('/notificacao', (req, res) => {
    const ok = req.query.ok === '1';
    res.render('notificacao', { error: null, ok, values: null, values: {} });
})

app.post('/notificacao', upload.single('image'), async (req, res) => {
    const imagem = req.file ? `/uploads/${req.file.filename}` : '';
    const nome = (req.body.name || '').trim();
    const bairro = (req.body.neighborhood || '');
    const data = (req.body.date || '');
    const avaliacao = (req.body.rating || '');
    const mensagem = (req.body.message || '').trim().toLowerCase();

    const values = { nome, imagem };

    if (!req.session.user) {
        return res.status(401).render('notificacao', {
            error: 'Você precisa estar logado para cadastrar um local.',
            ok: false,
            values: req.body
        });
    }

    if (!nome || !bairro || !data || !avaliacao || !mensagem || !imagem) {
        return res.status(400).render('notificacao', {
            error: 'Preencha imagem, nome, data, avaliação e mensagem.',
            ok: false,
            values,
        });
    }
    
    if (mensagem.length > 1000) {
        return res.status(400).render('notificacao', {
            error: 'Tamanho máximo de 1000 caracteres atingido.',
            ok: false,
            values,
        });
    }

    try {
        await db.collection('notificacoes').insertOne({
            imagem,
            nome,
            bairro,
            data,
            avaliacao,
            mensagem,
            idUsuario: new ObjectId(req.session.user.id)
        });
        return res.redirect('/servicos?ok=1');
    } catch (err) {
        console.error(err);
        return res.status(500).render('notificacao', {
            error: 'Não foi possível concluir o cadastro da inclusão. Tente novamente.',
            ok: false,
            values,
        });
    }
});

app.get('/notificacao/editar/:id', requireAuth, async (req, res) => {
    try {
        const notificacao = await db.collection('notificacoes').findOne({ _id: new ObjectId(req.params.id), idUsuario: new ObjectId(req.session.user.id) });
        if (!notificacao) {
            return res.status(403).send('Sem permissão.');
        }
        res.render('notificacao', {
            values: notificacao,
            error: null 
        });
    } catch {
        res.status(404).send('Notificação não encontrada.');
    }
});

app.post('/notificacao/editar/:id', requireAuth, upload.single('image'), async (req, res) => {
    const nome = (req.body.name || '').trim();
    const bairro = (req.body.neighborhood || '');
    const data = (req.body.date || '');
    const avaliacao = (req.body.rating || '');
    const mensagem = (req.body.message || '').trim();

    if (!nome || !bairro || !data || !avaliacao || !mensagem) {
        return res.status(400).render('notificacao', {
            error: 'Preencha imagem, nome, data, avaliação e mensagem.',
            ok: false,
            values: req.body,
        });
    }

    const atualizarDados = {
        nome,
        bairro,
        data,
        avaliacao,
        mensagem,
        updatedAt: new Date()
    };

    if (req.file) {
        atualizarDados.imagem = `/uploads/${req.file.filename}`;
    }

    try {
        await db.collection('notificacoes').updateOne(
            { _id: new ObjectId(req.params.id), idUsuario: new ObjectId(req.session.user.id) },
            { $set: atualizarDados }
        );
        // res.redirect(`/notificacao/${req.params.id}`);
        res.redirect(`/listagem-notificacoes/${req.params.id}`);
    } catch {
        res.status(500).send('Erro ao editar notificação.');
    }
});

app.post('/notificacao/deletar/:id', requireAuth, async (req, res) => {
    try {
        await db.collection('notificacoes').deleteOne({ _id: new ObjectId(req.params.id), idUsuario: new ObjectId(req.session.user.id) });
        res.redirect('/perfil');
    } catch {
        res.status(500).send('Erro ao deletar notificação.');
    }
});

app.get('/listagem-notificacoes', async (req, res) => {
    try {
        const notificacoes = await db.collection('notificacoes').find().toArray();

        res.render('listagem-notificacoes', { notificacoes });
    } catch (err) {
        console.error(err);
        res.send('Erro ao carregar inclusões.');
    }
})

app.get('/listagem-notificacoes/:id', async (req, res) => {
    try {
        const notificacao = await db.collection('notificacoes').findOne({ _id: new ObjectId(req.params.id) });
        if (!notificacao) {
            return res.status(404).send('Notificação não encontrada.');
        }
        res.render('notificacao-detalhe', { notificacao, id: req.params.id });
    } catch {
        res.status(404).send('Notificação não encontrada.');
    }
});

app.get('/contato', (req, res) => {
    res.render('contato')
})

app.get('/acessibilidade', (req, res) => {
    res.render('acessibilidade')
})

app.get('/perfil', async (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    const inclusoes = await db.collection('inclusoes').find({ idUsuario: new ObjectId(req.session.user.id) }).toArray();
    const notificacoes = await db.collection('notificacoes').find({ idUsuario: new ObjectId(req.session.user.id) }).toArray();
    res.render('perfil',  { inclusoes, notificacoes })
})

app.get('/perfil/editar/:id', requireAuth, async (req, res) => {
    try {
        const usuario = await db.collection('users').findOne({ _id: new ObjectId(req.params.id), _id: new ObjectId(req.session.user.id) });
        if (!usuario) {
            return res.status(403).send('Sem permissão.');
        }
        res.render('usuario', {
            values: usuario,
            error: null 
        });
    } catch {
        res.status(404).send('Usuário não encontrado.');
    }
});

app.post('/perfil/editar/:id', requireAuth, upload.single('image'), async (req, res) => {
    const nome = (req.body.name || '').trim();
    const email = (req.body.email || '');

    if (!nome || !email) {
        return res.status(400).render('user', {
            error: 'Nome e e-mail não cadastrados.',
            ok: false,
            values: req.body,
        });
    }

    try {
        await db.collection('users').updateOne({
            _id: new ObjectId(req.params.id),
            idUsuario: new ObjectId(req.session.user.id) }, {
                $set: { nome, email }
            }
        );

        res.redirect(`/perfil/${req.params.id}`);
    } catch {
        res.status(500).send('Erro ao editar perfil.');
    }
});

app.post('/perfil/deletar/:id', requireAuth, async (req, res) => {
    try {
        await db.collection('users').deleteOne({
            _id: new ObjectId(req.params.id),
            // idUsuario: new ObjectId(req.session.user.id)
        });

        res.redirect('/perfil');
    } catch {
        res.status(500).send('Erro ao excluir conta.');
    }
});

app.get('/sair', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

async function main() {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db(DB_NAME);
    await db.collection('users').createIndex({ email: 1 }, { unique: true });

    app.listen(3000, () => {
        console.log("Running at http://localhost:" + port);
    });
}

main().catch((err) => {
    console.error('Falha ao iniciar:', err);
    process.exit(1);
});