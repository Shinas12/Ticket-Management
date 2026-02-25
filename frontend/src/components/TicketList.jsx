import { updateTicketStatus } from '../api/ticketApi';

const PRIORITY_CLASS = {
    Low: 'badge badge-low',
    Medium: 'badge badge-medium',
    High: 'badge badge-high',
};

const STATUS_CLASS = {
    NEW: 'badge badge-new',
    INVESTIGATING: 'badge badge-investigating',
    RESOLVED: 'badge badge-resolved',
};

export default function TicketList({ tickets, onStatusChange }) {
    const handleStatus = async (id, status) => {
        try {
            await updateTicketStatus(id, status);
            onStatusChange();
        } catch {
            alert('Failed to update status.');
        }
    };

    if (tickets?.length === 0) {
        return (
            <div className="card">
                <h2>All Tickets</h2>
                <p className="empty">No tickets yet. Create one above!</p>
            </div>
        );
    }

    return (
        <div className="card">
            <h2>All Tickets</h2>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket) => (
                            <tr key={ticket.id}>
                                <td>{ticket.subject}</td>
                                <td>
                                    <span className={PRIORITY_CLASS[ticket.priority]}>{ticket.priority}</span>
                                </td>
                                <td>
                                    <span className={STATUS_CLASS[ticket.status]}>{ticket.status}</span>
                                </td>
                                <td>{ticket.createdAt}</td>
                                <td>
                                    <select
                                        value={ticket.status}
                                        onChange={(e) => handleStatus(ticket.id, e.target.value)}
                                    >
                                        <option value="NEW">NEW</option>
                                        <option value="INVESTIGATING">INVESTIGATING</option>
                                        <option value="RESOLVED">RESOLVED</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
