const express = require('express');
const router = express.Router();
const { getTickets, addTicket, patchTicket } = require('../controllers/ticketController');

router.get('/', getTickets);
router.post('/', addTicket);
router.post('/update', patchTicket);

module.exports = router;
