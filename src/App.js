import React from 'react';
import { Component } from 'react';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Posts from './components/postsComponent/posts';
import Search from './components/searchComponent/search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Posts />
    </div>
  );
}

export default App;
