const router = require('express').Router();

const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/dbproject.db3'
  }
}

const db = knex(knexConfig);

//check
router.get('/', async (req, res) => {
  try {
    const projects = await db('projects');
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const [id] = await db('projects').insert(req.body);
    const project = await db('projects')
      .where({ id })
      .first()
      res.status(201).json(project)
  } catch (error) {
    res.status(500).json({ error: "there was an error posting that!" })
  }
});


module.exports = router;