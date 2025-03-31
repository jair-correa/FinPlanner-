import React, { useState } from 'react';

export const AddTransaction: React.FC = () => {
  const [type, setType] = useState<'Despesa' | 'Receita'>('Despesa');
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para adicionar a transação
    console.log({ type, amount, category });
  };

  return (
    <div className="add-transaction">
      <h2>Adicionar Transação</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div>
          <label htmlFor="type">Tipo:</label>
          <select id="type" value={type} onChange={(e) => setType(e.target.value as 'Despesa' | 'Receita')}>
            <option value="Despesa">Despesa</option>
            <option value="Receita">Receita</option>
          </select>
        </div>

        <div>
          <label htmlFor="amount">Valor:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
          />
        </div>

        <div>
          <label htmlFor="category">Categoria:</label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};
