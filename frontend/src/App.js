// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BudgetHome from './components/Budget-Planning/Budget/BudgetHome';
import AddBudget from './components/Budget-Planning/Add Budget/AddBudget';
import Budgets from './components/Budget-Planning/Budget/Budgets';
import PostHome from './components/Add-Post/Post/PostHome';
import AddPost from './components/Add-Post/Add Post/AddPost';
import Posts from './components/Add-Post/Post/Posts';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          {/* Budget Routes */}
          <Route exact path="/" element={<BudgetHome />} />
          <Route exact path="/addbudget" element={<AddBudget />} />
          <Route exact path="/budgets" element={<Budgets />} />

          {/* Post Routes */}
          <Route exact path="/postHome" element={<PostHome />} />
          <Route exact path="/addpost" element={<AddPost />} />
          <Route exact path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
