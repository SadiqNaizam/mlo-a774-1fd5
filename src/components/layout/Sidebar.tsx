import React from 'react';
import SidebarNav from '../InboxView/SidebarNav';

/**
 * Sidebar component for the main application layout.
 * It serves as a container for the primary navigation, occupying the full height of the viewport
 * on the left side and spanning both the header and main content rows in the grid layout.
 */
const Sidebar: React.FC = () => {
  return (
    <aside className="row-span-2 flex flex-col bg-background border-r">
      {/* The SidebarNav component contains all the navigation links, folders, and icons. */}
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
