import { ComponentType } from 'react';

export const getDisplayName = (Component: ComponentType) => {
  return Component.displayName || Component.name || 'Component';
};

const prefix = 'hj-';

export const getComponentName = (name: string) => `${prefix}${name}`;
