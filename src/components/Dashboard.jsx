import React from 'react';
import { Card } from '@blueprintjs/core';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Card className="custom-card" elevation={2}>
        <h3>Card 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Card>
      <Card className="custom-card" elevation={2}>
        <h3>Card 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Card>
      <Card className="custom-card" elevation={2}>
        <h3>Card 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Card>
    </div>
  );
};

export default Dashboard;
