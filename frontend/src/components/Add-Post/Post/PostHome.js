// BudgetHome.js
import React from 'react';
import { Link } from 'react-router-dom';

const BudgetHome = () => {
  return (
    <div>
      <h2>Welcome to Budget Home Page</h2>
      <div>
        <Link to="/addpost">
          <button>Add New Post</button>
        </Link>
      </div>
      <div>
        <Link to="/posts">
          <button>View Posts</button>
        </Link>
      </div>
    </div>
  );
};

export default BudgetHome;
