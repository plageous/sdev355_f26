import { useState } from 'react';

export default function AddBook({ onAdd }) {
    const [draft, setDraft] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (draft.trim() === "") return;
        onAdd(draft.trim());
        setDraft("");
    }

    return (
        <div className="add">
            <input type="text"
                className="add-input"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
            />
            <button
                className="add-button"
                onClick={() => onAdd(draft)}
            >Add</button>
        </div>
        
    )
}