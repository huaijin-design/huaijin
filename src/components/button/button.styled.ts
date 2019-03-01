import { css } from '@emotion/core';
import styled, { em } from '../../themes/theme';
import { ButtonProps } from './button';
import { reset, shadow } from '../../themes/variable';
import { transparentize } from 'polished';

export const componentName = 'hj-button';

const baseFont = ({ theme }: ButtonProps) => css`
  font-size: ${theme.fontSize};
`;

const transition = css`
  transition: box-shadow .3s ease,transform .3s ease,background .3s ease;
`;

const baseStyles = ({ theme }: ButtonProps) => css`
  label: ${componentName};
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255,255,255,0);

  min-width: ${em('88px')};
  min-height: ${em('32px')};
  border-radius: 2px;
  padding: 5px 10px;
  &:hover {
    transform: translate3d(0,-2px,0) scale3d(1.04,1.04,1.04);
  }
  &:active {
    transform: translate3d(0,0,0) scale3d(1,1,1);
  }

  background-color: ${theme.color.default};
  color: ${theme.color.dark};
  ${shadow()}
`;

const primaryStyles = ({ theme, primary }: ButtonProps) =>
  primary &&
  css`
    label: primary;
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
    ${shadow(theme.color.primary)}
  `;

const ghostStyles = ({ theme, ghost }: ButtonProps) =>
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

const disabledStyles = ({ theme, disabled }: ButtonProps) =>
  disabled &&
  css`
    label: disabled;
    box-shadow: none;
    cursor: not-allowed;
    background-color: ${transparentize(.88, theme.color.dark)};
    color: ${transparentize(.74, theme.color.dark)};
    &:hover {
      box-shadow: none;
      transform: none;
    }
    &:active {
      box-shadow: none;
      transform: none;
    }
  `;

const roundStyles = ({ round }: ButtonProps) =>
  round &&
  css`
    label: round;
    border-radius: 1em;
  `;

const textStyles = ({ text }: ButtonProps) =>
  text &&
  css`
    label: text;
    box-shadow: none;
    background: none;
  `;

const circleStyles = ({ circle }: ButtonProps) =>
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
  ${transition}
  ${baseFont}
  ${baseStyles}
  ${primaryStyles}
  ${ghostStyles}
  ${disabledStyles}
  ${roundStyles}
  ${textStyles}
  ${circleStyles}
`;

export default StyledButton;
