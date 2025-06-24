import React from 'react';
import TopHeader from '../InboxView/TopHeader';

/**
 * Header component for the main application layout.
 * This component wraps the detailed TopHeader, which includes search, user actions, and view tabs.
 * It is positioned in the top row of the main grid layout.
 */
const Header: React.FC = () => {
  return (
    // The col-start-2 class ensures this header aligns with the main content column in the grid.
    <header className="col-start-2">
      <TopHeader />
    </header>
  );
};

export default Header;
