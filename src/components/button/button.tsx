import * as React from 'react';
import * as PropTypes from 'prop-types';
import StyledButton from './button.styled';
import compose from '../../utils/compose';
import { withTheme } from '../../utils/hocs';

export type ButtonType = 'submit' | 'button' | 'reset';
export interface ButtonProps {
  type?: ButtonType;
  onClick?: React.MouseEventHandler;
  className?: string;
}

@compose(
  withTheme
)
class HJButton extends React.Component<ButtonProps, {}> {
  static propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
  };

  static defaultProps = {
    type: 'button',
  };

  render() {
    const { children, type, onClick, ...rest } = this.props;
    return (
      <StyledButton
        {...rest}
        type={type}
        onClick={onClick}
        children={children}
      />
    );
  }
}

export default HJButton;
