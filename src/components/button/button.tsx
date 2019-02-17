import * as React from 'react';
import * as PropTypes from 'prop-types';
import StyledButton from './button.styled';
import compose from '../../utils/compose';
import { withTheme } from '../../utils/hocs';
import { colors, fonts } from '../../themes/variable';

export type ButtonType = 'submit' | 'button' | 'reset';
export interface ButtonProps {
  type?: ButtonType;
  onClick?: React.MouseEventHandler;
  className?: string;

  ghost?: boolean;
  primary?: boolean;
}

@compose(
  withTheme
)
class HJButton extends React.Component<ButtonProps, {}> {
  static propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
    ghost: PropTypes.bool,
    primary: PropTypes.bool,
  };

  static defaultProps = {
    type: 'button',
    theme: {
      buttonDefaultFontSize: fonts.size,
      buttonDefaultColor: colors.dark,
      buttonDefaultBackground: colors.default,
      buttonPrimaryFontSize: fonts.size,
      buttonPrimaryColor: colors.white,
      buttonPrimaryBackground: colors.primary,
    },
  };

  render() {
    const { children, type, onClick, ghost, primary, ...rest } = this.props;
    return (
      <StyledButton
        {...rest}
        type={type}
        onClick={onClick}
        children={children}
        ghost={ghost}
        primary={primary}
      />
    );
  }
}

export default HJButton;
