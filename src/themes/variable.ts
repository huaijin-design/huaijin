import { css } from 'styled-components';
import { transparentize } from 'polished';

export const colors = {
  default: '#f5f5f5',
  white: '#fff',
  dark: '#707070',
  primary: '#1867C0',
  success: '#67c23a',
  warning: '#f90',
  danger: '#f56c6c',
  grey: '#f3f3f3',
  disabledColor: 'd9d9d9',
  placeholder: '#c7c7c7',
  shadow: '#dedede',
};

export const shadow = css`
  box-shadow: 0px 2px 4px ${transparentize(.25, colors.shadow)};
  &:hover {
    box-shadow: 0px 6px 12px ${transparentize(.25, colors.shadow)};
  }
  &:active {
    box-shadow: 0px 2px 4px ${transparentize(.25, colors.shadow)};
  }
`;

export const fonts = {
  article: `Georgia,Cambria,'Times New Roman',Times,serif`,
  body: `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Open Sans','Helvetica Neue',sans-serif`,
};

export const reset = css`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
  font-family: ${fonts.body};
  border: none;
  outline: none;
`;

export const transition = css`
  transition: box-shadow .3s ease, transform .3s ease;
`;
