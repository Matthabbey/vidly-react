import React, {Component } from 'react';
import './App.css';
import Pagination from './component/pagination';
import Movies from './movies';


function App() {
  return (
    <main className='container'>
        <Movies />
    </main>
  );
}

export default App;
