import { css } from '@emotion/core';
import { transparentize } from 'polished';

export const colors = {
  default: '#f5f5f5',
  white: '#fff',
  dark: '#707070',
  primary: '#ff6f61',
  success: '#67c23a',
  warning: '#f90',
  danger: '#f56c6c',
  grey: '#f3f3f3',
  disabledColor: 'd9d9d9',
  placeholder: '#c7c7c7',
  shadow: '#dedede',
};

export const shadow = (color: string = colors.default) => {
  if (color === colors.default) {
    color = colors.shadow;
  }
  return css`
    box-shadow: 0px 2px 4px ${transparentize(0.25, color)};
    &:hover {
      box-shadow: 0px 6px 12px ${transparentize(0.25, color)};
    }
    &:active {
      box-shadow: 0px 2px 4px ${transparentize(0.25, color)};
    }
  `;
};

export const fonts = {
  size: '14px',
  family: {
    article: `Georgia,Cambria,'Times New Roman',Times,serif`,
    body: `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Open Sans','Helvetica Neue',sans-serif`,
  },
};

export const reset = css`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: ${fonts.family.body};
  border: none;
  outline: none;
`;
