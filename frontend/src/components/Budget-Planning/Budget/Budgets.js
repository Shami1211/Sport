import React, { useEffect, useState } from "react";
import axios from "axios";
import Budget from "./Budget"; // Import the Budget component if needed
const URL = "http://localhost:5000/budgets";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

export default function Budgets() {
    const [budgets, setBudgets] = useState([]);
    useEffect(() => {
      fetchHandler().then((data) => setBudgets(data.budgets));
    }, []);
    console.log(budgets);
    return (
      <div>
        <ul>
          {budgets &&
            budgets.map((budget, i) => (
              <li key={i}>
                <Budget budget={budget} />
              </li>
            ))}
        </ul>
      </div>
    );
}
