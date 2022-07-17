import React from 'react';
import './App.css';
import DisplayList from './components/DisplayList';
import Filter from './components/Filter';
import Header from './components/Header';
import ItemContextProvider from './store/ItemContextProvider';

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <Header></Header>

        <ItemContextProvider>
          <Filter></Filter>
          <DisplayList></DisplayList>
        </ItemContextProvider>
      </div>
    </div>
  );
}

export default App;
