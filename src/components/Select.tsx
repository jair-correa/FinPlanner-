import React from 'react';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ value, onChange }) => {
  return (
    <div className="select-wrapper">
      <label htmlFor="month-select">Selecione o Mês:</label>
      <select id="month-select" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="Janeiro">Janeiro</option>
        <option value="Fevereiro">Fevereiro</option>
        <option value="Março">Março</option>
        <option value="Abril">Abril</option>
        <option value="Maio">Maio</option>
        {/* Adicione mais opções conforme necessário */}
      </select>
    </div>
  );
};
