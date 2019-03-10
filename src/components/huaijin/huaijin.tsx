import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import { defaultTheme } from '../../themes/theme';
import { deepMerge } from '../../utils/others';
import markdownCodeStyle from '../markdown/markdownCodeStyle';

export interface HuaijinProps {
  theme: object;
  children: React.ReactChild;
}

function Huaijin({ theme, children }: HuaijinProps): React.ReactElement {
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
