import { css } from '@emotion/core';

export const colors = {
  default: '#f5f5f5',
  white: '#fff',
  dark: '#404040',
  primary: '#ff6f61',
  success: '#67c23a',
  warning: '#f90',
  danger: '#f56c6c',
  grey: '#888',
  disabledColor: 'd9d9d9',
  placeholder: '#c7c7c7',
  shadow: '#dedede',
};

export const fonts = {
  size: '24px',
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
