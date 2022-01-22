const { Router } = require('express');

const { renderHome, renderNotes } = require('../../controllers/view');

const router = Router();

router.get('/notes', renderNotes);
router.get('*', renderHome);

module.exports = router;
