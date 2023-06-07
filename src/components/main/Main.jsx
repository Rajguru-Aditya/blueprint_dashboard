import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./Main.css";
import { Icon } from "@blueprintjs/core";

const MainContent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const toggle = () => {
    setToggleSidebar(!toggleSidebar);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  useEffect(() => {
    if (screenWidth < 768) {
      setToggleSidebar(false);
    } else {
      setToggleSidebar(true);
    }
  }, [screenWidth]);

  return (
    <div className="main-content-wrapper">
      {/* Sidebar hamburger */}
      <div>
        <button className="hamburger" onClick={toggle}>
          <Icon icon="menu" iconSize={20} />
        </button>
      </div>
      <Sidebar toggle={toggleSidebar} />
      <div className="main-content">
        <div className="tables-container">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th colSpan="2" rowSpan="2">
                    Sales today
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg">
                  <td>Invoices</td>
                  <td>Total</td>
                </tr>
                <tr className="foot">
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
                  <th colSpan="2" rowSpan="2">
                    Payments
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg">
                  <td>Receivables</td>
                  <td>Payables</td>
                </tr>
                <tr className="foot">
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
                  <th colSpan="2" rowSpan="2">
                    Inventory
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg">
                  <td>Low Stock</td>
                  <td>Out of stock</td>
                </tr>
                <tr className="foot">
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
                  <th colSpan="2" rowSpan="2">
                    Expenses
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg">
                  <td>Today</td>
                  <td>Month</td>
                </tr>
                <tr className="foot">
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
