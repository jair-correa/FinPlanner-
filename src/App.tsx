//// src/App.tsx
//import React, { useState } from "react";
//import { Tabs } from "./components/Tabs";
//import { Main } from "./pages/Main";
//import { Transactions } from "./pages/Transactions";
//import { AddTransaction } from "./pages/AddTransaction";
//import { Planning } from "./pages/Planning";
//import { More } from "./pages/More";
//import { Select } from "./components/Select";
//
//const App: React.FC = () => {
//  const [selectedMonth, setSelectedMonth] = useState("Março");
//
//  return (
//    <div>
//      <Select value={selectedMonth} onChange={setSelectedMonth} />
//      <Tabs>
//        <Main value="main" label="Main" />
//        <Transactions value="transactions" label="Transactions" />
//        <AddTransaction value="add" label="Add" />
//        <Planning value="planning" label="Planning" />
//        <More value="more" label="More" />
//      </Tabs>
//    </div>
//  );
//};
//
//export default App;


/*2*/
//import React, { useState } from "react";
//import { Tabs } from "./components/Tabs";
//import { Main } from "./pages/Main";
//import { Transactions } from "./pages/Transactions";
//import { AddTransaction } from "./pages/AddTransaction";
//import { Planning } from "./pages/Planning";
//import { More } from "./pages/More";
//
//const App: React.FC = () => {
//  const [selectedMonth, setSelectedMonth] = useState("Março");
//
//  const tabs = [
//    { value: "main", label: "Main" },
//    { value: "transactions", label: "Transactions" },
//    { value: "add", label: "Add Transaction" },
//    { value: "planning", label: "Planning" },
//    { value: "more", label: "More" },
//  ];
//
//  return (
//    <div>
//      <Tabs tabs={tabs} />
//      {/* Aqui você pode renderizar os outros componentes conforme a rota selecionada */}
//    </div>
//  );
//};
//
//export default App;

/*3*/
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Tabs } from "./components/Tabs";
import { Main } from "./pages/Main";
import { Transactions } from "./pages/Transactions";
import { AddTransaction } from "./pages/AddTransaction";
import { Planning } from "./pages/Planning";
import More from "./pages/More";

const App: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState("Março");

  const tabs = [
    { value: "main", label: "Main" },
    { value: "transactions", label: "Transactions" },
    { value: "add", label: "Add Transaction" },
    { value: "planning", label: "Planning" },
    { value: "more", label: "More" },
  ];

  // Função para alterar o mês selecionado
  const handleMonthChange = () => {
    setSelectedMonth("Abril");
  };

  return (
    <Router>
      <div>
        <Tabs tabs={tabs} />
        <p>Mês Selecionado: {selectedMonth}</p> {/* Exibe o mês selecionado */}

        {/* Botão para mudar o mês */}
        <button onClick={handleMonthChange}>Mudar para Abril</button>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/add" element={<AddTransaction />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

