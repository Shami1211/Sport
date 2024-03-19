import React, { useEffect, useState } from "react";
import axios from "axios";
import Drive from "./Drive"; 
const URL = "http://localhost:5000/drives";


const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

export default function Drives() {
    const [drives, setDrives] = useState([]);
    useEffect(() => {
      fetchHandler().then((data) => setDrives(data.drives));
    }, []);
    console.log(drives);
    return (
      <div>
        <ul>
          {drives &&
            drives.map((drive, i) => (
              <li key={i}>
                <Drive drive={drive} />
              </li>
            ))}
        </ul>
      </div>
    );
}

