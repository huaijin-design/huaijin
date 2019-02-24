import * as React from 'react';
import Button, { componentName } from './button.styled';
import { buttonDefaultTheme } from '../../themes/theme';

export type ButtonType = 'submit' | 'button' | 'reset';
export type ButtonColor = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export interface ButtonProps {
  type?: ButtonType;
  onClick?: React.MouseEventHandler;
  className?: string;

  color?: ButtonColor;
  ghost?: boolean;
  disabled?: boolean;
}

Button.displayName = componentName;

Button.defaultProps = {
  type: 'button',
  color: 'default',
  theme: buttonDefaultTheme,
};

export default Button;
