'use client';

import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';

interface ContextWrapperProps {
  children: ReactNode;
}

const ContextWrapper: React.FC<ContextWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {children}
    </ThemeProvider>
  );
};

export default ContextWrapper;
