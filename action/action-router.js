
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
    const action = await db('actions');
    res.status(200).json(action)
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req,res) => {
  try {
    const action = await db('actions').insert(req.body)
      .where({ id })
      .first()
      res.status(201).json(action)
  } catch (error) {
    res.status(500).json({ error: 'there was an error posting that' })
  }
});

module.exports = router;