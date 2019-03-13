import { css, SerializedStyles } from '@emotion/core';
import { transparentize } from 'polished';
import { withTheme } from 'emotion-theming';

import styled, { Theme } from '../../themes/theme';
import ButtonBase, { ButtonProps } from './button';

export const componentName = 'hj-button';

type StylesCss = SerializedStyles | false | undefined;

const resetStyles = css`
  padding: 0;
  outline: none;
  border: none;
`;

const baseStyles = ({ theme }: ButtonProps): SerializedStyles => css`
  label: ${componentName};
  display: inline-block;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  font-size: ${(theme as Theme).fontSize};
  font-weight: 300;
  font-family: ${(theme as Theme).fontFamily};
  line-height: 1.3;
  color: ${(theme as Theme).color.dark};
  background: none;
  position: relative;
  margin: 0.3em;
  > .hj-button-main {
    position: relative;
    z-index: 2;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 60%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: 300ms cubic-bezier(0.25, 0.8, 0.5, 1);
    background-color: ${transparentize(0.5, (theme as Theme).color.primary)};
  }
  &:hover {
    &:after {
      top: 0;
    }
  }
  &:active {
    &:after {
      background-color: ${transparentize(0.4, (theme as Theme).color.primary)};
      box-shadow: 0 0 0 2px
        ${transparentize(0.8, (theme as Theme).color.primary)};
    }
  }
  &:focus {
    &:after {
      top: 0;
    }
  }
`;

const primaryStyles = ({ theme, primary }: ButtonProps): StylesCss =>
  primary &&
  css`
    label: primary;
    &:after {
      top: 0;
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
    &:focus {
      &:after {
        top: 100%;
        box-shadow: 0 0 0 2px
          ${transparentize(0.5, (theme as Theme).color.primary)};
      }
    }
  `;

const ghostStyles = ({ theme, ghost }: ButtonProps): StylesCss =>
  ghost &&
  css`
    label: ghost;
    color: ${(theme as Theme).color.white};
    &:after {
      background-color: ${transparentize(0.6, (theme as Theme).color.white)};
    }
    &:active {
      &:after {
        background-color: ${transparentize(0.999, (theme as Theme).color.dark)};
        box-shadow: 0 0 0 2px
          ${transparentize(0.8, (theme as Theme).color.white)};
      }
    }
  `;

const disabledStyles = ({ theme, disabled }: ButtonProps): StylesCss =>
  disabled &&
  css`
    label: disabled;
    cursor: not-allowed;
    color: ${(theme as Theme).color.grey};
    &:after {
      background-color: ${transparentize(0.8, (theme as Theme).color.grey)};
    }
    &:hover {
      &:after {
        top: 60%;
      }
    }
    &:active {
      &:after {
        top: 60%;
        background-color: ${transparentize(0.8, (theme as Theme).color.grey)};
        box-shadow: none;
      }
    }
    &:focus {
      &:after {
        box-shadow: none;
      }
    }
  `;

const textStyles = ({ theme, text }: ButtonProps): StylesCss =>
  text &&
  css`
    label: text;
    &:after {
      top: 100%;
    }
    &:hover {
      &:after {
        top: 60%;
      }
    }
    &:active {
      &:after {
        top: 0;
        background-color: ${transparentize(
          0.4,
          (theme as Theme).color.primary,
        )};
        box-shadow: 0 0 0 2px
          ${transparentize(0.8, (theme as Theme).color.primary)};
      }
    }
    &:focus {
      &:after {
        top: 0;
      }
    }
  `;

const circleStyles = ({ theme, circle }: ButtonProps): StylesCss =>
  circle &&
  css`
    label: circle;
    width: 1.3em;
    height: 1.3em;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid ${transparentize(0.5, (theme as Theme).color.primary)};
    transition: 300ms cubic-bezier(0.25, 0.8, 0.5, 1);
    &:active {
      box-shadow: 0 0 0 2px
        ${transparentize(0.8, (theme as Theme).color.primary)};
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
`;

StyledButton.displayName = componentName;

export default withTheme(StyledButton);
