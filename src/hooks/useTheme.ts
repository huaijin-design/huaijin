import { useLayoutEffect } from 'react';
// import { Theme } from '../themes/theme';

function useTheme(theme: any): void {
  useLayoutEffect(() => {
    Object.keys(theme).forEach(key => {
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    });
  }, [theme]);
}

export default useTheme;
