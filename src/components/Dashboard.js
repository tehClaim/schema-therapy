import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className="top-navigation">
    <div className="content-container">
      <Link to="/about">About</Link>
      <Link to="/ysq">Test yourself</Link>
    </div>
  </div>
);

export { Dashboard as default };
