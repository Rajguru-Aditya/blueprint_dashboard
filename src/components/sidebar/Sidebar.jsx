import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import { FaFileInvoice, FaTools } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';
import { BsCurrencyRupee } from 'react-icons/bs';
import { MdCallReceived } from 'react-icons/md';

import './Sidebar.css';

const Sidebar = () => {
  const [dropdownVisible, setDropdownVisible] = useState({});

  const toggleDropdown = (index) => {
    setDropdownVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  // Define the menu items
  const menuItems = [
    {
      icon: 'trending-up',
      title: 'Sales',
      subItems: [
        { icon: 'new-person', title: 'Customers', path: '/customers' },
        { icon: 'document', title: 'Quotations', path: '/quotations' },
        { icon: <FaFileInvoice />, title: 'Invoices', path: '/invoices' },
        { icon: 'globe', title: 'E=invoices', path: '/einvoices' },
        { icon: 'horizontal-distribution', title: 'E-Way Bills', path: '/bills' },
        { icon: <GrDocumentText/>, title: 'Sales Order', path: '/sales' },
        { icon: 'folder-close', title: 'Delivery challance', path: '/delivery' },
        { icon: 'document-share', title: 'Credit Notes', path: '/credit' },
        { icon: <BsCurrencyRupee />, title: 'Receivables', path: '/receivables' },
        { icon: <MdCallReceived />, title: 'Payments Received', path: '/payRec' },
      ]
    },
    {
      icon: 'briefcase',
      title: 'Items',
      subItems: [
        { title: 'Sub Item 4', path: '/subitem4' },
        { title: 'Sub Item 5', path: '/subitem5' },
        { title: 'Sub Item 6', path: '/subitem6' }
      ]
    },
    {
      icon: 'shopping-cart',
      title: 'Purchase',
      subItems: [
        { title: 'Sub Item 7', path: '/subitem7' },
        { title: 'Sub Item 8', path: '/subitem8' },
        { title: 'Sub Item 9', path: '/subitem9' }
      ]
    },
    {
      icon: 'full-stacked-chart',
      title: 'Master data',
      subItems: [
        { title: 'Sub Item 10', path: '/subitem10' },
        { title: 'Sub Item 11', path: '/subitem11' },
        { title: 'Sub Item 12', path: '/subitem12' }
      ]
    },
    {
      icon: <FaTools />,
      title: 'Other',
      subItems: [
        { title: 'Sub Item 13', path: '/subitem13' },
        { title: 'Sub Item 14', path: '/subitem14' },
        { title: 'Sub Item 15', path: '/subitem15' }
      ]
    },
    {
      icon: 'manual',
      title: 'Accounting',
      subItems: [
        { title: 'Sub Item 16', path: '/subitem16' },
        { title: 'Sub Item 17', path: '/subitem17' },
        { title: 'Sub Item 18', path: '/subitem18' }
      ]
    }
  ];

  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => toggleDropdown(index)}>
            <Icon icon={item.icon} /> {item.title}{' '}
            <Icon icon={dropdownVisible[index] ? 'chevron-up' : 'chevron-down'} />
          </h3>
          {dropdownVisible[index] && (
            <ul className="dropdown-menu">
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  {typeof subItem.icon === 'string' ? (
                    <Icon icon={subItem.icon} style={{ marginRight: '8px' }} />
                  ) : (
                    <span style={{ marginRight: '8px' }}>{subItem.icon}</span>
                  )}
                  <Link to={subItem.path}>{subItem.title}</Link>
                </li>
              ))}
            </ul>

          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
