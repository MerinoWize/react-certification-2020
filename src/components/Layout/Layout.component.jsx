import React from 'react';

import './Layout.styles.css';

function Layout({ header, children }) {
  return (
    <div className="wrapper">
      {header}
      <main className="container">{children}</main>
    </div>
  );
}

export default Layout;
