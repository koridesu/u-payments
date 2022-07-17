import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem';
import DisplayList from './components/DisplayList';
import Header from './components/Header';
import CreateForm from './components/pages/CreateForm';
import ItemContextProvider from './store/ItemContextProvider';

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <Header></Header>
        <ItemContextProvider>
          <Routes>
            <Route
              path='/homepage'
              element={
                <Fragment>
                  <DisplayList></DisplayList>
                  <AddItem />
                </Fragment>
              }
            ></Route>
            <Route
              path='/createpage'
              element={<CreateForm></CreateForm>}
            ></Route>
          </Routes>
        </ItemContextProvider>
      </div>
    </div>
  );
}

export default App;
