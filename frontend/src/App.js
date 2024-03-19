// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AddStock from './components/Stock-Managing/Add Stock/AddStock';
import Stocks from './components/Stock-Managing/Stock/Stocks';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          {/* Budget Routes */}
          
          <Route exact path="/" element={<AddStock />} />
          <Route exact path="/stocks" element={<Stocks />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
