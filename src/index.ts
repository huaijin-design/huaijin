import * as theme from './themes/theme';
import * as variable from './themes/variable';

export { Button, Huaijin, Markdown, Figure, Input } from './components';

export { theme, variable };

declare global {
  interface BaseProps {
    style?: React.CSSProperties;
    className?: string;
    id?: string;
    children?: React.ReactChild;
    onClick?: React.MouseEventHandler;
    theme: theme.Theme;
  }
}
