import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Commom/Header';
import Footer from '../Commom/Footer';
import Create from '../Book/Create';
import List from '../Book/List';
import Detail from '../Book/Detail';
import Update from '../Book/Update';

function ShowList() {
  return (
    <div className="container">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/create" element={<Create />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/update" element={<Update />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default ShowList;
