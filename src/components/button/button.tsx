import StyledButton, { componentName } from './button.styled';
import { withTheme } from 'emotion-theming';
import * as PropTypes from 'prop-types';
import { defaultTheme } from '../../themes/theme';

export interface ButtonProps extends BaseProps {
  primary?: boolean;
  ghost?: boolean;
  disabled?: boolean;
  round?: boolean;
  text?: boolean;
  circle?: boolean;
}

const Button = withTheme(StyledButton);

Button.displayName = componentName;

Button.propTypes = {
  primary: PropTypes.bool,
  ghost: PropTypes.bool,
  disabled: PropTypes.bool,
  round: PropTypes.bool,
  text: PropTypes.bool,
  circle: PropTypes.bool,
};

Button.defaultProps = {
  theme: defaultTheme,
};

export default Button;
