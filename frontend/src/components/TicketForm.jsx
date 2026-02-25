import { useState } from 'react';
import { createTicket } from '../api/ticketApi';

export default function TicketForm({ onTicketCreated }) {
    const [form, setForm] = useState({ subject: '', message: '', priority: 'Low' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!form.subject.trim() || !form.message.trim()) {
            setError('Subject and message are required.');
            return;
        }
        try {
            setLoading(true);
            await createTicket(form);
            setForm({ subject: '', message: '', priority: 'Low' });
            onTicketCreated();
        } catch (err) {
            setError('Failed to create ticket. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <h2>Create Ticket</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Subject</label>
                <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Brief description of the issue"
                />

                <label>Message</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the issue in detail"
                />

                <label>Priority</label>
                <select name="priority" value={form.priority} onChange={handleChange}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Ticket'}
                </button>
            </form>
        </div>
    );
}
