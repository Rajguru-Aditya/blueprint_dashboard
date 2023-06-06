import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Main.css';

const MainContent = () => {
  return (
    <div className="main-content-wrapper">
      <Sidebar />
      <div className="main-content">
        <div className="tables-container">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th colSpan="2" rowSpan="2">Sales today</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Invoices</td>
                  <td>Total</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>₹0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th colSpan="2" rowSpan="2">Payments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Receivables</td>
                  <td>Payables</td>
                </tr>
                <tr>
                  <td>₹0.00</td>
                  <td>₹0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th colSpan="2" rowSpan="2">Inventory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Low Stock</td>
                  <td>Out of stock</td>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th colSpan="2" rowSpan="2">Expenses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Today</td>
                  <td>Month</td>
                </tr>
                <tr>
                  <td>₹0.00</td>
                  <td>₹0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
