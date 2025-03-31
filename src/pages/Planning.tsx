
// src/pages/Planning.tsx
import React, { useState } from "react";
import { Card } from "../components/Card";

export const Planning: React.FC = () => {
  const [suggestion, setSuggestion] = useState("Clique para gerar uma sugestão de planejamento financeiro");

  const generateSuggestion = async () => {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer SUA_CHAVE_OPENAI`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        prompt: "Sugira uma estratégia de planejamento financeiro para um usuário com base nos últimos meses de transações.",
        max_tokens: 100,
      }),
    });
    const data = await response.json();
    setSuggestion(data.choices[0].text);
  };

  return (
    <Card>
      <h2>Planejamento Inteligente</h2>
      <p>{suggestion}</p>
      <button onClick={generateSuggestion}>Gerar Sugestão</button>
    </Card>
  );
};
