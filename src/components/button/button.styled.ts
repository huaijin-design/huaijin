import styled, { css } from 'styled-components';
import { ButtonProps } from './button';
import { getComponentName } from '../../utils/displayName';
import { reset, shadow, transition } from '../../themes/variable';

const componentName: string = getComponentName('button');

const basicStyle = ({ theme }: themeProps) => css`
  font-size: ${theme.buttonDefaultFontSize};
  color: ${theme.buttonDefaultColor};
  background-color: ${theme.buttonDefaultBackground};
  ${shadow()};
`;

const primaryStyle = ({ theme }: themeProps) => css`
  color: ${theme.buttonPrimaryColor};
  background-color: ${theme.buttonPrimaryBackground};
  ${shadow(theme.buttonPrimaryBackground)};
`;

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
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0px);
  }
  ${transition}

  ${basicStyle}
  ${({ theme, primary }) => primary && primaryStyle({ theme })}
`;

export default StyledButton;
