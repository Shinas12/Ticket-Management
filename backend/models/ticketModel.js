const { v4: uuidv4 } = require('uuid');

// In-memory store
let tickets = [];

function createTicket({ subject, message, priority }) {
    const ticket = {
        id: uuidv4(),
        subject,
        message,
        priority,
        status: 'NEW',
        createdAt: new Date().toISOString().split('T')[0],
    };
    tickets.push(ticket);
    return ticket;
}

function getAllTickets() {
    return tickets;
}

function updateTicketStatus(id, status) {
    const ticket = tickets.find((t) => t.id === id);
    if (!ticket) return null;
    ticket.status = status;
    return ticket;
}

module.exports = { createTicket, getAllTickets, updateTicketStatus };
