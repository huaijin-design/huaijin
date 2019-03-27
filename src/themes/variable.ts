import { css } from '@emotion/core';
import { transparentize } from 'polished';

export const colors = {
  default: '245,245,245', // #f5f5f5
  white: '255,255,255', // #fff
  dark: '64,64,64', // #404040
  primary: '255,111,97', // #ff6f61
  success: '103,194,58', // #67c23a
  warning: '255,153,0', // #f90
  danger: '255,16,16', // #ff1010
  grey: '136,136,136', // #888
  disabled: '217,217,217', // #d9d9d9
  placeholder: '199,199,199', // #c7c7c7
  shadow: '222,222,222', // #dedede
};

export const fonts = {
  size: {
    small: '16px',
    default: '24px',
    large: '38px',
  },
  family: {
    article: `Georgia,Cambria,'Times New Roman',Times,serif`,
    body: `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Open Sans','Helvetica Neue',sans-serif`,
  },
};

export const boxShadow = {
  active: `0 0 0 3px ${transparentize(0.8, `rgb(${colors.primary})`)}`,
  ghostActive: `0 0 0 3px ${transparentize(0.8, `rgb(${colors.white})`)}`,
};

export const border = {
  default: `1px solid ${transparentize(0.5, `rgb(${colors.primary})`)};`,
};

export const reset = css`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: ${fonts.family.body};
  border: none;
  outline: none;
`;
