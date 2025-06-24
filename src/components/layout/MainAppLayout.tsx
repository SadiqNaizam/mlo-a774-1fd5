import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The main content to be rendered within the layout. Typically a page component.
   */
  children: React.ReactNode;
}

/**
 * Defines the primary application layout structure using CSS Grid.
 * This layout is based on the "HLSB" (Header, Left Sidebar, Body) pattern.
 * It consists of a fixed sidebar on the left and a header at the top,
 * with the main content area filling the remaining space.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div
      className={cn(
        'grid h-screen w-full bg-background',
        // Defines a grid with sidebar width determined by its content (`auto`),
        // and the main area taking the remaining space (`1fr`).
        'grid-cols-[auto_1fr]',
        // Defines a grid with header height determined by its content (`auto`),
        // and the main content area taking the remaining vertical space (`1fr`).
        'grid-rows-[auto_1fr]'
      )}
    >
      <Sidebar />
      <Header />
      <main className="col-start-2 row-start-2 flex flex-col overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
