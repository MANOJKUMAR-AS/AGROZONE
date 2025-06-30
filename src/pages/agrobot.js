import { useState } from "react";

export default function AgroBot() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setResponse("");

    const res = await fetch("/api/agrochat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: input }),
    });

    const data = await res.json();
    setResponse(data.reply || "No response received");
    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>🌾 AgroBot</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a farming question..."
        rows={4}
        style={{ width: "100%", padding: "1rem", marginBottom: "1rem" }}
      />
      <button onClick={handleSubmit} style={{ padding: "0.5rem 1rem" }}>
        Ask
      </button>
      {loading && <p>⏳ Getting response...</p>}
      {response && (
        <div style={{ marginTop: "1rem", background: "#eee", padding: "1rem" }}>
          <strong>Answer:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
