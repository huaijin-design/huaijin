import styled, { css } from 'styled-components';
import { mapTheme, mapProp } from '../../utils/styled-map';
import { ButtonProps } from './button';
import { reset, colors, shadow, transition } from '../../themes/variable';

export const componentName = 'HJButton';

const PropColor = css`
  color: ${mapTheme('color', 'color.button')};
  background-color: ${mapTheme('color', 'background.button')};
  ${mapTheme('color', 'shadow.button', shadow)};
`;

const PropGhost = css`
  ${mapProp('ghost')`
    box-shadow: none;
    background: transparent;
    border: 1px solid ${colors.white};
    color: ${colors.white};
    &:hover {
      color: ${colors.dark};
      background-color: ${colors.white};
    }
    &:active {
      color: ${colors.dark};
      background-color: ${colors.white};
    }
  `}
`;

const StyledButton = styled.button.attrs({
  className: componentName,
})<ButtonProps>`
  ${reset}
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255,255,255,0);

  min-width: 88px;
  min-height: 32px;
  border-radius: 2px;
  font-size: ${mapTheme('fontSize.button')};
  ${transition}
  &:hover {
    transform: translate3d(0,-2px,0) scale3d(1.04,1.04,1.04);
  }
  &:active {
    transform: translate3d(0,0,0) scale3d(1,1,1);
  }

  ${PropColor}
  ${PropGhost}
`;

export default StyledButton;
