
// src/pages/Main.tsx
import React from "react";
import { Card } from "../components/Card";
import { bankData } from "../data/data";

export const Main: React.FC = () => {
  return (
    <div>
      <Card>
        <h2>Bancos e Balancetes</h2>
        <ul>
          {bankData.map((bank) => (
            <li key={bank.id}>{bank.name}: R$ {bank.balance.toFixed(2)}</li>
          ))}
        </ul>
      </Card>
      <Card>
        <h2>Planejamento e Balanço Mensal</h2>
        <p>Visão geral do planejamento financeiro</p>
      </Card>
    </div>
  );
};