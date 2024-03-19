import React from 'react';
import { Link } from 'react-router-dom';

const BudgetHome = () => {
  return (
    <div>
      <h2>Welcome to Budget Home Page</h2>
      <div>
        <Link to="/addbudget">
          <button>Add New Budget</button>
        </Link>
      </div>
      <div>
        <Link to="/budgets">
          <button>View Budgets</button>
        </Link>
      </div>
    </div>
  );
};

export default BudgetHome;
