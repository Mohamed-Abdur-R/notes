import { useState } from "react";

export default function NotesPage() {
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");

  const submitNote = async () => {
    if (!note.trim()) {
      setStatus("Note cannot be empty");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/notes", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: note,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setStatus(`Saved with id ${data.id}`);
      setNote("");
    } catch {
      setStatus("Error saving note");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Create Note</h2>

      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter note"
      />

      <br /><br />

      <button onClick={submitNote}>Submit</button>

      {status && <p>{status}</p>}
    </div>
  );
}
