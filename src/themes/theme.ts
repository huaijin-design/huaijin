import styled, { CreateStyled } from '@emotion/styled';
import { em as emBase } from 'polished';
import { fonts, colors } from './variable';

export const defaultTheme = {
  fontSize: fonts.size,
  color: {
    white: colors.white,
    default: colors.default,
    primary: colors.primary,
    success: colors.success,
    warning: colors.warning,
    danger: colors.danger,
    dark: colors.dark,
  },
};

export interface Theme {
  fontSize: string;
  color: {
    white: string
    default: string
    primary: string
    success: string
    warning: string
    danger: string
    dark: string
  };
}

export const em = (pxval: string | number) => emBase(pxval, defaultTheme.fontSize);

export default styled as CreateStyled<Theme>;
