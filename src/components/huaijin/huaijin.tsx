import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../themes/theme';
import { deepMerge } from '../../utils/others';

export interface HuaijinProps {
  theme: object;
  children: React.ReactChild;
}

function Huaijin({ theme, children }: HuaijinProps) {
  const mergeTheme = deepMerge(defaultTheme, theme);
  return (
    <ThemeProvider theme={mergeTheme}>
      <>
        {children}
      </>
    </ThemeProvider>
  );
}

export default Huaijin;
