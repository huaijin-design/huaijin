import { ComponentType } from 'react';

export const getDisplayName = (Component: ComponentType) => {
  return Component.displayName || Component.name || 'Component';
};
