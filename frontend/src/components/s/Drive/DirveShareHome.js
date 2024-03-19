// BudgetHome.js
import React from 'react';
import { Link } from 'react-router-dom';

const DirveShareHome = () => {
  return (
    <div>
      <h2>Welcome to SHE-DriveShare</h2>
      <div>
        <Link to="/adddrive">
          <button>Add New Drive</button>
        </Link>
      </div>
      <div>
        <Link to="/mydrives">
          <button>View My Drives</button>
        </Link>
      </div>
    </div>
  );
};

export default DirveShareHome;
