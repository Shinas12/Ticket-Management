const { createTicket, getAllTickets, updateTicketStatus } = require('../models/ticketModel');

const VALID_STATUSES = ['NEW', 'INVESTIGATING', 'RESOLVED'];

// ─── GET /api/tickets ───────────────────────────────────────────────
const getTickets = (req, res) => {
    try {
        const tickets = getAllTickets();
        res.json(tickets);
    } catch (err) {
        console.error('[GET] /api/tickets - Error:', err.message);
        res.status(500).json({ error: 'Internal server error while fetching tickets.' });
    }
};

// ─── POST /api/tickets ──────────────────────────────────────────────
const addTicket = (req, res) => {
    try {
        const { subject, message, priority } = req.body;

        if (!subject || !message || !priority) {
            return res.status(400).json({ error: 'subject, message, and priority are required.' });
        }

        const ticket = createTicket({ subject, message, priority });
        res.status(201).json(ticket);
    } catch (err) {
        console.error('[POST] /api/tickets - Error:', err.message);
        res.status(500).json({ error: 'Internal server error while creating ticket.' });
    }
};

const patchTicket = (req, res) => {
    try {
        const { status, id } = req.body;

        if (!VALID_STATUSES.includes(status)) {
            return res.status(400).json({ error: `status must be one of: ${VALID_STATUSES.join(', ')}` });
        }

        const ticket = updateTicketStatus(id, status);
        if (!ticket) {
            return res.status(404).json({ error: 'Ticket not found.' });
        }

        res.json(ticket);
    } catch (err) {
        console.error(`[PATCH] /api/tickets/${req.params.id} - Error:`, err.message);
        res.status(500).json({ error: 'Internal server error while updating ticket.' });
    }
};

module.exports = { getTickets, addTicket, patchTicket };
