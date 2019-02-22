import * as React from 'react';
import * as PropTypes from 'prop-types';
import StyledButton, { componentName } from './button.styled';
import { buttonDefaultTheme } from '../../themes/theme';

export type ButtonType = 'submit' | 'button' | 'reset';
export type ButtonColor = 'default' | 'primary';
export interface ButtonProps {
  type?: ButtonType;
  onClick?: React.MouseEventHandler;
  className?: string;

  ghost?: boolean;
  color?: ButtonColor;
}

const Button = StyledButton as React.ComponentType;

Button.displayName = componentName;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
  ghost: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'primary']),
};

Button.defaultProps = {
  type: 'button',
  color: 'default',
  theme: buttonDefaultTheme,
};

export default Button;
