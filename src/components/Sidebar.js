import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {
    Link,
  } from "react-router-dom";


export default props => {
  return (

    <Menu>
      <Link to="/" className="menu-item">
        Home
      </Link>
      <Link to ="/weeklyreset" className="menu-item">
        Weekly Reset Information
      </Link>
      <Link to ="/activityreport" className="menu-item">
        Activity Report
      </Link>
      <Link to ="/triumphs" className="menu-item">
        Triumphs
      </Link>

    </Menu>

  );
};