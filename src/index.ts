import * as React from 'react';
import * as theme from './themes/theme';
import * as variable from './themes/variable';

export { Button, Huaijin, Markdown, Figure, Input } from './components';

export { theme, variable };

declare global {
  interface BaseProps<T>
    extends React.DOMAttributes<T>,
      React.HTMLAttributes<T> {
    theme?: theme.Theme;
  }
}
