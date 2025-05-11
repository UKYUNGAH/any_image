import { useState, FormEvent } from 'react';

export default function BasicForm() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string>('');

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();

        fetch('https://formcarry.com/s/NxZf6f07Kzj', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.code === 200) {
                    alert('We received your submission, thank you!');
                } else if (response.code === 422) {
                    setError(response.message);
                } else {
                    setError(response.message);
                }
            })
            .catch((error: unknown) => {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError(String(error));
                }
                console.error(error);
            });
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="formcarry-block">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="Your first and last name"
                />
            </div>

            <div className="formcarry-block">
                <label htmlFor="email">Your Email Address</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="john@doe.com"
                />
            </div>

            <div className="formcarry-block">
                <label htmlFor="message">Your message</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    placeholder="Enter your message..."
                ></textarea>
            </div>

            {error && (
                <div className="formcarry-block" style={{ color: 'red' }}>
                    {error}
                </div>
            )}

            <div className="formcarry-block">
                <button type="submit">Send</button>
            </div>
        </form>
    );
}
