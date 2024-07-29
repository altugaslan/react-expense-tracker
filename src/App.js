import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';
import styled from 'styled-components';
import WalletButton from './components/WalletButton';
//import { UserProvider } from './context/UserContext';


const WalletButtonContainer = styled.div`
  position:absolute;
  top:10px;
  right:10px;
  z-index:1;
`;

function App() {
  return (
    <GlobalProvider>
      
      <Header />
      <div className="container">
        <WalletButtonContainer>
          <WalletButton/>
        </WalletButtonContainer>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      
    </GlobalProvider>
  );
}

export default App;
