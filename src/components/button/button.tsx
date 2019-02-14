import * as React from 'react';
import * as PropTypes from 'prop-types';
import StyledButton from './button.styled';

export type ButtonType = 'submit' | 'button' | 'reset';
export interface ButtonProps {
  type?: ButtonType;
  onClick?: React.MouseEventHandler;
}

class Button extends React.Component<ButtonProps, {}> {
  static propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
  };

  static defaultProps = {
    type: 'button',
  };

  render() {
    const { children, type, onClick } = this.props;
    return (
      <StyledButton
        type={type}
        onClick={onClick}
        children={children}
      />
    );
  }
}

export default Button;
