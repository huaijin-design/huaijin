import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import { Theme, defaultTheme } from '../../themes/theme';
import { deepMerge } from '../../utils/others';
import markdownCodeStyle from '../markdown/markdownCodeStyle';

export interface HuaijinProps {
  theme?: Theme;
  children: React.ReactChild;
}

function Huaijin({ theme = {}, children }: HuaijinProps): React.ReactElement {
  const mergeTheme = deepMerge(defaultTheme, theme);
  const allChildren = React.Children.map(children, child => child);
  return (
    <ThemeProvider theme={mergeTheme}>
      <>
        <Global styles={markdownCodeStyle} />
        {allChildren}
      </>
    </ThemeProvider>
  );
}

export default Huaijin;
