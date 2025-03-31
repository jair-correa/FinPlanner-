
// src/pages/Transactions.tsx
import React, { useState } from "react";
import { Card } from "../components/Card";
import { transactions, months, categories } from "../data/data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export const Transactions: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState("Março");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredTransactions = transactions.filter(
    (tx) => tx.month === selectedMonth && (selectedCategory === "" || tx.category === selectedCategory)
  );

  const groupedData = filteredTransactions.reduce((acc, tx) => {
    const found = acc.find((item) => item.category === tx.category);
    if (found) {
      found.amount += tx.amount;
    } else {
      acc.push({ category: tx.category, amount: tx.amount });
    }
    return acc;
  }, [] as { category: string; amount: number }[]);

  return (
    <div>
      <Card>
        <h2>Filtrar Transações</h2>
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          {months.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Todas as Categorias</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </Card>
      <Card>
        <h2>Transações</h2>
        <ul>
          {filteredTransactions.map((tx) => (
            <li key={tx.id}>{tx.category}: R$ {tx.amount.toFixed(2)} ({tx.type})</li>
          ))}
        </ul>
      </Card>
      <Card>
        <h2>Gráfico de Transações</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={groupedData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};