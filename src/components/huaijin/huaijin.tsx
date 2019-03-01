import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/theme';
import { deepMerge } from '../../utils/others';
import markdownCodeStyle from './markdownCodeStyle';
import { Global } from '@emotion/core';

export interface HuaijinProps {
  theme: object;
  children: React.ReactChild;
}

function Huaijin({ theme, children }: HuaijinProps) {
  const mergeTheme = deepMerge(defaultTheme, theme);
  return (
    <ThemeProvider theme={mergeTheme}>
      <>
        <Global
          styles={markdownCodeStyle}
        />
        {children}
      </>
    </ThemeProvider>
  );
}

export default Huaijin;
