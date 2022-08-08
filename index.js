import express from 'express';
const app = express();
app.use(express.json());

const dbDica = [];

// pegar uma dica aleatória
app.get('/tips', (_, res) => {
	const tip = dbDica[Math.floor(Math.random() * dbDica.length)];
	if (!tip) return res.status(404).send('Nenhuma dica encontrada.');
	res.send(tip);
});

/* criar uma dica - ex: 
	{
		"tip": "dica criada"
	}
*/
app.post('/create', (req, res) => {
	const createTip = {
		id: dbDica.length + 1,
		tip: req.body.tip,
	};
	dbDica.push(createTip);
	res.send(dbDica);
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`iniciado em ${port}`));
