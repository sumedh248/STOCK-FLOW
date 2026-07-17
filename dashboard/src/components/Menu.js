import React, { useState } from "react";
import { Link } from 'react-router-dom';
const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };

  const handleIsProfileDropdown = (index) => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  const menuClass = 'menu';
  const activeMenuClass = 'menu selected';

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to='/' onClick={() => handleMenuClick(0)} style={{ textDecoration: 'none' }}>
              <p className={selectMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to='/orders' onClick={() => handleMenuClick(1)} style={{ textDecoration: 'none' }}>
              <p className={selectMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to='/holdings' onClick={() => handleMenuClick(3)} style={{ textDecoration: 'none' }}>
              <p className={selectMenu === 3 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to='/positions' onClick={() => handleMenuClick(4)} style={{ textDecoration: 'none' }}>
              <p className={selectMenu === 4 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to='/funds' onClick={() => handleMenuClick(5)} style={{ textDecoration: 'none' }}>
              <p className={selectMenu === 5 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to='/apps' onClick={() => handleMenuClick(6)} style={{ textDecoration: 'none' }}>
              <p className={selectMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleIsProfileDropdown}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
