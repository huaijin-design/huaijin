import styled, { CreateStyled } from '@emotion/styled';
import { fonts, colors, boxShadow, border } from './variable';

export interface Theme {
  'font-size-small': string;
  'font-size-default': string;
  'font-size-large': string;
  'font-family': string;
  'color-white': string;
  'color-grey': string;
  'color-primary': string;
  'color-success': string;
  'color-warning': string;
  'color-danger': string;
  'color-dark': string;
  'color-disabled': string;
  'box-shadow-active': string;
  'box-shadow-ghost-active': string;
  'border-default': string;
  [key: string]: string;
}

export const defaultTheme: Theme = {
  'font-size-small': fonts.size.small,
  'font-size-default': fonts.size.default,
  'font-size-large': fonts.size.large,
  'font-family': fonts.family.body,
  'color-white': colors.white,
  'color-grey': colors.grey,
  'color-primary': colors.primary,
  'color-success': colors.success,
  'color-warning': colors.warning,
  'color-danger': colors.danger,
  'color-dark': colors.dark,
  'color-disabled': colors.disabled,
  'box-shadow-active': boxShadow.active,
  'box-shadow-ghost-active': boxShadow.ghostActive,
  'border-default': border.default,
};

/**
 * 获取 css 变量
 * @param vars 变量名
 * @param property css属性 若为true只返回值(只能为rgb)
 * @param alpha 透明度
 */
export function variable(
  vars: keyof Theme,
  property: string | boolean,
  alpha: number = 0,
): string {
  if (typeof property === 'boolean') {
    return `rgba(${defaultTheme[vars]}, ${1 - alpha})`;
  }
  return `
  ${property}: ${
    property.indexOf('color') > -1
      ? `rgba(${defaultTheme[vars]}, ${1 - alpha})`
      : defaultTheme[vars]
  };
  ${property}: ${
    property.indexOf('color') > -1
      ? `rgba(var(--${vars}), ${1 - alpha})`
      : `var(--${vars})`
  };
  `;
}

export default styled as CreateStyled<Theme>;
