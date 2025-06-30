// src/pages/api/agrochat.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:3000", // required by OpenRouter
        "X-Title": "AgroBot", // optional project name
      },
      body: JSON.stringify({
  model: "mistralai/mistral-7b-instruct", // ✅ use a model you've accepted
  messages: [
    { role: "system", content: "You are a helpful agriculture assistant." },
    { role: "user", content: query },
  ],
}),

    });

    const data = await response.json();
    console.log("✅ OpenRouter API:", JSON.stringify(data, null, 2));

    const reply = data?.choices?.[0]?.message?.content;

    if (!reply) {
      return res.status(200).json({ reply: "⚠️ No response from model." });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("🔥 OpenRouter API Error:", error);
    return res.status(500).json({ error: "Failed to contact OpenRouter API" });
  }
}
