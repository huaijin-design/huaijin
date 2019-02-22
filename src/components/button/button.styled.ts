import styled from 'styled-components';
import { mapTheme } from '../../utils/styled-map';
import { ButtonProps } from './button';
import { reset, shadow, transition } from '../../themes/variable';

export const componentName = 'HJButton';

const StyledButton = styled.button.attrs({
  className: componentName,
})<ButtonProps>`
  ${reset}
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  min-width: 88px;
  min-height: 32px;
  border-radius: 2px;
  &:hover {
    transform: translate3d(0, -2px, 0) scale3d(1.04, 1.04, 1.04);
  }
  &:active {
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
  }
  ${transition}
  font-size: ${mapTheme('fontSize.button')};
  color: ${mapTheme('color', 'color.button')};
  background-color: ${mapTheme('color', 'background.button')};
  ${mapTheme('color', 'shadow.button', shadow)};
`;

export default StyledButton;
