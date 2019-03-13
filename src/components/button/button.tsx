import * as React from 'react';
import * as PropTypes from 'prop-types';
import { defaultTheme } from '../../themes/theme';
import omit from '../../utils/omit';

export interface ButtonProps extends BaseProps {
  primary?: boolean;
  ghost?: boolean;
  disabled?: boolean;
  text?: boolean;
  circle?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  className,
  onClick,
  ...others
}: ButtonProps): React.ReactElement => {

  const otherProps = omit(others, [
    'theme',
    'primary',
    'ghost',
    'text',
    'circle'
  ]);

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      {...otherProps}
    >
      <div className="hj-button-main">{children}</div>
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  ghost: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.bool,
  circle: PropTypes.bool,
};

Button.defaultProps = {
  theme: defaultTheme,
};

export default Button;
