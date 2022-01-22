const { Router } = require('express');

const api = require('./api/notes.js');
const view = require('./view');

const router = Router();

router.use('/api/notes', api);
router.use('/', view);

module.exports = router;
