import { css, SerializedStyles } from '@emotion/core';
import { transparentize } from 'polished';
import styled, { em } from '../../themes/theme';
import { ButtonProps } from './button';
import { reset, shadow } from '../../themes/variable';

export const componentName = 'hj-button';

type StylesCss = SerializedStyles | false | undefined;

const baseStyles = ({ theme }: ButtonProps): SerializedStyles => css`
  label: ${componentName};
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  min-width: ${em('88px')};
  min-height: ${em('32px')};
  border-radius: 2px;
  padding: 5px 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background 0.3s ease;
  &:hover {
    transform: translate3d(0, -2px, 0) scale3d(1.04, 1.04, 1.04);
  }
  &:active {
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
  }

  font-size: ${theme.fontSize};
  background-color: ${theme.color.default};
  color: ${theme.color.dark};
  ${shadow()}
`;

const primaryStyles = ({ theme, primary }: ButtonProps): StylesCss =>
  primary &&
  css`
    label: primary;
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
    ${shadow(theme.color.primary)}
  `;

const ghostStyles = ({ theme, ghost }: ButtonProps): StylesCss =>
  ghost &&
  css`
    label: ghost;
    box-shadow: none;
    background: transparent;
    border: 1px solid ${theme.color.white};
    color: ${theme.color.white};
    &:hover {
      color: ${theme.color.dark};
      background-color: ${theme.color.white};
    }
    &:active {
      color: ${theme.color.dark};
      background-color: ${theme.color.white};
    }
  `;

const disabledStyles = ({ theme, disabled }: ButtonProps): StylesCss =>
  disabled &&
  css`
    label: disabled;
    box-shadow: none;
    cursor: not-allowed;
    background-color: ${transparentize(0.88, theme.color.dark)};
    color: ${transparentize(0.74, theme.color.dark)};
    &:hover {
      box-shadow: none;
      transform: none;
    }
    &:active {
      box-shadow: none;
      transform: none;
    }
  `;

const roundStyles = ({ round }: ButtonProps): StylesCss =>
  round &&
  css`
    label: round;
    border-radius: ${em('16px')};
  `;

const textStyles = ({ text }: ButtonProps): StylesCss =>
  text &&
  css`
    label: text;
    box-shadow: none;
    background: none;
  `;

const circleStyles = ({ circle }: ButtonProps): StylesCss =>
  circle &&
  css`
    label: circle;
    min-width: 32px;
    width: 32px;
    height: 32px;
    padding: 4px;
    overflow: hidden;
    border-radius: 50%;
  `;

const StyledButton = styled.button<ButtonProps>`
  ${reset}

  ${baseStyles}
  ${primaryStyles}
  ${ghostStyles}
  ${disabledStyles}
  ${roundStyles}
  ${textStyles}
  ${circleStyles}
`;

export default StyledButton;
