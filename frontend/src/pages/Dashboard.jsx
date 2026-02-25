import { useState, useEffect, useCallback } from 'react';
import TicketForm from '../components/TicketForm';
import TicketList from '../components/TicketList';
import { getTickets } from '../api/ticketApi';

export default function Dashboard() {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchTickets = useCallback(async () => {
        try {
            setLoading(true);
            const res = await getTickets();
            setTickets(res.data);
            setError('');
        } catch {
            setError('Failed to load tickets.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTickets();
    }, [fetchTickets]);

    return (
        <div className="dashboard">
            <header className="header">
                <div className="header-inner">
                    <h1>🎫 Support Tickets</h1>
                    <p>Manage and track merchant support requests</p>
                </div>
            </header>

            <main className="main">
                <TicketForm onTicketCreated={fetchTickets} />

                {loading && <p className="loading">Loading tickets...</p>}
                {error && <p className="error">{error}</p>}
                {!loading && !error && (
                    <TicketList tickets={tickets} onStatusChange={fetchTickets} />
                )}
            </main>
        </div>
    );
}
