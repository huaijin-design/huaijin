import * as React from 'react';
import * as PropTypes from 'prop-types';
import { defaultTheme } from '../../themes/theme';
import omit from '../../utils/omit';

export type PropSize = 'small' | 'large' | 'default';

export interface ButtonProps extends BaseProps {
  primary?: boolean;
  ghost?: boolean;
  disabled?: boolean;
  text?: boolean;
  circle?: boolean;
  size?: PropSize;
  href?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  className,
  onClick,
  href,
  ...others
}: ButtonProps): React.ReactElement => {

  const otherProps = omit(others, [
    'theme',
    'primary',
    'ghost',
    'text',
    'circle',
    'size'
  ]);

  if (href) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        {...otherProps}
      >
        <div className="hj-button-main">{children}</div>
      </a>
    );
  }

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
  size(props, propName, componentName) {
    const value = (props as any)[propName];
    if (propName in props && !['small', 'large', 'default'].find(v => v === value)) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. expect small or large, get ${value}. Validation failed.`);
    }
    return null;
  },
  href: PropTypes.string,
};

Button.defaultProps = {
  theme: defaultTheme,
  size: 'default',
};

export default Button;
