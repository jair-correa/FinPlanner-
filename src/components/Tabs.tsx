//import React from 'react';
//import { Link } from 'react-router-dom';
//
//interface TabProps {
//  value: string;
//  label: string;
//}
//
//export const Tabs: React.FC = () => {
//  return (
//    <div className="tabs">
//      <ul>
//        <li>
//          <Link to="/">Main</Link>
//        </li>
//        <li>
//          <Link to="/transactions">Transactions</Link>
//        </li>
//        <li>
//          <Link to="/add">Add Transaction</Link>
//        </li>
//        <li>
//          <Link to="/planning">Planning</Link>
//        </li>
//        <li>
//          <Link to="/more">More</Link>
//        </li>
//      </ul>
//    </div>
//  );
//};
//

import React from 'react';
import { Link } from 'react-router-dom';

interface TabProps {
  value: string;
  label: string;
}

interface TabsProps {
  tabs: TabProps[]; // Recebe um array de objetos TabProps
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  return (
    <div className="tabs">
      <ul>
        {tabs.map((tab) => (
          <li key={tab.value}>
            <Link to={`/${tab.value}`}>{tab.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
