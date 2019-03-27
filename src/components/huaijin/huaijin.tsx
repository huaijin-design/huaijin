import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import { defaultTheme, Theme } from '../../themes/theme';
import { deepMerge } from '../../utils/others';
import markdownCodeStyle from '../markdown/markdownCodeStyle';

export interface HuaijinProps {
  theme: Theme;
  children: React.ReactChild;
}

class Huaijin extends React.Component<HuaijinProps> {
  public componentDidMount(): void {
    const { theme } = this.props;
    const mergeTheme = deepMerge<Theme>(defaultTheme, theme);
    this.updateCSSVariables(mergeTheme);
  }

  public componentDidUpdate(prevProps: HuaijinProps): void {
    const { theme } = this.props;
    if (theme !== prevProps.theme) {
      const mergeTheme = deepMerge<Theme>(defaultTheme, theme);
      this.updateCSSVariables(mergeTheme);
    }
  }

  public updateCSSVariables = (theme: Theme): void => {
    Object.keys(theme).forEach(key => {
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    });
  };

  public render(): React.ReactElement {
    const { theme, children } = this.props;
    const mergeTheme = deepMerge(defaultTheme, theme);
    return (
      <ThemeProvider theme={mergeTheme}>
        <>
          <Global styles={markdownCodeStyle} />
          {children}
        </>
      </ThemeProvider>
    );
  }
}

export default Huaijin;
