import React from 'react';

import './Layout.styles.css';

function Layout({ header, children }) {
  return (
    <div className="wrapper">
      <div className="header-container">{header}</div>
      <main className="content-container">{children}</main>
    </div>
  );
}

export default Layout;
