import { css, SerializedStyles } from '@emotion/core';
import styled, { variable } from '../../themes/theme';
import ButtonBase, { ButtonProps } from './button';

export const componentName = 'hj-button';

type StylesCss = SerializedStyles | false | undefined;

const resetStyles = css`
  padding: 0;
  outline: none;
  border: none;
`;

const baseStyles = (): SerializedStyles => css`
  label: ${componentName};
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  font-weight: 300;
  line-height: 1.3;
  background: transparent;
  position: relative;
  margin: 0.3em 0.6em;
  ${variable('font-size-default', 'font-size')}
  ${variable('font-family', 'font-family')}
  ${variable('color-dark', 'color')}
  > .hj-button-main {
    position: relative;
    z-index: 2;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 60%;
    left: -0.2em;
    right: -0.2em;
    bottom: 0;
    border-radius: 10em;
    transition: 300ms cubic-bezier(0.25, 0.8, 0.5, 1);
    ${variable('color-primary', 'background-color', 0.5)}
  }
  &:hover {
    &:after {
      top: 0;
      left: -0.6em;
      right: -0.6em;
    }
  }
  &:active {
    &:after {
      ${variable('color-primary', 'background-color', 0.4)}
      ${variable('box-shadow-active', 'box-shadow')}
    }
  }
`;

const primaryStyles = ({ primary }: ButtonProps): StylesCss =>
  primary &&
  css`
    label: primary;
    &:after {
      top: 0;
      left: -0.6em;
      right: -0.6em;
    }
    &:hover {
      &:after {
        top: 60%;
      }
    }
    &:active {
      &:after {
        top: 100%;
      }
    }
  `;

const ghostStyles = ({ ghost }: ButtonProps): StylesCss =>
  ghost &&
  css`
    label: ghost;
    ${variable('color-white', 'color')}
    &:after {
      ${variable('color-white', 'background-color', 0.6)}
    }
    &:active {
      &:after {
        ${variable('color-dark', 'background-color', 0.999)}
        ${variable('box-shadow-ghost-active', 'box-shadow')}
      }
    }
  `;

const disabledStyles = ({ disabled }: ButtonProps): StylesCss =>
  disabled &&
  css`
    label: disabled;
    cursor: not-allowed;
    ${variable('color-grey', 'color')}
    &:after {
      ${variable('color-grey', 'background-color', 0.5)}
    }
    &:hover {
      &:after {
        top: 60%;
        left: -0.2em;
        right: -0.2em;
      }
    }
    &:active {
      &:after {
        top: 60%;
        ${variable('color-grey', 'background-color', 0.5)}
        box-shadow: none;
      }
    }
  `;

const textStyles = ({ text }: ButtonProps): StylesCss =>
  text &&
  css`
    label: text;
    &:after {
      top: 100%;
    }
    &:hover {
      &:after {
        top: 0;
      }
    }
    &:active {
      &:after {
        ${variable('color-primary', 'background-color', 0.4)}
        ${variable('box-shadow-active', 'box-shadow')}
      }
    }
  `;

const sizeStyles = ({ size }: ButtonProps): StylesCss => {
  if (size === 'small') {
    return css`
      label: size-small;
      ${variable('font-size-small', 'font-size')}
    `;
  }
  if (size === 'large') {
    return css`
      label: size-large;
      ${variable('font-size-large', 'font-size')}
    `;
  }
  return css``;
};

const circleStyles = ({ circle }: ButtonProps): StylesCss =>
  circle &&
  css`
    label: circle;
    width: 1.3em;
    height: 1.3em;
    overflow: hidden;
    border-radius: 50%;
    ${variable('border-default', 'border')}
    transition: 300ms cubic-bezier(0.25, 0.8, 0.5, 1);
    &:active {
      ${variable('box-shadow-active', 'box-shadow')}
    }
    > .hj-button-main {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

const StyledButton = styled(ButtonBase)<ButtonProps>`
  ${resetStyles}
  ${baseStyles}
  ${primaryStyles}
  ${ghostStyles}
  ${disabledStyles}
  ${textStyles}
  ${circleStyles}
  ${sizeStyles}
`;

StyledButton.displayName = componentName;

export default StyledButton;
