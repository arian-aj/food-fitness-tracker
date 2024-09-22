import { useState, useEffect } from 'react';

export default function HomePage() {
    const [name, setName] = useState('');
    const [newName, setNewName] = useState('');

    // Check localStorage for name on component mount
    useEffect(() => {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setName(storedName);
        }
    }, []);

    // Handle setting the new name and storing it in localStorage
    const handleSaveName = () => {
        if (newName.trim()) {
            localStorage.setItem('userName', newName);
            setName(newName);
            setNewName('');
        }
    };

    // Handle resetting the name and removing it from localStorage
    const handleResetName = () => {
        localStorage.removeItem('userName');
        setName('');
    };

    return (
        <>
            <h1>HomePage</h1>
            {!name ? (
                <div>
                    <label htmlFor="name">Enter your name:</label>
                    <input
                        type="text"
                        id="name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="border p-2"
                    />
                    <button
                        onClick={handleSaveName}
                        className="bg-blue-500 text-white px-4 py-2 ml-2"
                    >
                        Save Name
                    </button>
                </div>
            ) : (
                <div>
                    <h2>Welcome, {name}!</h2>
                    <button
                        onClick={handleResetName}
                        className="bg-red-500 text-white px-4 py-2 mt-4"
                    >
                        Reset Name
                    </button>
                </div>
            )}
        </>
    );
}
