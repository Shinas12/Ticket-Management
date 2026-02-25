import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/tickets';

export const getTickets = () => axios.get(BASE_URL);

export const createTicket = (data) => axios.post(BASE_URL, data);

export const updateTicketStatus = (id, status) =>
    axios.post(`${BASE_URL}/update`, { id, status });
