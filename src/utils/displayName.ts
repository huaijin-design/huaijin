import { ComponentType } from 'react';

export const getDisplayName = (Component: ComponentType): string => {
  return Component.displayName || Component.name || 'Component';
};
